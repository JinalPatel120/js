var ax = "jinal";
ax = "hina";
//typescript types - any which disabled type checking and effectively allows all types.
var u = true;
// u="hello";
var ad = true;
ad = "string";
Math.round(ad);
//unknown is similar but safer alternative to any.
var w = 1;
w = "string";
w = {
    runANonExistentMethod: function () {
        console.log("I think there for i am");
    }
};
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
// let a:never=true; never is rarely used, especially by itself,
// undefined and null
var y = undefined;
var ak = null;
//typescript arrays
var names = ["hello", 'jinal', 'dixit'];
names.push('ekta');
console.log(names);
var nz = ['hello'];
// nz.push("jack")
var ourTuple;
ourTuple = [5, false, 'hello'];
ourTuple.push("something new");
console.log(ourTuple);
var car6 = {
    type: "toyoto",
    model: "hello",
    year: 2009
};
var car9 = {
    type: "toyoto",
};
car9.type = "ford";
//   interface IAbc{
//   }
var xyz = {
    info: {
        name: "jinal",
        roll: 26
    }
};
console.log(xyz);
