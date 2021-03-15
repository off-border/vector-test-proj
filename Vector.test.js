const Vector = require('./Vector.js');

describe('Vector class', () => {
    describe('constructor', () => {
        it('should assign values array', () => {
            const vector = new Vector([1, 2, 3]);
            expect(vector.values).toEqual([1, 2, 3]);
        });
    });

    describe('math operations', () => {
        let v1, v2, v3;

        beforeEach(() => {
            v1 = new Vector([1, 2, 3]);
            v2 = new Vector([4, 5, 6]);
            v3 = new Vector([1, 2]);
        });

        describe('addition', () => {
            it('throws an error for non same-dimentional vectors', () => {
                expect(() => v1.add(v3)).toThrow(
                    'Vectors should be same-dimentional'
                );
            });

            it('adds two vectors', () => {
                const sum = v1.add(v2);
                expect(sum.values).toEqual([5, 7, 9]);
            });
        });
    });
});
