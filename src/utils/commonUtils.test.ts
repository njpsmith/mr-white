import { describe, it, expect } from "vitest";
import { capitalizeFirstLetter, getRandomItem } from "./commonUtils";

describe("capitalizeFirstLetter", () => {
  it("Capitalizes the first letter of a string", () => {
    const lowercaseString = "banana";
    const result = capitalizeFirstLetter(lowercaseString);
    expect(result).toBe("Banana");
  });
});

describe("getRandomItem", () => {
  it("Returns a random value from the array", () => {
    const array = ["a", "b"];
    const result = getRandomItem(array);
    expect(array).toContain(result);
  });
});
