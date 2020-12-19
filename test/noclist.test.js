import assert from "assert";
import { retry } from "../src/util/retry.js";

describe("Test asynchronous 'retry' function", () => {
  describe("Make call that randomly fails.", () => {
    it("Attempts no more than three times", async() => {
      let attemptsNotGreaterThanThree;
      let attempts = 0;
      // TODO: Extract to util
      const failingFunction = () => {
        const int = 2;

        return () => {
          if (int < 5) {
            attempts += 1;
            throw 'Random failure.'
          }

          // TODO: modify this function to fail a random number of times
          //       for more varied testing.
          // setTimeout(() => {}, 1000);
        };
      };

      try {
        await retry(failingFunction());
      } catch(err) {
        console.error(err);
      }

      attemptsNotGreaterThanThree = attempts < 4;
      console.log('attempts: ', attempts);

      assert(attemptsNotGreaterThanThree);
    });
  });
});
