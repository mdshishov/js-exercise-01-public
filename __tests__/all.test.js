import { test, expect } from '@jest/globals';
import { multiplication, calculateAverage } from '../src/calculator.js';
import { isDivisibleBy5AndEven } from '../src/divisibleAndEvenValue.js';
import { determineTimeOfDay } from '../src/timeOfDayChecker.js';
import { isHappyTicket } from '../src/happyTicket.js';

// =========== multiplication
test('multiplication 1', () => {
  expect(multiplication(0, 0)).toBe(0);
});

test('multiplication 2', () => {
  expect(multiplication(-1, -2)).toBe(2);
});

test('multiplication 3', () => {
  expect(multiplication(11, 3)).toBe(33);
});

test('multiplication 4', () => {
  expect(multiplication(4, 5)).toBe(20);
});

test('multiplication 5', () => {
  expect(multiplication(-10, 3)).toBe(-30);
});

// =========== calculateAverage
test('calculateAverage 1', () => {
  expect(calculateAverage(-1, -2, 2, 2, 4)).toBe(1);
});

test('calculateAverage 2', () => {
  expect(calculateAverage(10, 2, 5, 7, 1)).toBe(5);
});

test('calculateAverage 3', () => {
  expect(calculateAverage(0, 0, 0, 0, 0)).toBe(0);
});

test('calculateAverage 4', () => {
  expect(calculateAverage(-20, -2, -5, -7, -1)).toBe(-7);
});

test('calculateAverage 5', () => {
  expect(calculateAverage(233, 377, 610, 987, 1597)).toEqual(760.8);
});

// =========== isDivisibleBy5AndEven
test('isDivisibleBy5AndEven 1', () => {
  expect(isDivisibleBy5AndEven(0)).toBeTruthy();
});

test('isDivisibleBy5AndEven 2', () => {
  expect(isDivisibleBy5AndEven(5)).toBeFalsy();
  expect(isDivisibleBy5AndEven(100)).toBeTruthy();
});

test('isDivisibleBy5AndEven 3', () => {
  expect(isDivisibleBy5AndEven(10)).toBeTruthy();
});

test('isDivisibleBy5AndEven 4', () => {
  expect(isDivisibleBy5AndEven(15)).toBeFalsy();
  expect(isDivisibleBy5AndEven(120)).toBeTruthy();
});

test('isDivisibleBy5AndEven 5', () => {
  expect(isDivisibleBy5AndEven(50)).toBeTruthy();
});

// =========== determineTimeOfDay
test('determineTimeOfDay 1', () => {
  expect(determineTimeOfDay(6)).toEqual('утро');
  expect(determineTimeOfDay(11)).toEqual('утро');
});

test('determineTimeOfDay 2', () => {
  expect(determineTimeOfDay(12)).toEqual('день');
  expect(determineTimeOfDay(17)).toEqual('день');
});

test('determineTimeOfDay 3', () => {
  expect(determineTimeOfDay(18)).toEqual('вечер');
  expect(determineTimeOfDay(21)).toEqual('вечер');
});

test('determineTimeOfDay 4', () => {
  expect(determineTimeOfDay(22)).toEqual('ночь');
  expect(determineTimeOfDay(0)).toEqual('ночь');
  expect(determineTimeOfDay(1)).toEqual('ночь');
  expect(determineTimeOfDay(5)).toEqual('ночь');
});

test('determineTimeOfDay 5', () => {
  expect(determineTimeOfDay(-1)).toEqual('ошибка данных');
  expect(determineTimeOfDay(24)).toEqual('ошибка данных');
});

// =========== isHappyTicket
test('isHappyTicket 1', () => {
  expect(isHappyTicket('385916')).toBeTruthy();
  expect(isHappyTicket('33')).toBeTruthy();
  expect(isHappyTicket('0000')).toBeTruthy();
  expect(isHappyTicket('77787778')).toBeTruthy();
  expect(isHappyTicket('12344321')).toBeTruthy();
});

test('isHappyTicket 2', () => {
  expect(isHappyTicket('054702')).toBeTruthy();
});

test('isHappyTicket 3', () => {
  expect(isHappyTicket('00')).toBeTruthy();
});

test('isHappyTicket 4', () => {
  expect(isHappyTicket('1222')).toBeFalsy();
  expect(isHappyTicket('231002')).toBeFalsy();
  expect(isHappyTicket('123789')).toBeFalsy();
  expect(isHappyTicket('00')).toBeTruthy();
});

test('isHappyTicket 5', () => {
  expect(isHappyTicket('231002')).toBeFalsy();
  expect(isHappyTicket('00')).toBeTruthy();
});
