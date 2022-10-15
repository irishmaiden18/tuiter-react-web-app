//alert('Hello World!');

console.log('Hello World!');

//Variables & Constants
console.log('Variables and Constants');

global1 = 10;
console.log(global1);

var functionScoped = 2;
console.log(functionScoped);

let blockScoped = 5;
console.log(blockScoped);

const constant1 = global1
                  + functionScoped
                  - blockScoped;
console.log(constant1);

//Variable Types
console.log('Variable types');

let numberVariable = 123;
console.log(numberVariable);

let floatingPointNumber = 234.345;
console.log(floatingPointNumber);

stringVariable = 'Hello World!';
console.log(stringVariable);

booleanVariable = true;
console.log(booleanVariable);

let isNumber = typeof numberVariable;
console.log(isNumber);

let isString = typeof stringVariable;
console.log(isString);

let isBoolean = typeof booleanVariable;
console.log(isBoolean);

//Boolean Variables
console.log('Boolean Variables');

let true1 = true;
console.log(true1);

let false1 = false;
console.log(false1);

let false2 = true1 && false1;
console.log(false2);

let true2 = true1 || false1;
console.log(true2);

let true3 = !false2;
console.log(true3);

let true4 = numberVariable === 123;
console.log(true4);

let true5 = floatingPointNumber !== 321.432;
console.log(true5);

let false3 = numberVariable < 100;
console.log(false3);

//Conditionals
console.log('If else');
if(true1) {
    console.log(true);
}

if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

console.log('Ternary conditional operator');
const loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting);

//Functions
console.log('Legacy ES5 function');
function add (a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

console.log('New ES6 functions');
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log('Implied Returns');
console.log(fourTimesFive);

//Parenthesis & Parameters
console.log('Parenthesis and parameters');
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

//Arrays
console.log('Arrays');
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];
console.log(numberArray1);
console.log(stringArray1);
console.log(variableArray1);

//Arrays - index & length
console.log('Array index and length');
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);
console.log(length1);
console.log(index1);

//Adding & Removing Data to/from Arrays
console.log('Add and remove data to arrays');

// adding new items
console.log('Adding New Items');
numberArray1.push(6);
stringArray1.push('string3');
console.log(numberArray1);
console.log(stringArray1);

// remove 1 item starting on 3rd spot
console.log('Remove 1 item starting on 3rd spot');
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);

//For Loops
console.log('For loops');
for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

//The Map Function
console.log('Map function');
const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);
console.log(numberArray1);
console.log(squares);
console.log(cubes);

//The Find Function
console.log('Find function');
const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');
console.log(numberArray1);
console.log(stringArray1);
console.log(four);
console.log(string3);

//The Find INDEX Function
console.log('The Find Index Function');
const fourIndex = numberArray1
    .findIndex(a => a === 4);
const string3Index = stringArray1
    .findIndex(a => a === 'string3');
console.log(numberArray1);
console.log(stringArray1);
console.log(fourIndex);
console.log(string3Index);

//The Filter Function
console.log('The Filter Function');
const numbersGreaterThan2 = numberArray1
    .filter(a => a > 2);
const evenNumbers = numberArray1
    .filter(a => a % 2 === 0);
const oddNumbers = numberArray1
    .filter(a => a % 2 !== 0);
console.log(numberArray1);
console.log(numbersGreaterThan2);
console.log(evenNumbers);
console.log(oddNumbers);

//Template Strings
console.log('Template Strings');
const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

loggedIn1 = false;
const greeting2 = `Logged in: ${loggedIn1 ? "Yes" : "No"}`;
console.log(greeting2);

//jQuery
console.log('jQuery');
const init = () => {
    console.log('Hello world from jQuery');

    /* do the rest of the lab work here */

    //Binding to the DOM
    console.log('Binding to the DOM');
    const bindById = $('#bind-by-id');
    const bindByClass = $('.bind-by-class');
    console.log(bindById);
    console.log(bindByClass);

    //Changing Style Programmatically
    const changeStyle = $('#change-style');
    const changeStyle2 = $('.change-style');
    changeStyle.css('color', 'red');
    changeStyle2.css('color', 'blue');

    //Getting Attributes
    const getIdAttr = $("#get-id-attr");
    const id = getIdAttr.attr('id');
    console.log('Get and set attributes');
    console.log(id);

    //Setting Attributes
    const setClassAttr = $("#set-class-attr");
    setClassAttr.attr('class', 'class-0');

    //Adding Classes
    const addClass1Example = $("#add-class-1");
    addClass1Example.addClass('class-1');

    //Removing Classes
    const removeClass1Example = $("#remove-class-1");
    removeClass1Example.removeClass('class-2');

    //Hiding Content
    const hideMe = $("#hide-me");
    hideMe.hide();

    //Showing Content
    const showMe = $("#show-me");
    showMe.show();

    //Creating New Elements
    const newLineItem = $("<li>Line item 1</li>");
    const anotherLineItem = $("<li>Line item 2</li>");
    console.log('Creating New Elements');
    console.log(newLineItem);
    console.log(anotherLineItem);

    //Appending New Elements
    const ul = $("#append-new-elements");
    ul.append(newLineItem);
    ul.append(anotherLineItem);

    //Removing & Emptying Content
    const removeLi =$("#remove-this");
    const emptyUl = $("#empty-this");
    removeLi.remove();
    emptyUl.empty();

    //Changing Content
    const changeThisText = $("#change-this-text");
    const changeThisHtml = $("#change-this-html");
    changeThisText.html('New text');
    changeThisHtml.html(`
       <li>Line item A</li>
       <li>Line item B</li>
       <li>Line item C</li>
    `);

    //Navigating the DOM Hierarchy
    const child2 = $("#child-2");
    const parent1 =
        child2.parents("#parent");
    parent1
        .css('background-color', 'red')
        .css('color', 'white');

    const parent = $("#parent");
    const child = parent.find("#child-2");
    child.css('background-color', 'blue')

    //Handling Click Events
    const handleClick =
        () => console.log('Handle click');
    const clickable = $('.clickable');
    clickable.click(handleClick);

    //Event Target
    const handleEventTarget = (event) => {
        const target = event.target;
        console.log(target);
        $(target)
            .css('background-color', 'blue')
            .css('color', 'white');
    }
    const eventTarget = $("#event-target");
    eventTarget.click(handleEventTarget);

    //Hiding and showing content
    let hideBtn, showBtn, hideShowHeader;
    hideBtn = $('#hide');
    showBtn = $('#show');
    hideShowHeader = $('#hide-show');
    const hideHandler = () => {
        hideShowHeader.hide();
    }
    const showHandler = () => {
        hideShowHeader.show();
    }
    hideBtn.click(hideHandler);
    showBtn.click(showHandler);
}
$(init);

