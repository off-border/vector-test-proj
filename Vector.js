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
        this.#checkSameDimentions(v);

        const result = this.tensorProduct(v).values
            .reduce((s, a) => s + a, 0);

        return result;
    }

    #checkSameDimentions(v) {
        if (this.size !== v.size)
            throw new Error('Vectors should be same-dimentional');
    }
};
