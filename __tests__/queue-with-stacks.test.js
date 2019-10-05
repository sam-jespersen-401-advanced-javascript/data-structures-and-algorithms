const { PseudoQueue } = require('../challenges/queueWithStacks/queue-with-stacks');

describe('PseudoQueue', () => {

  it('enqueues and dequeues', () => {

    const q = new PseudoQueue();

    q.enqueue('1');
    q.enqueue('2');
    q.enqueue('3');
    q.enqueue('4');
    q.enqueue('5');

    expect(q.dequeue()).toBe('1');
    expect(q.dequeue()).toBe('2');
    expect(q.dequeue()).toBe('3');
    expect(q.dequeue()).toBe('4');
    expect(q.dequeue()).toBe('5');

  });
});