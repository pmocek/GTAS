export default function HttpStatus(errCode) {
  const codes = [
    {
      code: '1xx',
      phrase: '**Informational**',
      description: 'An interim response for communicating connection status or request progress prior to completing the requested action and sending a final response. ~ [sure](http://www.urbandictionary.com/define.php?term=sure)',
      spec_title: 'RFC7231#6.2',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.2'
    },
    {
      code: '100',
      phrase: 'Continue',
      description: 'The initial part of a request has been received and has not yet been rejected by the server.',
      spec_title: 'RFC7231#6.2.1',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.2.1'
    },
    {
      code: '101',
      phrase: 'Switching Protocols',
      description: "The server understands and is willing to comply with the client's request, via the Upgrade header field, for a change in the application protocol being used on this connection.",
      spec_title: 'RFC7231#6.2.2',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.2.2'
    },
    {
      code: '2xx',
      phrase: '**Successful**',
      description: "The client's request was successfully received, understood, and accepted. ~ [cool](https://twitter.com/DanaDanger/status/183316183494311936)",
      spec_title: 'RFC7231#6.3',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.3'
    },
    {
      code: '200',
      phrase: 'OK',
      description: 'The request has succeeded.',
      spec_title: 'RFC7231#6.3.1',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.3.1'
    },
    {
      code: '201',
      phrase: 'Created',
      description: 'The request has been fulfilled and has resulted in one or more new resources being created.',
      spec_title: 'RFC7231#6.3.2',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.3.2'
    },
    {
      code: '202',
      phrase: 'Accepted',
      description: 'The request has been accepted for processing, but the processing has not been completed.',
      spec_title: 'RFC7231#6.3.3',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.3.3'
    },
    {
      code: '203',
      phrase: 'Non-Authoritative Information',
      description: "The request was successful but the enclosed payload has been modified from that of the origin server's 200 (OK) response by a transforming proxy.",
      spec_title: 'RFC7231#6.3.4',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.3.4'
    },
    {
      code: '204',
      phrase: 'No Content',
      description: 'The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.',
      spec_title: 'RFC7231#6.3.5',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.3.5'
    },
    {
      code: '205',
      phrase: 'Reset Content',
      description: 'The server has fulfilled the request and desires that the user agent reset the document view, which caused the request to be sent, to its original state as received from the origin server.',
      spec_title: 'RFC7231#6.3.6',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.3.6'
    },
    {
      code: '206',
      phrase: 'Partial Content',
      description: "The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests's Range header field.",
      spec_title: 'RFC7233#4.1',
      spec_href: 'https://tools.ietf.org/html/rfc7233#section-4.1'
    },
    {
      code: '3xx',
      phrase: '**Redirection**',
      description: 'Further action needs to be taken by the user agent in order to fulfill the request. ~ [ask that dude over there](https://twitter.com/DanaDanger/status/183316183494311936)',
      spec_title: 'RFC7231#6.4',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.4'
    },
    {
      code: '300',
      phrase: 'Multiple Choices',
      description: 'The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.',
      spec_title: 'RFC7231#6.4.1',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.4.1'
    },
    {
      code: '301',
      phrase: 'Moved Permanently',
      description: 'The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.',
      spec_title: 'RFC7231#6.4.2',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.4.2'
    },
    {
      code: '302',
      phrase: 'Found',
      description: 'The target resource resides temporarily under a different URI.',
      spec_title: 'RFC7231#6.4.3',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.4.3'
    },
    {
      code: '303',
      phrase: 'See Other',
      description: 'The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.',
      spec_title: 'RFC7231#6.4.4',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.4.4'
    },
    {
      code: '304',
      phrase: 'Not Modified',
      description: 'A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.',
      spec_title: 'RFC7232#4.1',
      spec_href: 'https://tools.ietf.org/html/rfc7232#section-4.1'
    },
    {
      code: '305',
      phrase: 'Use Proxy',
      description: '*Deprecated*',
      spec_title: 'RFC7231#6.4.5',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.4.5'
    },
    {
      code: '307',
      phrase: 'Temporary Redirect',
      description: 'The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.',
      spec_title: 'RFC7231#6.4.7',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.4.7'
    },
    {
      code: '4xx',
      phrase: '**Client Error**',
      description: 'The client seems to have erred. ~ [*you* fucked up](https://twitter.com/DanaDanger/status/183316183494311936)',
      spec_title: 'RFC7231#6.5',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.5'
    },
    {
      code: '400',
      phrase: 'Bad Request',
      description: 'The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.',
      spec_title: 'RFC7231#6.5.1',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.5.1'
    },
    {
      code: '401',
      phrase: 'Unauthorized',
      description: 'The request has not been applied because it lacks valid authentication credentials for the target resource.',
      spec_title: 'RFC7235#6.3.1',
      spec_href: 'https://tools.ietf.org/html/rfc7235#section-3.1'
    },
    {
      code: '402',
      phrase: 'Payment Required',
      description: '*Reserved*',
      spec_title: 'RFC7231#6.5.2',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.5.2'
    },
    {
      code: '403',
      phrase: 'Forbidden',
      description: 'The server understood the request but refuses to authorize it.',
      spec_title: 'RFC7231#6.5.3',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.5.3'
    },
    {
      code: '404',
      phrase: 'Not Found',
      description: 'The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.',
      spec_title: 'RFC7231#6.5.4',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.5.4'
    },
    {
      code: '405',
      phrase: 'Method Not Allowed',
      description: 'The method specified in the request-line is known by the origin server but not supported by the target resource.',
      spec_title: 'RFC7231#6.5.5',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.5.5'
    },
    {
      code: '406',
      phrase: 'Not Acceptable',
      description: 'The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.',
      spec_title: 'RFC7231#6.5.6',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.5.6'
    },
    {
      code: '407',
      phrase: 'Proxy Authentication Required',
      description: 'Similar to 401 (Unauthorized), but indicates that the client needs to authenticate itself in order to use a proxy.',
      spec_title: 'RFC7235#3.2',
      spec_href: 'https://tools.ietf.org/html/rfc7235#section-3.2'
    },
    {
      code: '408',
      phrase: 'Request Timeout',
      description: 'The server did not receive a complete request message within the time that it was prepared to wait.',
      spec_title: 'RFC7231#6.5.7',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.5.7'
    },
    {
      code: '409',
      phrase: 'Conflict',
      description: 'The request could not be completed due to a conflict with the current state of the resource.',
      spec_title: 'RFC7231#6.5.8',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.5.8'
    },
    {
      code: '410',
      phrase: 'Gone',
      description: 'Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.',
      spec_title: 'RFC7231#6.5.9',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.5.9'
    },
    {
      code: '411',
      phrase: 'Length Required',
      description: 'The server refuses to accept the request without a defined Content-Length.',
      spec_title: 'RFC7231#6.5.10',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.5.10'
    },
    {
      code: '412',
      phrase: 'Precondition Failed',
      description: 'One or more preconditions given in the request header fields evaluated to false when tested on the server.',
      spec_title: 'RFC7232#4.2',
      spec_href: 'https://tools.ietf.org/html/rfc7232#section-4.2'
    },
    {
      code: '413',
      phrase: 'Payload Too Large',
      description: 'The server is refusing to process a request because the request payload is larger than the server is willing or able to process.',
      spec_title: 'RFC7231#6.5.11',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.5.11'
    },
    {
      code: '414',
      phrase: 'URI Too Long',
      description: 'The server is refusing to service the request because the request-target is longer than the server is willing to interpret.',
      spec_title: 'RFC7231#6.5.12',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.5.12'
    },
    {
      code: '415',
      phrase: 'Unsupported Media Type',
      description: 'The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.',
      spec_title: 'RFC7231#6.5.13',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.5.13'
    },
    {
      code: '416',
      phrase: 'Range Not Satisfiable',
      description: "None of the ranges in the request's Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.",
      spec_title: 'RFC7233#4.4',
      spec_href: 'https://tools.ietf.org/html/rfc7233#section-4.4'
    },
    {
      code: '417',
      phrase: 'Expectation Failed',
      description: "The expectation given in the request's Expect header field could not be met by at least one of the inbound servers.",
      spec_title: 'RFC7231#6.5.14',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.5.14'
    },
    {
      code: '418',
      phrase: "I'm a teapot",
      description: "Any attempt to brew coffee with a teapot should result in the error code 418 I'm a teapot.",
      spec_title: 'RFC2324#2.3.1',
      spec_href: 'https://tools.ietf.org/html/rfc2324#section-2.3.1'
    },
    {
      code: '426',
      phrase: 'Upgrade Required',
      description: 'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.',
      spec_title: 'RFC7231#6.5.15',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.5.15'
    },
    {
      code: '5xx',
      phrase: '**Server Error**',
      description: 'The server is aware that it has erred or is incapable of performing the requested method. ~ [*we* fucked up](https://twitter.com/DanaDanger/status/183316183494311936)',
      spec_title: 'RFC7231#6.6',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.6'
    },
    {
      code: '500',
      phrase: 'Internal Server Error',
      description: 'The server encountered an unexpected condition that prevented it from fulfilling the request.',
      spec_title: 'RFC7231#6.6.1',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.6.1'
    },
    {
      code: '501',
      phrase: 'Not Implemented',
      description: 'The server does not support the functionality required to fulfill the request.',
      spec_title: 'RFC7231#6.6.2',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.6.2'
    },
    {
      code: '502',
      phrase: 'Bad Gateway',
      description: 'The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.',
      spec_title: 'RFC7231#6.6.3',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.6.3'
    },
    {
      code: '503',
      phrase: 'Service Unavailable',
      description: 'The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.',
      spec_title: 'RFC7231#6.6.4',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.6.4'
    },
    {
      code: '504',
      phrase: 'Gateway Time-out',
      description: 'The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.',
      spec_title: 'RFC7231#6.6.5',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.6.5'
    },
    {
      code: '505',
      phrase: 'HTTP Version Not Supported',
      description: 'The server does not support, or refuses to support, the protocol version that was used in the request message.',
      spec_title: 'RFC7231#6.6.6',
      spec_href: 'https://tools.ietf.org/html/rfc7231#section-6.6.6'
    },
    {
      code: '102',
      phrase: 'Processing',
      description: 'An interim response used to inform the client that the server has accepted the complete request, but has not yet completed it.',
      spec_title: 'RFC5218#10.1',
      spec_href: 'https://tools.ietf.org/html/rfc2518#section-10.1'
    },
    {
      code: '207',
      phrase: 'Multi-Status',
      description: 'Provides status for multiple independent operations.',
      spec_title: 'RFC5218#10.2',
      spec_href: 'https://tools.ietf.org/html/rfc2518#section-10.2'
    },
    {
      code: '226',
      phrase: 'IM Used',
      description: 'The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
      spec_title: 'RFC3229#10.4.1',
      spec_href: 'https://tools.ietf.org/html/rfc3229#section-10.4.1'
    },
    {
      code: '308',
      phrase: 'Permanent Redirect',
      description: 'The target resource has been assigned a new permanent URI and any future references to this resource outght to use one of the enclosed URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.',
      spec_title: 'RFC7538',
      spec_href: 'https://tools.ietf.org/html/rfc7538'
    },
    {
      code: '422',
      phrase: 'Unprocessable Entity',
      description: 'The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.',
      spec_title: 'RFC5218#10.3',
      spec_href: 'https://tools.ietf.org/html/rfc2518#section-10.3'
    },
    {
      code: '423',
      phrase: 'Locked',
      description: 'The source or destination resource of a method is locked.',
      spec_title: 'RFC5218#10.4',
      spec_href: 'https://tools.ietf.org/html/rfc2518#section-10.4'
    },
    {
      code: '424',
      phrase: 'Failed Dependency',
      description: 'The method could not be performed on the resource because the requested action depended on another action and that action failed.',
      spec_title: 'RFC5218#10.5',
      spec_href: 'https://tools.ietf.org/html/rfc2518#section-10.5'
    },
    {
      code: '428',
      phrase: 'Precondition Required',
      description: 'The origin server requires the request to be conditional.',
      spec_title: 'RFC6585#3',
      spec_href: 'https://tools.ietf.org/html/rfc6585#section-3'
    },
    {
      code: '429',
      phrase: 'Too Many Requests',
      description: 'The user has sent too many requests in a given amount of time (rate limiting).',
      spec_title: 'RFC6585#4',
      spec_href: 'https://tools.ietf.org/html/rfc6585#section-4'
    },
    {
      code: '431',
      phrase: 'Request Header Fields Too Large',
      description: 'The server is unwilling to process the request because its header fields are too large.',
      spec_title: 'RFC6585#5',
      spec_href: 'https://tools.ietf.org/html/rfc6585#section-5'
    },
    {
      code: '451',
      phrase: 'Unavailable For Legal Reasons',
      description: 'The server is denying access to the resource in response to a legal demand.',
      spec_title: 'draft-ietf-httpbis-legally-restricted-status',
      spec_href: 'https://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status'
    },
    {
      code: '506',
      phrase: 'Variant Also Negotiates',
      description: 'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.',
      spec_title: 'RFC2295#8.1',
      spec_href: 'https://tools.ietf.org/html/rfc2295#section-8.1'
    },
    {
      code: '507',
      phrase: 'Insufficient Storage',
      description: 'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.',
      spec_title: 'RFC5218#10.6',
      spec_href: 'https://tools.ietf.org/html/rfc2518#section-10.6'
    },
    {
      code: '511',
      phrase: 'Network Authentication Required',
      description: 'The client needs to authenticate to gain network access.',
      spec_title: 'RFC6585#6',
      spec_href: 'https://tools.ietf.org/html/rfc6585#section-6'
    },
    {
      code: '7xx',
      phrase: '**Developer Error**',
      description: '[err](http://www.urbandictionary.com/define.php?term=err)',
      spec_title: '7xx-rfc',
      spec_href: 'http://documentup.com/joho/7XX-rfc'
    }
  ];

  const code = codes.find(status => {
    return +status.code === +errCode;
  });

  return code;
}
