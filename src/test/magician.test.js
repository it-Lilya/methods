import { Magician } from '../magician';

test('name in object', () => {
  const personData = new Magician('Mar', 'Magician');
  personData.levelUp();
  personData.damage(2);
  const received = personData;
  const expected = {
    name: 'Mar',
    type: 'Magician',
    health: 98.96,
    level: 2,
    attack: 12,
    defence: 48,
  };
  expect(received).toEqual(expected);
});
