/**
 * Class for performing math operations over vectors
 */
module.exports = class Vector {
    #values = [];

    /**
     * Constructor
     *
     * @param {number[]} values - Vector coordinates.
     */
    constructor(values = []) {
        this.#values = [...values];
        this.size = values.length;
    }

    /**
     * Get vector values
     *
     * @return {number[]}
     */
    get values() {
        return this.#values;
    }

    /**
     * Returns vector value at i-th coordinate
     *
     * @return {number}
     */
    at(i) {
        return this.#values[i];
    }

    /**
     * Adds a given vector to the current
     *
     * @param {Vector} vector
     *
     * @return {Vector} new vector
     */
    add(vector) {
        this.#checkSameDimentional(vector);

        const result = this.#values.map((a, i) => a + vector.at(i));

        return new Vector(result);
    }

    /**
     * Substracts a given vector from the current
     *
     * @param {Vector} vector
     *
     * @return {Vector} new vector
     */
    subtract(vector) {
        this.#checkSameDimentional(vector);

        const result = this.#values.map((a, i) => a - vector.at(i));

        return new Vector(result);
    }

    /**
     * Multiplies vector with scalar
     *
     * @param {number} x
     *
     * @return {Vector} new vector
     */
    scalarMultiply(x) {
        const result = this.#values.map((a) => a * x);

        return new Vector(result);
    }

    /**
     * Tensor production of current vector with another
     *
     * @param {Vector} vector
     *
     * @return {Vector} new vector
     */
    tensorProduct(vector) {
        this.#checkSameDimentional(vector);

        const result = this.#values.map((a, i) => a * vector.at(i));

        return new Vector(result);
    }

    /**
     * Dot production of current vector with another
     *
     * @param {Vector} vector
     *
     * @return {number} result
     */
    dotProduct(vector) {
        this.#checkSameDimentional(vector);

        const result = this.tensorProduct(vector).values.reduce(
            (s, a) => s + a,
            0
        );

        return result;
    }

    /**
     * Cross production of current vector with another
     *
     * @param {Vector} vector
     *
     * @throws {Error}
     *
     * @return {Vector} new vector
     */
    crossProduct(vector) {
        if (this.size !== 3 || vector.size !== 3)
            throw new Error(
                'crossProduct works only for 3-dimensional vectors'
            );
        const [a, b] = [this.values, vector.values];
        const [x, y, z] = [0, 1, 2];

        const result = [
            a[y] * b[z] - a[z] * b[y],
            a[z] * b[x] - a[x] * b[z],
            a[x] * b[y] - a[y] * b[x],
        ];

        return new Vector(result);
    }

    /**
     * Equality to given vector
     *
     * @param {Vector} vector
     *
     * @return {boolean} result
     */
    equals(vector) {
        if (this.size !== vector.size) return false;

        return this.values.every((a, i) => a === vector.at(i));
    }

    /**
     * Checks if the vector has thame dimensions to given one
     *
     * @param {Vector} vector
     *
     * @throws {Vector} new vector
     */
    #checkSameDimentional(vector) {
        if (this.size !== vector.size)
            throw new Error('Vectors should be same-dimentional');
    }
};
