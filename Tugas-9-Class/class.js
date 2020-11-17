console.log("=====No.1=====");

class Animal {
  constructor(name){
    this.name = name;
  }
  get legs(){
    return 4;
  }
  get cold_blooded(){
    return false;
  }
}

var sheep = new Animal("shaun");

console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false

class Frog extends Animal{
  constructor(name){
    super(name);
    // this.yell = function(){
    //   console.log("Auooo");
    // }
  }
  jump() {
    console.log("Hop Hop");
  }
  
}

class Ape extends Animal{
  constructor(name){
    super(name);
    // this.jump = function(){
    //   console.log("hop hop");
    // }
  }
  yell(){
    console.log("Auooo"); 
  }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"

var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 


console.log()
console.log("=====No.2====")
//Function to class
class Clock {
  constructor({ template }) {

    var timer;

    var render = this.render(template)

    this.stop(timer);

    timer = this.start(render, timer);

  }

  render(template) {
    return function () {
      var date = new Date();

      var hours = date.getHours();
      if (hours < 10)
        hours = '0' + hours;

      var mins = date.getMinutes();
      if (mins < 10)
        mins = '0' + mins;

      var secs = date.getSeconds();
      if (secs < 10)
        secs = '0' + secs;

      var output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

      console.log(output);
    };
  }

  stop(timer) {
    this.stop = function () {
      clearInterval(timer);
    };
  }

  start(render, timer) {
    this.start = function () {
      render();
      timer = setInterval(render, 1000);
    };
    return timer;
  }
}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 