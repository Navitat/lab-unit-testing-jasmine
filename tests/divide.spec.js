// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("Should be defined", () => {
      expect(divide).toBeDefined();
    });
    it("Should take two arguments", () => {
      expect(divide.length).toBe(2);
    });
    it("Should return the division of the two numbers", () => {
      expect(divide(4, 2)).toEqual(2);
    });
    it("Should return undefined if any of the arguments is not provided", () => {
      expect(divide(4)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 2)).toEqual(undefined);
    });
  });
});
