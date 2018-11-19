

var menuItems = [];
var info;

let menuItem1 = new MenuItem("Flaming Burger", "yes", "yes", 750);
let menuItem2 = new MenuItem("Max Burger", "yes", "no", 550);
let menuItem3 = new MenuItem("Biggest Burger", "no", "no", 1000);
let menuItem4 = new MenuItem("Dope Burger", "yes", "no", 550);
let menuItem5 = new MenuItem("Snoop burger", "", "", 550);



var vm = new Vue({
  el: '#myID',
  data: {
    food,

  }
});



function MenuItem(name, gluten, lactose, calories){
  this.name = name;
  this.gluten = gluten;
  this.lactose = lactose;
  this.calories = calories;

  this.Info = function(){
    var text = "The name of the burger is: " + this.name + "and the amount of calories is: " + this.calories;
    return text;
  }

}
