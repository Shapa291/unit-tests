function expect(value) {
  return {
    toBe: (ex) => {
      if (value == ex) {
        console.log("Success");
      } else {
        console.error(`Value is ${value}, but expectation is ${ex}`);
      }
    },
  };
}

const sum = (a, b) => a + b ;

const nativeNull = () => null;

module.exports = {sum, nativeNull}

//expect(sum(41, 1)).toBe(43)
