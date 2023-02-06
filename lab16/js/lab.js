/**
 * Author:    nailea llamas and vesper waddy
 * Created:   05.25.2022
 *
 * (c) public domain
 **/

 //var endpoint = "https://xkcd.com/info.0.json";
var endpoint = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
 function getAjax() {
 	$.ajax({
   	url: endpoint,
     type: "GET"
   })
   .done(function(data){
   	console.log("Worked!");
   	$("#output").append("<h2>" + data.name + "</h2>");
   	$("#output").append("<img src=" + data.sprites.versions["generation-ii"].crystal.front_default + ">");
   	$("#output").append("<p>" + data.type['type']['name'] + "</p>");
   })
   .fail(function(request, error){
   	$("#output").html("Something fucked up.");
   })
 }
 $("#output").prepend("<button id=button1>BBUTTON</button>");
 $("#button1").click(getAjax);
