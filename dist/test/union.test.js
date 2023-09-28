"use strict";
describe('unions', () => {
    let sample = 'scorpion';
    console.log(sample);
    sample = 100;
    console.info(sample);
    sample = true;
    console.log(sample);
});
it('should support typeof operator', function () {
    function process(value) {
        if (typeof value === 'string') {
            return value.toUpperCase();
        }
        else if (typeof value === 'number') {
            return value * 2;
        }
        else {
            return !value;
        }
    }
    expect(process(100)).toBe(200);
});
