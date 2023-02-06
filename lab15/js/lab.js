/**
 * Author:    nailea llamas and vesper waddy
 * Created:   05.25.2022
 *
 * (c) public domain
 **/

 var endpoint = "https://xkcd.com/info.0.json";

 function getAjax() {
 	$.ajax({
   	url: endpoint,
     type: "GET"
   })
   .done(function(data){
   	console.log("Worked!");
   	$("#output").append("<h3>" + data.title + "</h3>");
   	$("#output").append("<img src=" + data.img + ">");
   	$("#output").append("<p>" + data.alt);
   })
   .fail(function(request, error){
   	$("#output").html("Something fucked up.");
   })
 }
 $("#output").prepend("<button id=button1>BBUTTON</button>");
 $("#button1").click(getAjax);
