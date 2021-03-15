module.exports = class Vector {
    #values = []
    constructor(values = []) {
        this.#values = [...values]
        this.size = values.length;
    }

    get values() {
        return this.#values
    }

    at(i) {
        return this.#values[i];
    }

    add(v) {
        if (this.size !== v.size)
            throw new Error('Vectors should be same-dimentional')

        const result = this.#values.map((a, i) => a + v.at(i))

        return new Vector(result)
    }
}
