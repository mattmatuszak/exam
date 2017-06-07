## Written Portion (40 min)
This part of the test is closed book!

1. You've started a project in JavaScript, but for some reason your runtime lacks the `map` function! Attach one to the `Array` prototype!

```js

/* As a reminder, `map` takes a callback function and returns a *new* array,
with each new value created by the output of the callback function. So:

const arr = [1,2,3];
arr.map((val) => val * val) // [1,4,9]

*/

```

Please write your answer [here](./map.js)

2. What is a React `component`?

---
> Your answer here...
A react component is an class that can contains a lot of useful code and functionality
that the react library (and other dependency) uses.  The methods that are implemented can be overridden to enhance the functionality to render objects via jsx that the transpiler can render HTML.  It can also maintain state and props if using the the react 'Component' class.
---

3. You can define a React component a few different ways, including (1) as a simple function or (2) as a class that extends the `Component` piece of the React library. How should you decide when to use which syntax?

---
> Your answer here...
It greatly depends upon preference, but generally speaking, if the component needs to maintain state or reference the props outside the original invocation, then you should extend the component (also known as a smart component).  If no state or props are required outside the original render/invocation, a simple function will be sufficient.
---

4. Please transpile the following JSX code into JavaScript that the browser can understand:

```js
<div>
    <h1 className='headline'>Hello Dojo!</h1>
</div>
```

---
> Your answer here...
ReactDOM.createComponent('div', null, ReactDOM.createComponent('h1', null, 'class='headline', 'Hello Dojo!''))
---

5. Reverse an array. Write a function that accepts an array and returns *the same array* with the values reversed.

```js
const arr = [1,2,3];
reverseArr(arr);
console.log(arr) // [3,2,1];
```

Please write your answer [here](./reverseArr.js)

6. How does using the `new` keyword affect a function's behavior in JavaScript?

---
> Your answer here...
'new' will create an instance of a class or function or object that then gives the class/function/object the ability to utilize the 'this' to store state and behavior.  see the example below:

function MyObject(initialState) {
    this.initialState = initialState;
    this.myCoolMethod = () => { return 'this is cool!' + this.initialState }
}

console.log((new MyObject('yea!')).myCoolMethod());
---

7. What is the best thing?
* A) Callbacks
* B) Objects
* C) Promises
* D) Pushing to Github

---
> Your answer here...
E - All of the above!  Or making me forget Java is C and A
---

Done! Time to start the [React app](./app-details.md)!
