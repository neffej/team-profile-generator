const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("getOfficeNumber", () => {
        it("should return an input's officeNumber property", () =>{
            const object = new Manager ("Larry","1","lar@neff.com","1")
            const oNumber = object.officeNumber;
            
            const result = object.getOfficeNumber();

            expect(result).toEqual(oNumber)
        })
    })
})