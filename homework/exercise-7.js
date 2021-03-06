/* Challenge Famous Writers
Did you know you can also have an array of objects? We've created one for you here. Loop through the array, 
and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:

*/

var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false,
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true,
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false,
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true,
  },
];

for (var i = 0; i < writers.length; i++) {
  var write = writers[i];
  var sentence = getWriterSentence(writer);
  console.log(sentence);
}

function getWriterSentence(writer) {
  var sentence = "Hi, my name is" + writer.firstName + "";
  sentence += writer.lastName + " I am " + writer.age;
  sentence += "years old, and work as a" + write.occupation + ".";
  return sentence;
}
/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/

write.forEach(function (write) {
  if (write.alive) {
    var sentence = getWriterSentence(write);
    console.log(sentence);
  }
});
