'use strict';

function crc(array) {
  let value = 0xffff;
  for (let item of array) {
    value = value ^ (item << 8);
    for (let i = 0; i < 8; i++) {
      if ((value & 0x8000) !== 0) {
        value = ((value << 1) ^ 0x1021) & 0xffff;
      } else {
        value = value << 1;
      }
    }
  }

  return value;
}

module.exports = crc;
