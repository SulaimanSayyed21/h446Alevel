// // Load the opposites.json file
// //import oppositesData, { opposites } from '../public/resources/data/opposites.json';
// import oppositesData from '../public/resources/data/opposites.json' assert { type: 'json' };


// // Import Chai assertion library
// import { expect } from '../node_modules/chai/chai.js';

// // Import the functions to be tested from script-3.js
// import { compareArrays } from '../public/resources/scripts/script-3.js';

// Load the opposites.json file
// const oppositesData = require('../public/resources/data/opposites.json');

// // Import Chai assertion library
// const { expect } = require('chai');

// Import the functions to be tested from script-3.js
const { compareArrays } = require('../public/resources/scripts/script-3.js');

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

// Test suite for fetching opposites data
describe('opposites data', () => {
    it('should contain opposites data', () => {
        expect(oppositesData).to.exist;
        expect(opposites).to.exist;
        expect(opposites.Question1).to.exist;
        expect(opposites.Question2).to.exist;
    });

    it('should have correct format for each question', () => {
        expect(opposites.Question1.words).to.be.an('array');
        expect(opposites.Question1.answer).to.be.an('array');
        expect(opposites.Question2.words).to.be.an('array');
        expect(opposites.Question2.answer).to.be.an('array');
    });
});
