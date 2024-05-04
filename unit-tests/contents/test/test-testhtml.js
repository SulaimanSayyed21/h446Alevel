// Dynamic import of Chai for Node.js environment
import('chai').then(chai => {
    const { expect } = chai;

    // Dynamic import of the functions to be tested from script-3.js
    import('../public/resources/scripts/script-3.js').then(script3 => {
        const { compareArrays } = script3;

        // Test suite for compareArrays function
        describe('compareArrays function', () => {
            it('should return true if two arrays contain the same elements', () => {
                const arr1 = ['local', 'foreign'];
                const arr2 = ['local', 'foreign'];
                const result = compareArrays(arr1, arr2);
                expect(result).to.be.true;
            });

            it('should return false if two arrays contain different elements', () => {
                const arr1 = ['local', 'foreign'];
                const arr2 = ['foreign', 'real'];
                const result = compareArrays(arr1, arr2);
                expect(result).to.be.false;
            });

            it('should return false if two arrays have different lengths', () => {
                const arr1 = ['local', 'foreign'];
                const arr2 = ['local'];
                const result = compareArrays(arr1, arr2);
                expect(result).to.be.false;
            });

            it('should handle arrays with duplicate elements', () => {
                const arr1 = ['local', 'local'];
                const arr2 = ['local', 'local'];
                const result = compareArrays(arr1, arr2);
                expect(result).to.be.true;
            });
        });
    });
});

// Ensure that the tests are completed asynchronously
setTimeout(() => run(), 100);

// Function to run the tests
function run() {
    mocha.run(failures => {
        process.exitCode = failures ? 1 : 0;  // exit with non-zero status if there are failures
    });
}
