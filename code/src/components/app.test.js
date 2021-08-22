const app = require("./app")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new app.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
