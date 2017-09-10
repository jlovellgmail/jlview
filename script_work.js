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


		/*
	var insideitems = 
		items.enter()
		.append("div").attr("class", "item")
		.append("div").attr("class", "insideitem")
		;
		*/
		/*
	items = 
		items.enter()
		.append("div").attr("class", "item")
		;
		*/


	// var links = insideitems
	/*
	var links = items
		.enter()

		.append("a")

		.attr("class", "item")
		
		.attr("href", function(d){ return pagename+"?"+keyname+"="+d.query; })
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
	*/


/*
		<div class="item">
		  <div class="aspect">
		    <div class="image">
		    </div>
		    <div class="container-abs">
		      <div class="container-table">
		        <div class="container-cell">
		          text
		        </div>
		      </div>    
		    </div>
		  </div>
		</div>
*/
	items = 
		items.enter()
		.append("a").attr("class", "item")
		.attr("href", function(d){ return pagename+"?"+keyname+"="+d.query; })
		;
	var aspect = 
		items
		.append("div").attr("class", "aspect")
		;
	aspect
		.append("div").attr("class", "image")
		.append("img").attr("src", function(d){ return "images/"+d.image; })
		;
	aspect
		.append("div").attr("class", "container-abs")
		.append("div").attr("class", "container-table")
		.append("div").attr("class", "container-cell museo hide")
		.text(function(d){ return d.blurb; })
		;



	
	// dummy item for alignment
	var element = d3.select(".workbody .content");
	element.append("div").attr("class", "item dummy");
	element.append("div").attr("class", "item dummy");
	element.append("div").attr("class", "item dummy");



	$(".item").hover(
		// mouseenter
		function(){
			
			//$(this).find(".container-cell").css("opacity", "1");
			$(this).find(".container-cell").removeClass("hide");

		},
		// mouseleave
		function(){
			
			//$(this).find(".container-cell").css("opacity", "0");
			$(this).find(".container-cell").addClass("hide");

		}
	);

}












