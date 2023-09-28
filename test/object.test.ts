describe("object", () => {
    it("should support in typescript", () => {
        const person :{id: string; name: string; age: number}= {
            id: "123",
            name: "John",
            age: 30
        };
        console.info(person);
        person.name = "John";
        person.age = 30;

        console.info(person);
    })
})