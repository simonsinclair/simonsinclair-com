import { decodeHexString, getSalutationFromDate } from '../utils';

describe('decodeHexString is a function that', () => {
  it('decodes a hexadecimal string', () => {
    const hexString = '48656C6C6F2C20576F726C6421';
    expect(decodeHexString(hexString)).toEqual('Hello, World!');
  });
});

describe('getSalutationFromDate is a function that', () => {
  it('gets the correct greeting in the morning', () => {
    const greeting = getSalutationFromDate(new Date(2019, 6, 1, 0, 0, 1)); // 00:00:01
    expect(greeting).toEqual('Good morning');
  });

  it('gets the correct greeting in the afternoon', () => {
    const greeting = getSalutationFromDate(new Date(2019, 6, 1, 12, 0, 1)); // 12:00:01
    expect(greeting).toEqual('Good afternoon');
  });

  it('gets the correct greeting in the evening', () => {
    const greeting = getSalutationFromDate(new Date(2019, 6, 1, 17, 0, 1)); // 17:00:01
    expect(greeting).toEqual('Good evening');
  });
});
