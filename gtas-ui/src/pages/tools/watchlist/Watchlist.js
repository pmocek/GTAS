import React from 'react';
import Table from '../../../components/table/Table';
import {company} from '../../../services/serviceWrapper';
import Title from '../../../components/title/Title';


const Watchlist = () => {
  const cb = function(result){
  
  }
  
  return (
    <div className='container'>
      <Title title='Watchlist'></Title>

      <div className='columns'>
          <div className='top'>
            <Table service={company.get} id='foo' callback={cb} ></Table>
          </div>
      </div>
    </div>
)

}

export default Watchlist;