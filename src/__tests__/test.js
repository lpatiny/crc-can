'use strict';

const crc = require('..');

describe('CRC test', () => {
  it('123456789', () => {
    let string = '123456789';
    let array = [];
    for (let i = 0; i < string.length; i++) {
      array.push(string.charCodeAt(i));
    }
    expect(array).toStrictEqual([49, 50, 51, 52, 53, 54, 55, 56, 57]);
    expect(crc(array)).toBe(0x29b1);
  });

  it('123', () => {
    let string = '123';
    let array = [];
    for (let i = 0; i < string.length; i++) {
      array.push(string.charCodeAt(i));
    }
    expect(crc(array)).toBe(0x5bce);
  });
});
