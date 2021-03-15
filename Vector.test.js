const Vector = require('./Vector.js');

const SAME_DIM_ERR = 'Vectors should be same-dimentional';
//
const CROSS_PROD_DIM_ERR = 'crossProduct works only for 3-dimensional vectors';

describe('Vector', () => {
    describe('constructor', () => {
        it('should assign values array', () => {
            const vector = new Vector([1, 2, 3]);
            expect(vector.values).toEqual([1, 2, 3]);
        });
    });

    describe('methods', () => {
        let v1, v2, v3;

        beforeEach(() => {
            v1 = new Vector([1, 2, 3]);
            v2 = new Vector([4, 5, 7]);
            v3 = new Vector([1, 2]);
        });

        describe('add(v): add current vector to a given one', () => {
            it('throws an error for non same-dimentional vectors', () => {
                expect(() => v1.add(v3)).toThrow(SAME_DIM_ERR);
            });

            it('returns new vector with result', () => {
                expect(v1.add(v2).values).toEqual([5, 7, 10]);
            });
        });

        describe('subtract(v): subtract a given vector from current', () => {
            it('throws an error for non same-dimentional vectors', () => {
                expect(() => v1.subtract(v3)).toThrow(SAME_DIM_ERR);
            });

            it('returns new vector with result', () => {
                expect(v1.subtract(v2).values).toEqual([-3, -3, -4]);
            });
        });

        describe('tensorProduct(v) tensor production', () => {
            it('throws an error for non same-dimentional vectors', () => {
                expect(() => v1.tensorProduct(v3)).toThrow(SAME_DIM_ERR);
            });

            it('returns new vector with result', () => {
                expect(v1.tensorProduct(v2).values).toEqual([4, 10, 21]);
            });
        });

        describe('dotProduct(v): dot production (scalar)', () => {
            it('throws an error for non same-dimentional vectors', () => {
                expect(() => v1.dotProduct(v3)).toThrow(SAME_DIM_ERR);
            });

            it('returns scalar with result', () => {
                expect(v1.dotProduct(v2)).toEqual(35);
            });
        });

        describe('crossProduct(v): cross production (vector)', () => {
            it('throws an error for non same-dimentional vectors', () => {
                expect(() => v3.crossProduct(v3)).toThrow(CROSS_PROD_DIM_ERR);
            });

            it('returns new vector with result', () => {
                expect(v1.crossProduct(v2).values).toEqual([-1, 5, -3]);
            });
        });

        describe('scalarMultiply(v): scalar multiplication', () => {
            it('returns new vector with result', () => {
                expect(v1.scalarMultiply(3).values).toEqual([3, 6, 9]);
            });
        });

        describe('equals(v)', () => {
            it('false for different-dimentional vectors', () => {
                expect(v1.equals([1, 2])).toBe(false);
            });
            
            it('true if vectors are equal', () => {
                expect(v1.equals(new Vector([1, 2, 3]))).toBe(true);
            });

            it('false if vectors are not equal', () => {
                expect(v1.equals(new Vector([1, 2, 4]))).toBe(false);
            });
        });
    });
});
