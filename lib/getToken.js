import apiEndpoint from "../src/config/apiEndpoint.js";
import fetch from "node-fetch";

const getToken = () => {
    return fetch(apiEndpoint + '/auth')
      .then( (response) => {
        if(!response.status === "200") {
          throw "Error retrieving token.";
        };
        let token;

        for (let headerPair of response.headers.entries()) {
          const headerName = headerPair[0];
          if (headerName === 'badsec-authentication-token') {
            token = headerPair[1];
          }
        }

        return token;
      })
};

export default getToken;