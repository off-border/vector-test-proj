const Vector = require('./Vector.js');

const SAME_DIM_ERR = 'Vectors should be same-dimentional';

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
            v2 = new Vector([4, 5, 7]);
            v3 = new Vector([1, 2]);
        });

        describe('addition', () => {
            it('throws an error for non same-dimentional vectors', () => {
                expect(() => v1.add(v3)).toThrow(SAME_DIM_ERR);
            });

            it('returns new vector with result', () => {
                expect(v1.add(v2).values).toEqual([5, 7, 10]);
            });
        });

        describe('subtraction', () => {
            it('throws an error for non same-dimentional vectors', () => {
                expect(() => v1.subtract(v3)).toThrow(SAME_DIM_ERR);
            });

            it('returns new vector with result', () => {
                expect(v1.subtract(v2).values).toEqual([-3, -3, -4]);
            });
        });

        describe('tensor production', () => {
            it('throws an error for non same-dimentional vectors', () => {
                expect(() => v1.tensorProduct(v3)).toThrow(SAME_DIM_ERR);
            });

            it('returns new vector with result', () => {
                expect(v1.tensorProduct(v2).values).toEqual([4, 10, 21]);
            });
        });

        describe('dot (scalar) production', () => {
            it('throws an error for non same-dimentional vectors', () => {
                expect(() => v1.dotProduct(v3)).toThrow(SAME_DIM_ERR);
            });

            it('returns scalar with result', () => {
                expect(v1.dotProduct(v2)).toEqual(35);
            });
        });

        describe('cross (vector) production', () => {
            it('throws an error for non same-dimentional vectors', () => {
                expect(() => v1.crossProduct(v3)).toThrow(SAME_DIM_ERR);
            });

            it('returns new vector with result', () => {
               //  expect(v1.crossroduct(v2)).toEqual([-1, 5, -3]);
            });
        });

        describe('scalar multiplication', () => {
            it('returns new vector with result', () => {
                const result = v1.scalarMultiply(3);
                expect(result.values).toEqual([3, 6, 9]);
            });
        });
    });
});
