// Some quick code to test the function

function mystery(a) {
    if(a.length == 1) return a[0];
    var foo = mystery(a.slice(1, a.length))
    console.log(foo);
    if(foo > a[0]) return foo;
    else return a[0];
}

//examp = [1];
//examp = [1,2,3];
//examp = [1,2,3,4];
//examp = [1,2];
examp = [5,3,6,4];

console.log(mystery(examp));
