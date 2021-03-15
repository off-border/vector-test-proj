module.exports = class Vector {
    #values = [];
    constructor(values = []) {
        this.#values = [...values];
        this.size = values.length;
    }

    get values() {
        return this.#values;
    }

    at(i) {
        return this.#values[i];
    }

    add(v) {
        this.#checkSameDimentions(v);

        const result = this.#values.map((a, i) => a + v.at(i));

        return new Vector(result);
    }

    subtract(v) {
        this.#checkSameDimentions(v);

        const result = this.#values.map((a, i) => a - v.at(i));

        return new Vector(result);
    }

    scalarMultiply(x) {
        const result = this.#values.map((a) => a * x);

        return new Vector(result);
    }

    tensorProduct(v) {
        this.#checkSameDimentions(v);

        const result = this.#values
            .map((a, i) => a * v.at(i));

        return new Vector(result);
    }

    dotProduct(v) {
        this.#checkSameDimentions(v);

        const result = this.tensorProduct(v).values
            .reduce((s, a) => s + a, 0);

        return result;
    }

    crossProduct(v) {
        if (this.size !== 3 || v.size !== 3)
            throw new Error('crossProduct works only for 3-dimensional vectors');
        const [a, b] = [this.values, v.values];
        const [x, y, z] = [0, 1, 2];

        const result = [
            a[y] * b[z] - a[z] * b[y],
            a[z] * b[x] - a[x] * b[z],
            a[x] * b[y] - a[y] * b[x]
        ];

        return new Vector(result);
    }

    #checkSameDimentions(v) {
        if (this.size !== v.size)
            throw new Error('Vectors should be same-dimentional');
    }
};
