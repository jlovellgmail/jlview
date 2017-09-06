cout = console.log;
var pagename = "project.html";
var keyname = "project";

// get data
var data;
getdata();
function getdata(){
	if(!window.data){
		
		// for local testing
		//$.getScript('data.js', function()
		$.getScript('http://jlview.com/data.js', function()

		{
		    // script is now loaded and executed.
		    data = window.data;
		    $(document).ready(makeitems);
		});
	}
	else {
		data = window.data;
		$(document).ready(makeitems);
	}
}


function makeitems(){
	// create thumbnails
	var items = 
		d3.select(".workbody .content")
		.selectAll(".item")
		.data(data)
		;
	var insideitems = 
		items.enter()
		.append("div").attr("class", "item small")
		.append("div").attr("class", "insideitem")
		;
	var links = insideitems
		.append("a").attr("href", function(d){ return pagename+"?"+keyname+"="+d.query; })
		;
	links
		.append("div").attr("class", "thumbnail")
		.append("img").attr("src", function(d){ return "images/"+d.image; })
		;
	links
		.append("div").attr("class", "blurb")
		.append("div").attr("class", "container")
		.text(function(d){ return d.blurb; })
		;
	// dummy item for alignment
	function isOdd(num) { return num % 2;}
	if(isOdd(data.length)){
		var item = 
			d3.select(".workbody .content")
			.append("div").attr("class", "item small dummy")
			;
	}
}












