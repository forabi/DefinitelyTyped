/// <reference path="./deep-diff.d.ts" />

import _deepDiff = require('deep-diff');
var diff = _deepDiff.diff;

interface TestObject {
    name: string;
    description: string;
    details: { [id: string]: any };
}

var lhs: TestObject = {
    name: 'my object',
    description: 'it\'s an object!',
    details: {
        it: 'has',
        an: 'array',
        with: ['a', 'few', 'elements']
    }
};

var rhs: TestObject = {
    name: 'updated object',
    description: 'it\'s an object!',
    details: {
        it: 'has',
        an: 'array',
        with: ['a', 'few', 'more', 'elements', { than: 'before' }]
    }
};

var differences: deepDiff.Diff<TestObject>[] = diff<any>(lhs, rhs);

console.log(differences);


// --------------------------

var observableDiff = _deepDiff.observableDiff;
var applyChange = _deepDiff.applyChange;

var lhs: TestObject = {
    name: 'my object',
    description: 'it\'s an object!',
    details: {
        it: 'has',
        an: 'array',
        with: ['a', 'few', 'elements']
    }
};

var rhs: TestObject = {
    name: 'updated object',
    description: 'it\'s an object!',
    details: {
        it: 'has',
        an: 'array',
        with: ['a', 'few', 'more', 'elements', { than: 'before' }]
    }
};

observableDiff<any>(lhs, rhs, function (d: deepDiff.Diff<TestObject>) {
    // Apply all changes except those to the 'name' property...
    if (d.path.length !== 1 || d.path.join('.') !== 'name') {
        applyChange<any>(lhs, rhs, d);
    }
});
