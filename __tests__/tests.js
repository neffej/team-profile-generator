const Manager = require("../lib/Manager");

const object = new Manager ("Larry","1","lar@neff.com","1")
const oNumber = object.officeNumber;

// const result = new getOfficeNumber();

console.log(object.getOfficeNumber())
// expect(result).toEqual(oNumber)