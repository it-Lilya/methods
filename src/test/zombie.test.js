import { Zombie } from '../zombie';

test('name in object', () => {
  const personData = new Zombie('Zak', 'Zombie');
  personData.levelUp();
  personData.damage(10);
  const received = personData;
  const expected = {
    name: 'Zak',
    type: 'Zombie',
    health: 91.2,
    level: 2,
    attack: 48,
    defence: 12,
  };
  expect(received).toEqual(expected);
});
