import { Deamon } from '../deamon';

test('name in object', () => {
  const personData = new Deamon('Born', 'Deamon', 30, 30);
  personData.levelUp();
  personData.damage(10);
  const received = personData;
  const expected = {
    name: 'Born',
    type: 'Deamon',
    health: 94.8,
    level: 31,
    attack: 12,
    defence: 48,
  };
  expect(received).toEqual(expected);
});
