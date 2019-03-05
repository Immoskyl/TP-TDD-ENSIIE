const inter = require('../../interval');

describe('overlaps', function () {

    test('Intervals overlap', () => {
        let i1 = new inter.Interval(10, 15);
        let i2 = new inter.Interval(13, 22);
        expect(i1.overlaps(i2)).toBe(true);
    });

    test('Intervals do not overlap', () => {
        let i1 = new inter.Interval(10, 15);
        let i3 = new inter.Interval(20, 22);
        expect(i1.overlaps(i3)).toBe(false);
    });
});
