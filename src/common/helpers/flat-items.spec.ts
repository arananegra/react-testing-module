import { flatItems } from './flat-items';

describe('Flat items tests', () => {
  it('should flat array items into single string', () => {
    const arrayToFlatten = ['2 eggs', 'cheese', 'salt', 'black pepper'];
    const result = flatItems(arrayToFlatten, ',');
    const expectedResult = '2 eggs , cheese , salt , black pepper';
    expect(result).not.toBeUndefined();
    expect(result).toEqual(expectedResult);
  });

  it('should return empty string when array is empty', () => {
    const arrayToFlatten = [''];
    const result = flatItems(arrayToFlatten, ',');
    expect(result).not.toBeUndefined();
    expect(result).toEqual('');
  });
});
