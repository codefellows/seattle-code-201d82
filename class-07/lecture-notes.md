# Class 07 Lecture Notes

## Constructor Functions

### What are they?

- A special type of function that acts as a blueprint/factory for objects
- They are named with a capital letter as their variable 

```js
function Student(name, pronouns){
  this.name = name;
  this.pronouns = pronouns;
  this.course = '201d82'
}

// instanciating a new object using our Constructor
let bob = new Student('Bob', 'he/him');
```

### Why do we use them?

- Helps keep code dry.
- Prevent bugs
- Ensures consistancy / predictable uniform data between like objects

## Prototypes

### What are they?

- A property on the constructor
- A template object that other objects can inherit traits from
- Prototypes are the mechanism by which JavaScript objects **inherit** features from one another

```js
Student.prototype.greetClass = function() {
  console.log(`Hey ${this.course}! Glad to be here!`)
}

bob.greetClass();
```

[docs for prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
