"use strict";
describe('array', function () {
    it('should', function () {
        const names = ['yoru', 'phoenix'];
        const values = [1, 2, 3];
        names[0] = 'ace';
        console.info(names);
        console.info(values);
    });
    //read only
    it('read-only', function () {
        const secondName = ['sage', 'omen'];
    });
    //tuple
    it('tupple version', function () {
        const person = ['reyna', 'skye', 60];
    });
});
