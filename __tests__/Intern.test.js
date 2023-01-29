const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("getschool", () => {
        it("should return an input's school property", () =>{
            const object = new Intern ("Larry","1","lar@neff.com","1")
            const oSchool = object.school;
            
            const result = object.getSchool();

            expect(result).toEqual(oSchool)
        })
    })


})