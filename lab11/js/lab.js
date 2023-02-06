/**
 * Author:    nailea llamas and vesper waddy
 * Created:   05.10.2022
 *
 * (c) public domain
 **/

// using jquery we add buttons to the page, one two and three
$("#p1").prepend("<button id=button1>ah tss push it</button>")
$("#p2").prepend("<button id=button2>ah tss push it</button>")
$("#p3").prepend("<button id=button3>ah tss push it</button>")

// we add functions to each button to affect the text withing the class, each makes them appear and reappear
$("#button1").click(function()
{$("#p1").toggleClass("selected")

})

$("#button2").click(function()
{$("#p2").toggleClass("selected")

})

$("#button3").click(function()
{$("#p3").toggleClass("selected")

})
