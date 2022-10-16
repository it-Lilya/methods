import { Swordsman } from '../swordsman';

test('name in object', () => {
  const personData = new Swordsman('Shawn', 'Swordsman');
  personData.levelUp();
  personData.damage(2);
  const received = personData;
  const expected = {
    name: 'Shawn',
    type: 'Swordsman',
    health: 98.24,
    level: 2,
    attack: 48,
    defence: 12,
  };
  expect(received).toEqual(expected);
});
