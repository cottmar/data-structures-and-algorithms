const codeLeftJoin = require('../left_join');

const myMap1 = new Map();
myMap1.set('gypsy', 'roaming');
myMap1.set('happy', 'elated');
myMap1.set('confident', 'assured');
myMap1.set('lovely', 'charming');

const myMap2 = new Map();
myMap2.set('gypsy', 'stagnant');
myMap2.set('happy', 'sad');
myMap2.set('confident', 'unassured');
myMap2.set('lovely', 'terrible');

describe('A left join', () => {
  test('it will left-join two hashamps', () => {
    const hashmap = codeLeftJoin.leftjoins(myMap1, myMap2);
    expect(hashmap).toEqual({
      gypsy: ['roaming', 'stagnant'], happy: ['elated', 'sad'], confident: ['assured', 'unassured'], lovely: ['charming', 'terrible'], 
    }); 
  });
});
