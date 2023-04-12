const person = {
    id: 1,
    name: "Sam"
};

const details = {
    age: 23,
    loggedIn: true
};

const person_details = {...person, ...details};
/*
{
    id: 1,
    name: "Sam",
    age: 23,
    loggedIn: true
}
*/
//Immutable update
const user = {
    id: 1,
    age: 23
};
const clonedUser = {
    ...user,
    age: user.age + 1
};
console.log(clonedUser); // {id: 1, age: 24} (new object not related to 'user')
//Immutable delete

const book = {
    id: 1,
    title: "Harry Potter",
    year: 2017,
    rating: 4.5
}

// GOOD: immutable
const {year, ...rest} = book;
console.log(rest); // { id: 1, title: "Harry Potter", rating: 4.5} =>Destructred Delet

const person1 = {
    id: 1,
    name: "Sam",
    age: 23,
}
const {id, ...rest1} = person1;//... is called the rest property
console.log(id); //1                          =>Destrucred
console.log(rest1); //{name: "Sam", age: 23} =>Destrured
//UseCase in React
//E.g
function Navbar(props) {
    const {children, ...rest} = props;
    return <h1 {...rest}>{children}</h1>;
}
/* 
Imagine we add a new attribute, for example: disabled={true}, then your code still works and will 
still apply the disabled attribute on the h1 without having to update our Component.
that means we don't need write extra code in component function for addtion of attribute instead we only use destrucring and spread operator
Result of Destrucring
<h1 tabIndex="2" className="navbar">Hello World</h1>
...rest={
    tabIndex: "2",
    className: "navbar"
} or 
rest={
    tabIndex: "2",
    className: "navbar"
}==.but still while passing as attribute use{...rest}

children=Hello World

*/
