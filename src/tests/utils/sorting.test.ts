import sorting from '../../utils/sorting';

describe('Sorting utility', () => {
  it('Sorts numbers in ascending order', () => {
    const array = [2, 3, 1];
    sorting({ array });
    expect(array[0] === 1 && array[1] === 2 && array[2] === 3).toBeTruthy();
  });

  it('Sorts strings of with accents in ascending order', () => {
    const array = ["Ačiū", "PAČIŪ", "lysk"];
    sorting({ array, alphabetical: true });
    expect(array[0] === "Ačiū" && array[1] === "lysk" && array[2] === "PAČIŪ").toBeTruthy();
  });

  it('Sorts objects by given parameters', () => {
    const array = [{ number: 2 }, { number: 3 }, { number: 1 }];
    sorting({ array, param: 'number' });
    expect(array[0].number === 1 && array[1].number === 2 && array[2].number === 3).toBeTruthy();
  });
});
