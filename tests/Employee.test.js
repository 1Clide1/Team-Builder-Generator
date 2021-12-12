//Need the .. because like in cd you need to go back a folder to call for the one you need
// to run jest make sure to type npm run test
const Employee= require("../lib/Employee");

test("Can I start Employee?", () =>{
    // using e like how you would use e.target if i'm not mistaken or like this variable in a way. basically just a filler var that way I can target what I assign to it
    const e= new Employee();
    // type of basically returns a string says what was used. 
    // for example typeof(42) would return saying that 42 is a number
    // So in this case Employee is an object so typeof should say that Employee is an object
    expect(typeof(e)).toBe("object");
});

test("See if user can add a name via constructor arguments", ()=>{
    const testValue= "Brandon";
    const e= new Employee(testValue);
    expect(e.name).toBe(testValue);
});

test("See if user can add id via constructor arguments", ()=>{
    // saw this idea in a previous class to use a set const name for testing purposes. makes it more readible and understandable on what is being tested
    const testValue= 90;
    const e= new Employee("stuff", testValue);
    expect(e.id).toBe(testValue);
});

test("See if user can add email via constructor arguments",()=>{
    const testValue= "test@gmail.com";
    const e= new Employee("stuff", 90, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", ()=>{
    const testValue= "brad";
    const e= new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", ()=>{
    const testValue= 90;
    const e= new Employee("stuff", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", ()=>{
    const testValue= "test@gmail.com";
    const e= new Employee("stuff", 9, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("Can get Employee via getRole()", ()=>{
    const testValue= "Employee";
    const e= new Employee("stuff", 9, "test@gmail.com");
    expect(e.getRole()).toBe(testValue);
});