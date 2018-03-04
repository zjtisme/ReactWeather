// var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function(name) {
//   console.log(name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('zjt'));
//
// var person = {
//   name: 'zjt',
//   greet: function () {
//     names.forEach( (name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// }
//
// person.greet();

function add(a, b) {
  return a+b;
}

var add1 = (a, b) => a + b;
console.log(add1(3,5));
