cout = console.log;
var pagename = "project.html";
var keyname = "project";
var pi = undefined;


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
		    $(document).ready(readyhandler);
		});
	}
	else {
		data = window.data;
		$(document).ready(readyhandler);
	}
}


function readyhandler(){
	
	// get project index from query string
	pi = getProjectIndex();
	
	// set keys
	setPageViewKeys();

	// build page layout
	populate();

}



// enlarge images
var scrollPos = 0;
function blowup(s){
	d3.select(".pageBody")
		.append("div").attr("class", "blowup")
		.append("div").attr("class", "blowupImage")
		.attr("data-src", s)
		.style("background-image", "url("+s+")")
		;
	setBlowupViewKeys();
	// click anywhere exits blowup
	$(".blowup").click(exitBlowup);
	// stop scroll behind blowup
	scrollPos = $('body').scrollTop();
	$('body').css({
	    overflow: 'hidden',
	    position: 'fixed',
	    top : -scrollPos,
	    width: "100%"
	});
}
function exitBlowup(){
	d3.select(".blowup").remove();
	setPageViewKeys();
	// reenable scroll
	$('body').css({
	    overflow: '',
	    position: '',
	    top: '',
	    width: ""
	}).scrollTop(scrollPos);
}




// ...
function getProjectIndex(){

	// get query string
	var queries = {};
	$.each(document.location.search.substr(1).split('&'),function(c,q){
	  var i = q.split('=');
	  queries[i[0].toString()] = i[1].toString();
	});

	// get index of query string in data
	var i = data.findIndex(function(d){
		return d.query == queries.project;
	});
	return i;	
}
function getpreviousindex(){
	var newindex = pi - 1;
	if(newindex < 0) newindex = data.length - 1;
	else newindex %= data.length;
	return newindex;	
}
function getnextindex(){
	var newindex = (pi+1) % data.length;
	return newindex;
}
function goleft(){
	window.location = pagename+"?"+keyname+"="+data[getpreviousindex()].query;
}
function goright(){
	window.location = pagename+"?"+keyname+"="+data[getnextindex()].query;
}
function getpreviousblurb(){
	return data[getpreviousindex()].blurb;
}
function getnextblurb(){
	return data[getnextindex()].blurb;
}



function setPageViewKeys(){
	$("body").off("keydown");
	$("body").keydown(function(e) {
		if(e.keyCode == 37) { // left
			goleft();
		}
		else if(e.keyCode == 39) { // right
			goright();
		}
		else if (e.keyCode == 27) { // escape
		    
		    // window.location = "index.html";
		    window.location = "/";
		    
		}
	});
}
function setBlowupViewKeys(){
	$("body").off("keydown");
	$("body").keydown(function(e) {
		if(e.keyCode == 37) { // left
			var list = $(".pageContent img")
				.map(function() {
					return this.src;
				})
			.get();
			var i = list.findIndex(function(d){
				return d == $(".blowupImage").attr("data-src");
			});
			i -= 1;
			if(i < 0) i = list.length - 1;
			$(".blowupImage")
			.css("background-image", "url("+list[i]+")")
				.attr("data-src", list[i])
				;
		}
		else if(e.keyCode == 39) { // right
			var list = $(".pageContent img")
				.map(function() {
					return this.src;
				})
			.get();
			var i = list.findIndex(function(d){
				return d == $(".blowupImage").attr("data-src");
			});
			i = (i+1) % list.length;
			$(".blowupImage")
			.css("background-image", "url("+list[i]+")")
				.attr("data-src", list[i])
				;
		}
		else if (e.keyCode == 27) { // escape
		    exitBlowup();
		}
	});
}




function populate() {


	// populate page based on query string
	var item = data[pi];
	d3.select(".pageContent")
		.append("div").attr("class", "title museo")
		.text(item.title)
		;
	d3.select(".pageContent")
		.append("div").attr("class", "subtitle")
		.text(item.subtitle)
		;
	d3.select(".pageContent")
		.append("div").attr("class", "itemContent")
		.html(item.content)
		;


	// previous, next, escape

	function getsplitwords(s){
		var threshold = 14;
		if(s.length < threshold){
			return s;
		}
		else {
			return s.split(" ").join("<br>")
		}
	}
	d3.select(".goleft .cell")
		.append("div").attr("class", "arrowcontainer tk-aktiv-grotesk")
		;
	// arrow first then text
	d3.select(".goleft .cell .arrowcontainer")
		.append("div").attr("class", "arrow")
		.append("img").attr("src", "images/arrow_white_fill.png")
		;
	d3.select(".goleft .cell .arrowcontainer")
		.append("div").attr("class", "text")
		.html(getsplitwords(getpreviousblurb()))
		;
	// text then arrow
	d3.select(".goright .cell")
		.append("div").attr("class", "arrowcontainer tk-aktiv-grotesk")
		.append("div").attr("class", "text")
		.html(getsplitwords(getnextblurb()))
		;
	d3.select(".goright .cell .arrowcontainer")
		.append("div").attr("class", "arrow")
		.append("img").attr("src", "images/arrow_white_fill.png")
		;

	/*
	d3.selectAll(".goleft .cell, .goright .cell")
		.append("svg")
		.attr("class", "arrow")
		.attr("xmlns", "http://www.w3.org/2000/svg")
		.attr("x", "0px")
		.attr("y", "0px")
		.attr("viewBox", "0 0 7.6 12")
		;
	d3.select(".goleft svg")
		.append("polygon")
		.attr("points", "7.5,10.5 3.1,6 7.6,1.6 6,0 0,6 6,12 ")
		;
	d3.select(".goright svg")
		.append("polygon")
		.attr("points", "0,1.5 4.5,6 0,10.4 1.6,12 7.6,6 1.6,0 ")
		;
	*/



	$(".goleft .arrowcontainer").mouseover(function(){
		$(this).addClass("rollover");
	});
	$(".goright .arrowcontainer").mouseover(function(){
		$(this).addClass("rollover");
	});
	$(".goleft .arrowcontainer, .goright .arrowcontainer").mouseout(function(){
		$(this).removeClass("rollover");
	});
	$(".goleft").click(goleft);
	$(".goright").click(goright);



	/* stop flicker in menu arrows */
	var imageloader = new Image();
	imageloader.onload = function () {
	   $(".menu").css("opacity", "1");
	}
	imageloader.src = "images/arrow_white_fill.png";



	// create menu
	var wrap = d3.select(".menu")
		.append("div").attr("class", "wrap")
		;
	wrap
		.append("div").attr("class", "name tk-aktiv-grotesk")
		.append("a").attr("href", "/")
		.text("Jack Lovell")
		;
		/*
	wrap
		.append("div").attr("class", "tag tk-aktiv-grotesk")
		.text("Graphic Designer")
		;
		*/




}

















