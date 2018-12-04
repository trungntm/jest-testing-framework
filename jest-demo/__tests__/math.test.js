const { sum, sub, compileAndroidCode }  = require('../math')
const { getChangedFilesForRoots } = require('jest-changed-files')
/* Setup and Teardown */
// beforeAll(() => console.log(`To do something once before all tests`))
// beforeEach(() => console.log(`To do something once before each test`))
// afterEach(() => console.log(`To do something once after each test`))
// afterAll(() => console.log(`To do something once after all tests`))

describe("Testing math .ToBe()", () => {
    test("Adding 1 + 1 equals 2", () => {
        expect(sum(1, 1)).toBe(2)
    })
    test('Sub 1 - 1 equals 0', () => {
        expect(sub(1, 1)).toBe(0)
    })
})

/* Using Matchers */
describe("Test .ToEqual()", () => {
  test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });
})

/* Kiểm tra tính đúng đắn */
describe("Test .Truthiness()", () => {
  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
})

describe('Test Number', () => {
  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  })
})

describe('Test String', () => {
// Test the String does not contain orther String
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  })
// Test the String contain orther String
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  })
})

describe('Test Array', () => {
  const shoppingList = [
    'diapers',
    'kleenex', 
    'trash bags', 
    'paper towels', 
    'beer',
  ];
// Test the array contain element
  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
  });
})

/* Test exception */
describe('Test Exception', () => {
  test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    /* expect(compileAndroidCode).toThrow(ConfigError);
  
    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/); */
  });
})
// Test Async, return a Promise
/* 
describe('Test Async, return Promise', () => {
  test('the data is peanut butter', () => {
    expect.assertions(1);
    return fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
  });
}) */

// Test Async/Await
/* describe('Test Async/Await', () => {
  test('the data is peanut butter', async () => {
    expect.assertions(1);
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });
  
  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchData();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
}) */

// Test Callbacks methods
/* 
describe('Test Callbacks', () => {
  test('the data is peanut butter', done => {
    function callback(data) {
      expect(data).toBe('peanut butter');
      done();
    }
  
    fetchData(callback);
  });
}) */

// Scoping : khi định nghĩa các tests trong một test block thì những lệnh before* và after* đó chỉ áp dụng cho những tests nằm bên trong 
// hiện tại trong tests block chưa có test nào, nên những before* và after* không run
// describe(`Scoped block`, () => {
//     beforeAll(() => console.log(`Run jest.beforeAll`))
//     beforeEach(() => console.log(`Run jest.beforeEach`))
//     afterEach(() => console.log(`Run jest.afterEach`))
//     afterAll(() => console.log(`Run jest.afterAll`))

// })

// Order of execution of describe and test blocks : khi run test, jest sẽ chạy qua môt lượt các describe blocks và sẽ thu thập các tests lại gom theo thư tự
// Sau khi các describe block được duyệt xong, thì jest sẽ tiến hành run tất cả các tests mà nó thu thập được theo thứ tự gom vào
// describe('outer', () => {
//     console.log('describe outer-a');
  
//     describe('describe inner 1', () => {
//       console.log('describe inner 1');
//       test('test 1', () => {
//         console.log('test for describe inner 1');
//         expect(true).toEqual(true);
//       });
//     });
  
//     console.log('describe outer-b');
  
//     test('test 1', () => {
//       console.log('test for describe outer');
//       expect(true).toEqual(true);
//     });
  
//     describe('describe inner 2', () => {
//       console.log('describe inner 2');
//       test('test for describe inner 2', () => {
//         console.log('test for describe inner 2');
//         expect(false).toEqual(false);
//       });
//     });
  
//     console.log('describe outer-c');
// });


/* JEST-EXTENDED */
describe("Test Jest-extened", () => {
  test('passes when using an asymmetrical matcher', () => {
    expect([]).toEqual(expect.toBeArray());
  });
})

/* TEST JEST-CHAIN */
describe("Test Jest-Chain", () => {
  test('add 1 and 1', () => {
    expect(1 + 1)
      .toBe(2)
      .toBeGreaterThan(1)
      .toBeLessThan(3);
  });

  test("Test with Jest-extended", () => {
    expect([1, 2, 3])
      .toBeArray()
      .toBeArrayOfSize(3)
      .toEqual([1, 2, 3])
      .toIncludeAnyMembers([1, 2]);
  })
  test('Compares String', () => {
    expect('hello world')
      .toBeString()
      .toEqualCaseInsensitive('HELLO WORLD')
      .toStartWith('hello')
      .toEndWith('world')
      .not.toInclude('!')
      .toBe('hello world');
  })
})