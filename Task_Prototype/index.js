//Write code for the 1st task below this
function Person (name, age){
    this.name = name;
    this.age = age; 
    this.greet = function(){
        console.log(`Hellio my name is ${this.name} and my age is ${this.age}`);
    }
}
let p1  = new Person("Hemant", 20);
let p2 = new Person("Navlani", 21);

p1.greet(); 
p2.greet(); 

//Write your code above this line
//Write code for the 2nd task below this

function Student (name, age, studentId){
    Person.call(this,name,age);
    this.studentId = studentId;

    this.study = function(){
        console.log(`${this.name} is studying `)
    }
    this.greet = function(){
        console.log(`Namested I am ${this.name}`)
    }
}
Student.prototype = Object.create(Person.prototype);

let s1 = new Student("hemant",20,16);
s1.study();

//Write your code above this line
//Write code for the 3rd task below this
Person.prototype.introduce = function() {
  console.log(`Hi, I'm ${this.name}.`);
};
let person1 = new Person("Jackl", 30);
let student1 = new Student("Blakely", 25, 12345);
person1.introduce();
 student1.introduce();



//Write your code above this line
//Write code for the 4th task below this
student1.greet();

//Write your code above this line
//Write code for the 5th task below this

class Employee {
  constructor(name, title) {
    this.name = name;
    this.title = title;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}, an ${this.title}.`);
  }
}

const employee1 = new Employee("Hemant Navlani", "Software Engineer");
employee1.greet(); // Output: Hello, I'm John Doe, a Software Engi

//Write your code above this line


