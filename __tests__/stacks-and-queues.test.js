const { Stack } = require('../challenges/stacksAndQueues/stacks-and-queues');

describe('stacks and queues', () => {
  const newStack = new Stack();

  it('can push onto a stack', () => {
    newStack.push('1');
    expect(newStack.top.value).toBe('1');
    newStack.push('2');
    expect(newStack.top.value).toBe('2');
    newStack.push('3');
    expect(newStack.top.value).toBe('3');
  });

  it('can pop off stack', () => {
    expect(newStack.pop()).toBe('3');
    expect(newStack.top.value).toBe('2');
    newStack.pop();
    newStack.pop();
    expect(newStack.top).toBeNull();
  });

  it('can peek', () => {
    newStack.push('1');
    expect(newStack.peek()).toBe('1');
  });

  
});