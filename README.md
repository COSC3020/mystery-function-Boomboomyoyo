[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11755331&assignment_repo_type=AssignmentRepo)
# Mystery Function

What does the `mystery()` function in the following piece of code do? Add your
answer to this markdown file.

```javascript
function mystery(a) {
    if(a.length == 1) return a[0];
    var foo = mystery(a.slice(1, a.length))
    if(foo > a[0]) return foo;
    else return a[0];
}
```
//examp = [1];

//console.log(mystery(examp));

/*
This mystery function will take an array as input and will use recursion to process the array, to find the greatest value element within it. The recursion will reduce the size of the array from the front to the end, until it has an array only containing the last element. It will then compare the last sub-array's first element to the last element, passing whichever is greater up the stack. It will continue to do this until it has compared all elements in the array, at which point it will return the greatest value that was present within the array.

*/