"use strict";
describe("object", () => {
    it("should support in typescript", () => {
        const person = {
            id: "123",
            name: "John",
            age: 30
        };
        console.info(person);
        person.name = "John";
        person.age = 30;
        console.info(person);
    });
});
