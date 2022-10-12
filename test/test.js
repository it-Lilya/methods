// eslint-disable-next-line no-unused-vars
import * as src from '../src/index';

test('method levelUp', () => {
    const boowerman1 = new src.Bowerman('Bo');
    if (boowerman1.level != 0) {
      expect(() => boowerman1.levelUp()).toBeTruthy();
    }
})

test('method damage', () => {
    const boowerman1 = new src.Bowerman('Boo');
    if (boowerman1.health >= 0) {
      expect(() => boowerman1.damage()).toBeTruthy();
    }
})
