import { mockRecipes } from '../../pods/recipes/api/recipes.mock-data';
import { mapToCollection } from './collection';

describe('Collection mappers tests', () => {
  it('should call to map and passed function if first param is not empty', () => {
    const collection = mockRecipes;
    const mapperFunction = jest.fn();

    spyOn(collection, 'map').and.callThrough();
    mapToCollection(collection, mapperFunction);
    expect(mapperFunction).toHaveBeenCalled();
    expect(collection.map).toHaveBeenCalled();

  });

  it('should return empty array if passed collection is empty', () => {
    const collection = null;
    const mapperFunction = jest.fn();

    const result = mapToCollection(collection, mapperFunction);
    expect(result).toEqual([]);
  });
});
