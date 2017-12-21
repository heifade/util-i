import { expect } from "chai";
import { isNull, isEmpty } from "../src/index";
import "mocha";

describe("null", function() {
  before(async () => {});
  after(async () => {});

  it("isNull", async () => {
    expect(isNull(null)).to.be.true;
    expect(isNull(undefined)).to.be.true;


    expect(isNull(1)).to.be.false;
    expect(isNull(0)).to.be.false;
    expect(isNull("")).to.be.false;
    expect(isNull(false)).to.be.false;
    expect(isNull(true)).to.be.false;
    expect(isNull(NaN)).to.be.false;
    expect(isNull(Number.NaN)).to.be.false;
    expect(isNull({})).to.be.false;
    expect(isNull({a: 1})).to.be.false;
    expect(isNull([])).to.be.false;
    expect(isNull([1])).to.be.false;
  });

  it("isEmpty", async () => {

    expect(isEmpty('')).to.be.true;
    expect(isEmpty(null)).to.be.true;
    expect(isEmpty(undefined)).to.be.true;
    expect(isEmpty({})).to.be.true;
    expect(isEmpty([])).to.be.true;

    expect(isEmpty(1)).to.be.false;
    expect(isEmpty(0)).to.be.false;
    
    expect(isEmpty(false)).to.be.false;
    expect(isEmpty(true)).to.be.false;
    expect(isEmpty(NaN)).to.be.false;
    expect(isEmpty(Number.NaN)).to.be.false;
    
    expect(isEmpty({a: 1})).to.be.false;
    
    expect(isEmpty([1])).to.be.false;

  });

  
});
