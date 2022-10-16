import { Zombie } from '../zombie';

test('name in object', () => {
  const personData = new Zombie('Zak', 'Zombie');
  personData.levelUp();
  personData.damage(2);
  const received = personData;
  const expected = {
    name: 'Zak',
    type: 'Zombie',
    health: 98.24,
    level: 2,
    attack: 48,
    defence: 12,
  };
  expect(received).toEqual(expected);
});
