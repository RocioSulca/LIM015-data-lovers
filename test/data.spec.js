import { sortByNameAZ, sortByNameZA} from '../src/data.js';

const athletes = [
  { name: "Valeriya Sergeyevna" },
  { name: "Rajeev Ram" },
  { name: "Nidzhat Aliyevich" },
  { name: "Zheng Shuyin" },
  { name: "Edvinas Ramanauskas" },
  { name: "Carlos Alberto" }
]

describe('sortNameAZ', () => {
  it('is a function', () => {
    expect(typeof sortByNameAZ).toBe('function');
  });

  

  it('returns `sortNameAZ`', () => {
    expect(sortByNameAZ(athletes)).toEqual([
      { name: "Carlos Alberto" },
      { name: "Edvinas Ramanauskas" },
      { name: "Nidzhat Aliyevich" },
      { name: "Rajeev Ram" },
      { name: "Valeriya Sergeyevna" },
      { name: "Zheng Shuyin" },
    ]);
  });
});

describe('sortNameZA', () => {
  it('is a function', () => {
    expect(typeof sortByNameZA).toBe('function');
  });

  
  it('returns `sortNameZA`', () => {
    expect(sortByNameZA(athletes)).toEqual([
      { name: "Zheng Shuyin" },
      { name: "Valeriya Sergeyevna" },
      { name: "Rajeev Ram" },
      { name: "Nidzhat Aliyevich" },
      { name: "Edvinas Ramanauskas" },
      { name: "Carlos Alberto" }
      
      
    ]);
  });
});

