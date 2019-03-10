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
        expect(i1.includes(i2)).toBe(true);
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

describe('union', function () {

    test('Interval inner union', () => {
        let i1 = new Interval(10, 22);
        let i2 = new Interval(13, 20);
        expect(i1.union(i2)).toEqual([new Interval(10, 22)]);
    });

    test('Interval union', () => {
        let i1 = new Interval(10, 15);
        let i2 = new Interval(13, 22);
        expect(i1.union(i2)).toEqual([new Interval(10, 22)]);
    });

    test('Interval disjoint union', () => {
        let i1 = new Interval(10, 15);
        let i3 = new Interval(20, 22);
        expect(i1.union(i3)).toEqual([new Interval(10, 15),new Interval(20, 22)]);
    });

    test('Interval perfect union', () => {
        let i1 = new Interval(10, 15);
        expect(i1.union(i1)).toEqual([new Interval(10, 15)]);
    });

    test('Interval edge union', () => {
        let i1 = new Interval(10, 15);
        let i3 = new Interval(15, 22);
        expect(i1.union(i3)).toEqual([new Interval(10, 22)]);
    });

    test('Interval reverse union', () => {
        let i1 = new Interval(15, 25);
        let i3 = new Interval(10, 16);
        expect(i1.union(i3)).toEqual([new Interval(10, 25)]);
    });

    test('Interval disjoint reverse union', () => {
        let i1 = new Interval(19, 25);
        let i3 = new Interval(10, 18);
        expect(i1.union(i3)).toEqual([new Interval(10, 18), new Interval(19, 25)]);
    });
});

describe('intersection', function () {

    test('Interval intersection', () => {
        let i1 = new Interval(10, 20);
        let i2 = new Interval(13, 22);
        expect(i1.intersection(i2)).toEqual(new Interval(13, 20));
    });

    test('Interval intersection at edge', () => {
        let i1 = new Interval(10, 15);
        let i2 = new Interval(15, 22);
        expect(i1.intersection(i2)).toEqual(new Interval(15, 15));
    });

    test('Interval almost intersection at edge', () => {
        let i1 = new Interval(10, 13);
        let i3 = new Interval(14, 22);
        expect(i1.intersection(i3)).toEqual(null);
    });

    test('Interval perfect intersection', () => {
        let i1 = new Interval(10, 15);
        expect(i1.intersection(i1)).toEqual(new Interval(10, 15));
    });

    test('Interval no intersection', () => {
        let i1 = new Interval(10, 12);
        let i3 = new Interval(16, 22);
        expect(i1.intersection(i3)).toEqual(null);
    });

    test('Interval reverse intersection', () => {
        let i1 = new Interval(15, 25);
        let i3 = new Interval(10, 16);
        expect(i1.intersection(i3)).toEqual(new Interval(15, 16));
    });

    test('Interval reverse no intersection', () => {
        let i1 = new Interval(19, 25);
        let i3 = new Interval(10, 17);
        expect(i1.intersection(i3)).toEqual(null);
    });
});
