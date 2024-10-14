import Prisma from "../src/db";
import { server } from "../src/server";

describe("server test", () => {
  it("should assert 1 + 1 is 2", () => {
    expect(1 + 1).toEqual(2);
  });
});

describe("server test", () => {
  it("should change the value of a variable", () => {
  var num = 1;
  num = 2;
  expect(num).toEqual(2);
  });
}); 

describe("server test", () => {
  it("dividing by 0 is undefined", () => {
  const num = 5/0;
  expect(num).toBeUndefined;
  });
}); 

describe("server test", () => {
  it("positive numbers are greater than 0", () => {
  for (let i=1; i<11; i++){
    expect(i).toBeGreaterThan(0);
  }
}); 
});

describe("server test", () => {
  it("logical && and || should work as expected", () => {
    const a1 = true && true
    expect(a1).toBeTruthy
    const a2 = true && false
    expect(a2).toBeFalsy
    const a3 = false && true
    expect(a3).toBeFalsy
    const a4 = false && false
    expect(a4).toBeFalsy
    const b1 = true || true
    expect(b1).toBeTruthy
    const b2 = true || false
    expect(b2).toBeTruthy
    const b3 = false || true
    expect(b3).toBeTruthy
    const b4 = false || false
    expect(b4).toBeFalsy
  });
});

describe("server test", () => {
  it("array [0, 1, 5, 6, 9, 2] should contain 0 and not contain 4", () => {
  const arr = [0, 1, 5, 6, 9, 2]
  expect(arr).toContain(0)
  expect(arr).not.toContain(4)
  });
});