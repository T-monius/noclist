import apiEndpoint from "../src/config/apiEndpoint.js";
import fetch from "node-fetch";

const getToken = () => {
    return fetch
      .get(apiEndpoint)
      .then( (response) => {
        if(!response.status === "200") {
          throw "Error retrieving token.";
        };

        response.json();
      })
      .then( (data) => data );
};

export default getToken;