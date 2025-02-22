import { mapByKey, filterByKey, filterMale, filterFemale, sortByName, filterByName, countryByMedals, sortByTotal, medalsByGender } from '../src/data.js';


describe('Make a new array of every sport', () => {
  it('is a function', () => {
    expect(typeof mapByKey).toBe('function');
  });
  it('returns an array of every sport', () => {
    const data = [{
      name: 'Luis',
      sport: 'Basketball'
    },
    {
      name: 'Mariana',
      sport: 'Taekwondo'
    }]
    const result = ['Basketball', 'Taekwondo']
    expect(mapByKey(data, 'sport')).toEqual(result);
  });
});

describe('Make a new array of every team', () => {
  it('is a function', () => {
    expect(typeof mapByKey).toBe('function');
  });
  it('returns an array of every team', () => {
    const data = [{
      name: 'Nicola Virginia Adams',
      team: 'Great Britain'
    },
    {
      name: 'Cecil Sebastian Afrika',
      team: 'South Africa'
    }];
    const result = ['Great Britain', 'South Africa'];
    expect(mapByKey(data, 'team')).toEqual(result);
  });
});

describe('Make a new array of every event', () => {
  it('is a function', () => {
    expect(typeof mapByKey).toBe('function');
  });
  it('returns an array of every event', () => {
    const data = [{
      name: 'Carla',
      event: 'Volleyball Womens Volleyball'
    },
    {
      name: 'Carlos',
      event: 'Badminton Mixed Doubles'
    }];
    const result = ['Badminton Mixed Doubles', 'Volleyball Womens Volleyball'];
    expect(mapByKey(data, 'event')).toEqual(result);
  });
});

describe('Filter by event', () => {
  it('is a function', () => {
    expect(typeof filterByKey).toBe('function');
  });
  it('returns filtered data by event', () => {
    const data = [{
      name: 'Jose',
      event: 'Basketball Mens Basketball'
    },
    {
      name: 'Carla',
      event: 'Rowing Womens Quadruple Sculls'
    }];
    const result = [{
      name: 'Carla',
      event: 'Rowing Womens Quadruple Sculls'
    }];
    expect(filterByKey(data, 'Rowing Womens Quadruple Sculls', 'event')).toEqual(result);
  });
});

describe('Filter by male', () => {
  it('is a function', () => {
    expect(typeof filterMale).toBe('function');
  });
  it('returns filtered data by male', () => {
    const data = [{
      name: 'Luis',
      gender: 'M'
    },
    {
      name: 'Mariana',
      gender: 'F'
    }]
    const result = [{ name: 'Luis', gender: 'M' }]
    expect(filterMale(data)).toEqual(result);
  });
});

describe('Filter by female', () => {
  it('is a function', () => {
    expect(typeof filterFemale).toBe('function');
  });
  it('returns filtered data by female', () => {
    const data = [{
      name: 'Andrea',
      gender: 'F'
    },
    {
      name: 'Luis',
      gender: 'M'
    },
    {
      name: 'Aurora',
      gender: 'F'
    }];
    const result = [{ name: 'Andrea', gender: 'F' }, { name: 'Aurora', gender: 'F' }]
    expect(filterFemale(data)).toEqual(result);
  });
});

describe('Sorted by name asc', () => {
  it('is a function', () => {
    expect(typeof sortByName).toBe('function');
  });
  it('returns sorted data', () => {
    const data = [{
      name: 'Luis'
    },
    {
      name: 'mariana'
    },
    {
      name: 'Ana'
    }]
    const result = [{ name: 'Ana' }, { name: 'Luis' }, { name: 'mariana' }]
    expect(sortByName(data)).toEqual(result);
  });
});

describe('Sorted by name asc', () => {
  it('is a function', () => {
    expect(typeof sortByName).toBe('function');
  });
  it('returns sorted data', () => {
    const data = [{
      name: 'chantal achterberg'
    },
    {
      name: 'nicola virginia adams'
    },
    {
      name: 'chantal achterberg'
    }]
    const result = [{ name: 'chantal achterberg' }, { name: 'chantal achterberg' }, { name: 'nicola virginia adams' }]
    expect(sortByName(data)).toEqual(result);
  });
});

describe('Filter by name', () => {
  it('is a function', () => {
    expect(typeof filterByName).toBe('function');
  });
  it('returns filtered data by name', () => {
    const data = [{
      name: 'luis'
    },
    {
      name: 'ana'
    }];
    const result = [{
      name: 'ana'
    }];
    expect(filterByName(data, 'ana')).toEqual(result);
  });
});

// test de medalla por genero
describe('Filter medals by team', () => {
  it('is a function', () => {
    expect(typeof countryByMedals).toBe('function');
  });
  it('returns filtered medals by team', () => {
    const data = [{
      team: 'Italy',
      medal: 'Gold'
    },
    {
      team: 'Spain',
      medal: 'Bronze'
    },
    {
      team: 'Argentina',
      medal: 'Gold'
    },
    {
      team: 'Argentina',
      medal: 'Silver'
    },
    {
      team: 'Italy',
      medal: 'Gold'
    }];
    const result = 2;
    expect(countryByMedals(data, 'Italy', 'Gold')).toEqual(result);
  });
});

describe('Order medals by asc', () => {
  it('is a function', () => {
    expect(typeof sortByTotal).toBe('function');
  });
  it('returns ordered medals by asc', () => {
    const data = [{
      total: 1
    },
    {
      total: 3
    },
    {
      total: 2
    },
    {
      total: 2
    },
    {
      total: 4
    }];
    const result =[{total: 1}, {total: 2},{total: 2}, {total: 3}, {total: 4}];
    expect(sortByTotal(data, 'asc')).toEqual(result);
  });
});

describe('Order medals by dsc', () => {
  it('is a function', () => {
    expect(typeof sortByTotal).toBe('function');
  });
  it('returns ordered medals by dsc', () => {
    const data = [{
      total: 1
    },
    {
      total: 3
    },
    {
      total: 2
    },
    {
      total: 2
    },
    {
      total: 4
    }];
    const result =[{total: 4}, {total: 3},{total: 2}, {total: 2}, {total: 1}];
    expect(sortByTotal(data, 'dsc')).toEqual(result);
  });
});

describe('Filter medals by gender', () => {
  it('is a function', () => {
    expect(typeof medalsByGender).toBe('function');
  });
  it('returns filtered medals by gender', () => {
    const data = [{
      gender: 'F',
      medal: 'Gold'
    },
    {
      gender: 'M',
      medal: 'Bronze'
    },
    {
      gender: 'F',
      medal: 'Gold'
    },
    {
      gender: 'F',
      medal: 'Silver'
    },
    {
      gender: 'M',
      medal: 'Silver'
    }];
    const result = 2;
    
    expect(medalsByGender(data, 'F', 'Gold')).toEqual(result);
  });
});
