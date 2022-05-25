const add =require("./sum_arguments")

const {test,expect,describe} = require("@jest/globals")

// test("should work on all  posstive number ",function(){
//     expect(add(2,2)).toBe(4);

//     expect(add(15,10)).toBe(25);
//     expect(add(-15,10)).toBe(-5);
// });

describe("", function(){

test("should work on all  posstive number ",function(){
    expect(add(2,2)).toBe(4);

    expect(add(15,10)).toBe(25);
    expect(add(-15,10)).toBe(-5);
});

test("should work on all  two characters ",function(){
    expect(add("a","b")).toBe("0ab");

    // expect(add(15,10)).toBe(25);
    // expect(add(-15,10)).toBe(-5);
});
test("should work on one characters & one number ",function(){
    expect(add(1,"b")).toBe("1b");

    // expect(add(15,10)).toBe(25);
    // expect(add(-15,10)).toBe(-5);
});

})