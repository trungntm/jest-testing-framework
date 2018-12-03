const { sum, sub }  = require('../math')
const { getChangedFilesForRoots } = require('jest-changed-files')

describe("Testing math", () => {
    test("Adding 1 + 1 equals 2", () => {
        expect(sum(1, 1)).toBe(2)
    })
    test('Sub 1 - 1 equals 0', () => {
        expect(sub(1, 1)).toBe(0)
    })
})

// beforeAll(() => console.log(`Run jest.beforeAll`))
// beforeEach(() => console.log(`Run jest.beforeEach`))
// afterEach(() => console.log(`Run jest.afterEach`))
// afterAll(() => console.log(`Run jest.afterAll`))


// Scoping : khi định nghĩa các tests trong một test block thì những lệnh before* và after* đó chỉ áp dụng cho những tests nằm bên trong 
// hiện tại trong tests block chưa có test nào, nên những before* và after* không run
describe(`Scoped block`, () => {
    beforeAll(() => console.log(`Run jest.beforeAll`))
    beforeEach(() => console.log(`Run jest.beforeEach`))
    afterEach(() => console.log(`Run jest.afterEach`))
    afterAll(() => console.log(`Run jest.afterAll`))

})

// Order of execution of describe and test blocks : khi run test, jest sẽ chạy qua môt lượt các describe blocks và sẽ thu thập các tests lại gom theo thư tự
// Sau khi các describe block được duyệt xong, thì jest sẽ tiến hành run tất cả các tests mà nó thu thập được theo thứ tự gom vào
describe('outer', () => {
    console.log('describe outer-a');
  
    describe('describe inner 1', () => {
      console.log('describe inner 1');
      test('test 1', () => {
        console.log('test for describe inner 1');
        expect(true).toEqual(true);
      });
    });
  
    console.log('describe outer-b');
  
    test('test 1', () => {
      console.log('test for describe outer');
      expect(true).toEqual(true);
    });
  
    describe('describe inner 2', () => {
      console.log('describe inner 2');
      test('test for describe inner 2', () => {
        console.log('test for describe inner 2');
        expect(false).toEqual(false);
      });
    });
  
    console.log('describe outer-c');
});
