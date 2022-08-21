const {
  characterCount,
  canVote,
  add,
  vowelCount,
  vowelCountV2,
} = require("../src/practice");

describe("characterCount function", () => {
  test("a string with more than 0 characters", () => {
    const result = characterCount("Martin");
    expect(result).toBe(6);
  });
  test("an empty string", () => {
    const result = characterCount("");
    expect(result).toBe(0);
  });
});

describe("canVote function", () => {
  test("age is less than 18", () => {
    const result = canVote(17);
    expect(result).toBe(false);
  });
  test("age is 18", () => {
    const result = canVote(18);
    expect(result).toBe(true);
  });
  test("age is greater than 18", () => {
    const result = canVote(19);
    expect(result).toBe(true);
  });
});

describe("add function", () => {
  test("both numbers are positive", () => {
    const result = add(2, 2);
    expect(result).toBe(4);
  });
  test("both numbers are negative", () => {
    const result = add(-2, -2);
    expect(result).toBe(-4);
  });
  test("both numbers have decimals", () => {
    const result = add(1.25, 1.25);
    expect(result).toBe(2.5);
  });
  test("one number is positive and one is negative", () => {
    const result = add(-2, 2);
    expect(result).toBe(0);
  });
});

describe("vowelCount function", () => {
  test("a word with one vowel", () => {
    const result = vowelCount("Max");
    expect(result).toBe(1);
  });
  test("a word with two vowels", () => {
    const result = vowelCount("James");
    expect(result).toBe(2);
  });
  test("a string of consonants", () => {
    const result = vowelCount("xzx");
    expect(result).toBe(0);
  });
  test("a string of consonants", () => {
    const result = vowelCount("myth");
    expect(result).toBe(0);
  });
});

describe("vowelCountV2 function", () => {
  test("first word has more vowels", () => {
    let result = vowelCountV2("Ruhul", "Mitch");
    expect(result).toBe("Ruhul");
  });
  test("second word has more vowels", () => {
    let result = vowelCountV2("Mitch", "Ruhul");
    expect(result).toBe("Ruhul");
  });
  test("both words have the same number of vowels", () => {
    let result = vowelCountV2("Mitch", "Mitch");
    expect(result).toBe("same");
  });
  test("second word has more vowels", () => {
    let result = vowelCountV2("Itch", "scratch");
    expect(result).toBe("same");
  });
});
