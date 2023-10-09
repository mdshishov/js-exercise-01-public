#!/usr/bin/env node
import { multiplication } from '../src/calculator.js';

console.log('start');
const x = 2;
const y = 3;
const result = multiplication(x, y);
const output = multiplication(x, y) === x * y ? 'ok' : 'bad';
console.log(`multiplication(${x}, ${y}) = ${result}, ${output}`);
console.log('end');
