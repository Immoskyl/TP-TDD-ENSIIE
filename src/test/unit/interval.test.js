const Interval = require('../../interval');

//npm run test

describe('overlaps', function () {

    test('Intervals overlap1', () => {
        let i1 = new Interval(10, 15);
        let i2 = new Interval(13, 22);
        expect(i1.overlaps(i2)).toBe(true);
    });

    test('Intervals overlap2', () => {
        let i1 = new Interval(10, 15);
        expect(i1.overlaps(i1)).toBe(true);
    });

    test('Intervals do not overlap1', () => {
        let i1 = new Interval(10, 15);
        let i3 = new Interval(20, 22);
        expect(i1.overlaps(i3)).toBe(false);
    });

    test('Intervals do not overlap2', () => {
        let i1 = new Interval(10, 15);
        let i3 = new Interval(20, 22);
        expect(i3.overlaps(i1)).toBe(false);
    });

    test('Interval of one overlap', () => {
        let i1 = new Interval(10, 15);
        let i3 = new Interval(15, 22);
        expect(i1.overlaps(i3)).toBe(true);
    });

test('Interval overlap with a point', () => {
    let i1 = new Interval(10, 15);
        let i3 = new Interval(14, 14);
        expect(i1.overlaps(i3)).toBe(true);
    });

});

describe('includes', function () {

    test('Interval includes1', () => {
        let i1 = new Interval(10, 22);
        let i2 = new Interval(13, 22);
        expect(i1.overlaps(i2)).toBe(true);
    });

    test('Interval includes', () => {
        let i1 = new Interval(10, 15);
        expect(i1.includes(i1)).toBe(true);
    });

    test('Interval does not include', () => {
        let i1 = new Interval(10, 15);
        let i3 = new Interval(20, 22);
        expect(i1.includes(i3)).toBe(false);
    });

    test('Interval does not include2', () => {
        let i1 = new Interval(10, 15);
        let i3 = new Interval(10, 22);
        expect(i1.includes(i3)).toBe(false);
    });

    test('Interval includes a point at one edge', () => {
        let i1 = new Interval(10, 15);
        let i3 = new Interval(15, 15);
        expect(i1.includes(i3)).toBe(true);
    });
});
