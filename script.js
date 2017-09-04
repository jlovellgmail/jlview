cout = console.log;
var $win = $(window)
$(document).ready(readyhandler);
$(document).scroll(scrollhandler);
function readyhandler(){
	placeholder();
}
function scrollhandler(){
	// do nothing
}
function placeholder(){

	$(".widthbar").addClass("show");
	$(".overlay").css("display", "none");
	$(".overlay2").css("display", "none");
	

	// load intro frames, skipping duplicates
	var framenums = [
		16, 17,
		19, 20, 21, 22,
		24, 25, 26, 27,
		29, 30
	];
	/*
	var framenums = [
		197,
		199, 200, 201, 202, // skip 203
		204, 205, 206, 207, // skip 208
		209, 210, 211
	];
	*/


	var introframes = [];
	framenums.forEach(function(framenum){
		introframes.push("images/frames/"+framenum+".jpg");
	});


	// stop flickering by loading all intro frames before display
	introframes.forEach(function(frame, index){
		$('<img/>').attr('src', frame).on('load', function() {
			$(this).remove();
			if(index == introframes.length-1){
				// after last intro frame loads, start the movie load
				makeFrames();
				loadmovie();
			}
		});
	});

	function makeFrames(){
		var framedivs = d3.select(".framesContainer")
			.selectAll(".frame")
			;
		framedivs
			.data(introframes)
			.enter()
			.append("div")
			.attr("class", "frame")
			.style("display", "none")
			.style("background-image", function(d){
				return "url("+d+")";
			})
			;
		
		/*
		$('.video').css('background-image', "url("+introframes[0]+")");
		$('.video').css('filter', "blur(6px)");
		$('.video').css('transform', "scale(1.05)");
		*/
		$('.frame').css('filter', "blur(6px)");
		$('.frame').css('transform', "scale(1.05)");
		
		// make sure last frame / top div shows first
		$(".frame:last-child").css("opacity", 1).css("display", "initial");
		$('.frame').css('opacity', "1");
		$('.frame').css('display', "initial");

	}
	function loadmovie(){
		var client = new XMLHttpRequest();
		client.open("GET", "images/video-1-2.gif");
		client.onprogress = function(pe) {
			if(pe.lengthComputable) {
				var portion = pe.loaded / pe.total;

				// var index = Math.floor(portion * introframes.length);
				var parabolic = Math.pow(portion, 1);
				var index = Math.floor(parabolic * introframes.length);

				/*				
				var frame = introframes[index];
				$('.video').css('background-image', "url("+frame+")");
				*/
				var reverseindex = introframes.length - index;
				var childindex = reverseindex + 1;
				d3.select(".frame:nth-child("+childindex+")").style("opacity", "0");

				
				$(".widthbar").css("width", (portion*100)+"vw");
			}
		}
		client.onloadend = function(pe) {
			
			// $('.video').css('background-image', 'url(images/video-1-2.gif)');
			$('.video')
				.css('background-image', 'url(images/haze_500.png), url(images/video-1-2.gif)')
				.css('background-position', 'center, left top')
				.css('background-blend-mode', 'multiply, normal')
				.css('background-opacity', '.3, 1')
				;
			
			
			/*
			$('.video').css('filter', "none");
			$('.video').css('transform', "none");
			*/

			
			$(".widthbar").removeClass("show");
			$(".contentHome .cell .wrap").addClass("show");
			$(".overlay").css("display", "");
			$(".overlay2").css("display", "");

			$(".framesContainer").css("display", "none");

			cout("cathexis");
		}
		client.send()
	}
}











