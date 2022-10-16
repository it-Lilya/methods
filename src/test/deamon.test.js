import { Deamon } from '../deamon';

test('name in object', () => {
  const personData = new Deamon('Born', 'Deamon');
  personData.levelUp();
  personData.damage(2);
  const received = personData;
  const expected = {
    name: 'Born',
    type: 'Deamon',
    health: 98.24,
    level: 2,
    attack: 48,
    defence: 12,
  };
  expect(received).toEqual(expected);
});
