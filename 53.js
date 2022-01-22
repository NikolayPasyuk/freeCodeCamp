function myLocalScope() {
    // Only change code below this line
    const myLocalScop = "inside myLocalScope";
    const myVar = "outside myLocalScope";
    console.log(myLocalScope, myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myLocalScope, myVar);
