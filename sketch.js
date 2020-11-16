// rooms object in rooms.js
// oject is rooms["Hall"]["direction"] or dot notation roooms.Hall.direction
//

let roomList =["Hall", "Kitchen", "Greg's room", "Angela's room","Dining room", "Living room"] // for random choosing
let currentRoom = "Hall"   
// for input and display
let mydisplay;
let myinput; 
let mybutton;
let inventory = []

 

function setup() {
  // createCanvas(400, 400);
  // background(0);
  noCanvas();
  // randomly place the key
  rooms[random(roomList)]["item"] = "living-stone"
  mydisplay = select('#output');
  myinput = createInput("go");
  mybutton = createButton("Enter");
  mybutton.mouseClicked(command);
  showStatus("Welcome to Winona");



}


function command (){
  // on mouse click of button
  // get input value and put it in an array


  move = myinput.value().toLowerCase().split(" ")


  // if you type go first


  if (move[0] === "go"){
     // if the direction is available in the current room
    if (rooms[currentRoom][move[1]]){
      // set current room to the room at that direction
    
      currentRoom = rooms[currentRoom][move[1]]
      showStatus("*MOVED*");
      myinput.value('');
      

    } else{
      showStatus("***YOU CAN'T GO THAT WAY*******")
      myinput.value('');
    



    }



  }

  // if you type get first

  if (move[0] === "get"){
    if(rooms[currentRoom]["item"] && rooms[currentRoom]["item"] === move[1]){  // check if there is an item and it matches choice
      inventory.push(rooms[currentRoom]["item"]);
      delete rooms[currentRoom]["item"];
      showStatus("***You got it******")
      myinput.value('');
    } else{
      showStatus("****You can't get that*****")
      myinput.value('');
    }


  }


  /// if you type look

  if (move[0] === "look"){
    if(rooms[currentRoom]['look']){
      showStatus(rooms[currentRoom]['look']);
    }else{
      showStatus("***Nothing much to see****")
    }



  }

}


function showStatus(addtext){
  // you can add text to the status


	displaytext = `${addtext} \n Your inventory:${inventory} \n You are in the ${currentRoom}`
	// check for item
	if (rooms[currentRoom].item){
		displaytext += `\n There is a: ${rooms[currentRoom].item}`
	}
	// add instructioins
	displaytext+= `\n =========\n Commands:
       go [north, south, east, west, up, down]
       get [item]
       look `

  // check for win     
  if (currentRoom === 'Alien planet' && inventory.includes('living-stone')){
    displaytext += `\n *******YOU WIN*******`;
  
  }
  
  mydisplay.html(displaytext)
   
}
// function draw() {
//   background(220);
// }
