const Engineer= require("../lib/Engineer");
// now I just need to make sure github and the functions that engineer uses actually work 
// that way I don't need to re-test name, id, and email, since they already work
test("See if user can add github account via constructor arguments", ()=>{
    const testValue= "gitacc";
    const e= new Engineer("brad", 9, "test@gmail.com", testValue);
    expect(e.github).toBe(testValue);
});

test("Can get github account be returned via getGithub()", ()=>{
    const testValue= "gitacc";
    const e= new Engineer("brad", 9, "test@gmail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});

test("Can get Engineer to be returned via getrole()", ()=>{
    const testValue= "Engineer";
    const e= new Engineer("brad", 9, "test@gmail.com", "gitacc");
    expect(e.getRole()).toBe(testValue);
});

