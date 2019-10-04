const { Stack, Queue } = require('../challenges/stacksAndQueues/stacks-and-queues');

describe('stacks', () => {
  const newStack = new Stack();

  it('can push onto a stack', () => {
    newStack.push('1');
    expect(newStack.peek()).toBe('1');
    newStack.push('2');
    expect(newStack.peek()).toBe('2');
    newStack.push('3');
    expect(newStack.peek()).toBe('3');
  });

  it('can pop off stack', () => {
    expect(newStack.pop()).toBe('3');
    expect(newStack.peek()).toBe('2');
    newStack.pop();
    newStack.pop();
    expect(newStack.top).toBeNull();
  });

  it('can peek', () => {
    newStack.push('1');
    expect(newStack.peek()).toBe('1');
  });


});

describe('queues', () => {
  const newQueue = new Queue();

  it('can enqueue', () => {
    newQueue.enqueue('a');
    newQueue.enqueue('b');
    newQueue.enqueue('c');
    expect(newQueue.peek()).toBe('a');
  });
  it('can dequeue', () => {
    expect(newQueue.dequeue()).toBe('a');
    expect(newQueue.peek()).toBe('b');
    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue.front).toBeNull();
  });

  it('can peek', () => {
    newQueue.enqueue('a');
    expect(newQueue.peek()).toBe('a');
  });
});
