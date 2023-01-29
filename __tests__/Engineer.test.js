const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("getOfficeNumber", () => {
        it("should return an input's officeNumber property", () =>{
            const object = new Engineer ("Larry","1","lar@neff.com","1")
            const oHub = object.github;
            
            const result = object.getGithub();

            expect(result).toEqual(oHub)
        })
    })


})