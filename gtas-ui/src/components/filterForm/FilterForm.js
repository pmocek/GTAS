import React from "react";
import PropTypes from "prop-types";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import { hasData, asArray } from "../../utils/text";
import "./FilterForm.css";

/**
 * **Generic filter form used to fetch data for use in another component.**
 */

class FilterForm extends React.Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onReset = this.onReset.bind(this);

    let fields = [];
    let fieldMap = [];
    let datafieldNames = [];

    asArray(this.props.children).forEach((child, idx) => {
      const datafield = child.props.datafield;

      if (datafield) {
        const noname = `unnamedfield${idx}`;
        const componentname = child.props.name || noname;
        const fieldname = datafield === true ? componentname : datafield;

        // Either the name or datafield prop must contain a string
        if (fieldname === noname) {
          throw new Error(`The child collection contains a "datafield" element whose name is not defined in the 
          "name" or "datafield" props. Remove the "datafield" prop or define a name for the element.`);
        }
        const getChildVal = val => {
          if (val instanceof Date) {
            return val.toISOString();
          } else {
            return val;
          }
        };
        fieldMap[componentname] = fieldname;
        fields[fieldMap[componentname]] = getChildVal(child.props.inputVal);
        datafieldNames.push(fieldname);
      }
    });

    // TODO: refac formkey as collection/hash of form values. Poss pass caching options in as prop?
    this.state = {
      fields: fields, // array of data fields and their current vals. This gets sent to the DB as a filter.
      fieldMap: fieldMap, // maps the names of the child components to the data fields.
      datafieldNames: datafieldNames,
      getSuccess: "",
      kids: [],
      formkey: 1 // ID to force FilterForm to redraw its child form
    };
  }

  // To reset the FilterForm, we clear the values of the input fields in state and re-render
  // the cleared form by updating the form's key. We could also dynamically generate a ref for each
  // child field and clear each ref, but this is simpler.
  onReset = () => {
    let key = this.state.formkey;
    let fields = [];

    this.state.datafieldNames.forEach(function(name) {
      fields[name] = "";
    });

    this.setState({ fields: fields, formkey: ++key });
  };

  componentDidMount() {
    this.bindChildren(this.state.fields);
    this.fetchWithParams();
  }

  fetchWithParams() {
    let params;
    if (this.props.paramAdapter === undefined) {
      // default behavior
      let fields = this.state.fields;
      params = "?";
      for (let field in fields) {
        if (hasData(fields[field])) params += `${field}=${fields[field]}&`;
      }
      params += "action=get";
    } else {
      params = this.props.paramAdapter(this.state.fields);
    }

    this.fetchData(params);
  }

  fetchData(params) {
    this.props.service(params).then(res => {
      this.props.callback(res);
    });
  }

  // Update state with the new value of whichever datafield changed
  onChange(ev) {
    const componentname = ev.name;
    const value = ev.value;

    let newfields = this.state.fields;
    let datafieldname = this.state.fieldMap[componentname];

    newfields[datafieldname] = value;

    this.setState({
      fields: newfields
    });
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.fetchWithParams();
  }

  // bind children containing form data (datafield prop) to the ev handler and state
  bindChildren(populatedFields) {
    let boundChildren = asArray(this.props.children).map((child, idx) => {
      if (!child.props.datafield) return child;

      let cleanprops = Object.assign({}, child.props);
      // intercept the callback so FilterForm is notified of input field changes.
      // Delete it here, and replace it in newchild (below) with a FilterForm handler.
      // We can also forward the event on to the original callback or to a parent
      // of FilterForm if needed.
      delete cleanprops.callback;

      let newchild = React.cloneElement(child, {
        key: idx,
        callback: this.onChange,
        //  TODO: See if "value" is nessesary
        // value: populatedFields[this.state.fieldMap[child.props.name]] || "",
        ...cleanprops
      });
      return newchild;
    });

    this.setState({
      kids: boundChildren,
      fields: populatedFields,
      getSuccess: hasData(populatedFields)
    });
  }

  render() {
    return (
      <div>
        <div className="menu-label has-text-centered">{this.props.title}</div>
        <form
          onSubmit={this.onFormSubmit}
          onReset={this.onReset}
          key={this.state.formkey}
        >
          <ErrorBoundary message="FilterForm children could not be rendered">
            {this.state.kids}
          </ErrorBoundary>
          <div className="text-center pad-top-20 flex-button" id="button-div">
            <button className={`button is-block button`} type="reset">
              {this.props.clearText || "Reset"}
            </button>
            <button className={`button is-block is-info gradient-button`} type="submit">
              {this.props.submitText || "Search"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

FilterForm.propTypes = {
  title: PropTypes.string,
  submitText: PropTypes.string,
  clearText: PropTypes.string,
  service: PropTypes.func.isRequired,
  id: PropTypes.string,
  callback: PropTypes.func.isRequired,
  paramAdapter: PropTypes.func
};

export default FilterForm;