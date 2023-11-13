module.exports = {
  /**
   * Generate a function to validate model properties
   * @param {Array<string>} valid - Array of valid properties as strings
   * @return {Function} A function that takes an object to validate
   */
  validProps(valid) {
    return (propsToCheck) => {
      for (const p in propsToCheck) {
        if (!valid.includes(p)) {
          throw new Error("Invalid field: " + p);
        }
      }
      return propsToCheck;
    };
  },

  /**
   * Generate a function to ensure required model properties
   * @param {Array<string>} valid - Array of required properties as strings
   * @return {Function} A function that takes an object to validate
   */
  requiredProps(required) {
    return (propsToCheck) => {
      for (const p of required) {
        if (!propsToCheck[p]) {
          throw new Error("Missing required field: " + p);
        }
      }
      return propsToCheck;
    };
  },
};
