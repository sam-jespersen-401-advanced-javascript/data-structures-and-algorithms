const { AnimalShelter } = require('../challenges/fifoAnimalShelter/fifo-animal-shelter');

describe('animal shelter', () => {

  const shelter = new AnimalShelter();

  it('returns pref in the front', () => {

    shelter.enqueue('cat');
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    shelter.enqueue('dog');

    const firstCat = shelter.dequeue('cat');
    expect(firstCat).toBe('cat');
    expect(shelter.front.value).toBe('cat');
    expect(shelter.front.next.value).toBe('dog');
  });

  it('returns pref in the middle', () => {

    const firstDog = shelter.dequeue('dog');
    expect(firstDog).toBe('dog');
    expect(shelter.front.next.value).toBe('cat');

  });

  it('returns front when no pref', () => {

    expect(shelter.dequeue()).toBe('cat');
    expect(shelter.dequeue()).toBe('cat');
    expect(shelter.dequeue()).toBe('dog');
  });

  it('returns null on invalid input', () => {
    expect(shelter.dequeue('squirrel')).toBeNull();
  });


});