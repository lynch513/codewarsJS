const assert = require('chai').assert;
const filterList = require('../src/listFiltering');

describe("Tests for listFiltering", () => {
    it("test", () => {
        assert.deepEqual(filterList([1, 2, 'a', 'b']), [1, 2], "For input [1, 2, 'a', 'b']");
        // assert.isTrue(true);
    });
});


