import { retry } from "./src/util/retry.js";
import getToken from "./lib/getToken.js";

retry(getToken)
  .then( (data) => {
    console.log(data);
    // TODO: hash token and '/users' endpoint for checksum
    //    Retrieve list from '/users' path
    //    Output list as json
  });
