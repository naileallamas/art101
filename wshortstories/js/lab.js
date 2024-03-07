/**
 * Author:    nailea llamas
 * Created:   04.25.2022
 *
 * (c) public domain
 **/

 //define variables
 myTransport = ["Bus", "Friend's car", "My legs"];

 myMainRide = {
   make : "Ford",
   model : "Taurus",
   color : "Rusty",
   year : 1995,
   age : function(){
     return 2019 - age;
   }
 }

//output
document.writeln("Kinds of Transportaion I use: "+ myTransport+ "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
