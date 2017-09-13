var data = [];
window.data = data;
makedata();
function makedata(){

	// html content for pages
	var contentlist = {};
	make_content_list();
	function make_content_list(){
		function img(s, classes, style){
			if(!classes) return  "<img src='"+s+"' onclick='blowup(this.src)'>";
			else if(!style) return "<img class='"+classes+"' src='"+s+"' onclick='blowup(this.src)'>";
			else return "<img class='"+classes+"' style='"+style+"' src='"+s+"' onclick='blowup(this.src)'>";
		}
		function text(s, classes){
			if(classes != undefined)
				return "<p class='"+classes+"''>"+s+"</p>";
			else
				return "<p>"+s+"</p>";
		}
		function caption(s){
			return text(s, "caption");
		}
		function div(classes, contents){
			if(!contents) return "<div class='"+classes+"'></div>";
			else return "<div class='"+classes+"'>"+contents+"</div>";
		}
		var spacer = div("spacer");
		var spacermedium = div("spacermedium");
		var spacersmall = div("spacersmall");
		contentlist.webdesign = ""
			+ img("images/page_images/web_landing-page_1800.jpg", "dropshadow")
			+ caption("Landing page, Virgil James")
			+ spacer
			+ img("images/page_images/icons.jpg", "darkenImage")
			+ caption("App icons, Illumina BaseSpace app store")
			+ spacer
			+ '<div class="aspectratio otl"><iframe src="https://player.vimeo.com/video/231601293?autoplay=1&loop=1&autopause=0" width="640" height="382" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
			+ div("caption", "Flash website for the film <span class='titleofwork'>Outside The Law</span>")
			+ spacer
			+ img("images/page_images/developer-stats.jpg", "dropshadow")
			+ caption("Analytics dashboard, Illumina BaseSpace")
			+ spacer
			+ '<div class="aspectratio piechart"><iframe src="https://player.vimeo.com/video/168895922?autoplay=1&loop=1&autopause=0" width="640" height="470" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
			+ caption("Piechart animations, Illumina BaseSpace")

			;
		contentlist.titleist = ""
			+ img("images/page_images/titleist.jpg")
			;
		contentlist.flowers = ""
			+ img("images/page_images/flowers_1600.jpg")
			+ text("2017, colored pencil on paper")
			;
		contentlist.drawings = ""
			+ img("images/page_images/flowers_1600.jpg")
			+ caption("Colored pencil on paper")
			+ spacer
			+ img("images/page_images/smith.jpg")
			+ "<p class='caption'>Rendering executed for an artist<br>Graphite on paper, 56 x 52.6 inches</p>"
			+ spacer
			+ img("images/page_images/fallingwater.jpg")
			+ "<p class='caption'>Rendering executed for an artist<br>Ballpoint pen on paper, 48.3 x 39.9 inches</p>"
			+ spacer
			+ img("images/page_images/fayum.jpg")
			+ img("images/page_images/fayum_1800.jpg")
			+ "<p class='caption'>Scientific Illustration published by The American Museum of Natural History, NYC<br>Pencil and digital editing</p>"
			//+ caption("Scientific Illustration published by The American Museum of Natural History, NYC")
			+ spacer
			+ img("images/page_images/bentshape.jpg")
			+ caption("Charcoal on paper")
			+ spacer
			+ img("images/page_images/torso.jpg")
			+ caption("Ink and graphite on paper")
			/*
			+ spacer
			+ img("images/page_images/parabola.jpg")
			+ caption("Charcoal on paper, 24.7 x 40 inches")
			*/
			;
		contentlist.gp = ""
			+ img("images/page_images/gp_eye-170912.jpg")
			+ spacer
			+ '<div class="aspectratio horses"><iframe src="https://player.vimeo.com/video/231226964?autoplay=1&loop=1&autopause=0" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
			+ spacer

			/*
			+ '<img class="darkenImage" style="width:600px;" src="images/page_images/gp_targethorse.jpg" onclick="blowup(this.src)">'
			*/
			+ img("images/page_images/gp_horse-170912.jpg")
			+ spacermedium
			+ img("images/page_images/gp_targethorse.jpg", "darkenImage", "width:100%;")
			+ spacermedium
			+ text("Stochastic process", "heading")
			+ text("Say we have a photo we want to render called the \"target image\". Genetic computer programs seek to replicate this target image through self-generated experimentation. The program process begins by casting random lines across the digital canvas. Most lines don't come even close to the target, but those that come closest are retained by the program and those which don't are discarded. Now we have a new \"generation\" of information and, based on that information, the program refines its aim to more and more accurately reproduce the target image.")
			+ text("Just as in nature, creating a rendering of a photograph with this process involves many generations where individuals, and in this case \"lines\", mate to see if they can create an improved offspring. Literally billions of organisms go extinct and only rarely does a beneficial mutation appear. But unlike nature, the computer can do this very quickly.")
			+ spacermedium
			+ img("images/page_images/gp_cat-170912.jpg")
			+ spacermedium

			/*
			+ '<div class="aspectratio hand"><iframe src="https://player.vimeo.com/video/169456761?autoplay=1&loop=1&autopause=0" width="640" height="760" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><div class="movieOverlay"></div></div>'
			*/

			+ img("images/page_images/gp_hand-170912.jpg")
			/*
			+ spacer
			+ img("images/page_images/gp_woman.jpg")
			*/

			+ spacer
			+ img("images/page_images/gp_camera-170912.jpg")
			+ spacer
			+ img("images/page_images/gp_triangles.png")
			+ spacer
			+ img("images/page_images/gp_1211080-230.best.1009.fullscreen_crop_945.jpg")
			+ spacer
			+ img("images/page_images/gp_1211080-230.best.1009.fullscreen_target_945.jpg")
			+ spacer
			+ '<div class="aspectratio gpshapes"><iframe src="https://player.vimeo.com/video/104474094?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0" width="640" height="384" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><div class="movieOverlay"></div></div>'
			+ caption("Casting lines with genetic programs")
			+ spacer
			;
		contentlist.ads = ""
			+ img("images/page_images/ad_set.jpg")
			+ spacer
			+ img("images/page_images/ad_startsmart.jpg")
			+ spacer
			+ img("images/page_images/ad_secondwind.jpg")
			+ spacer
			+ img("images/page_images/ad_theonly.jpg")
			+ spacer
			+ img("images/page_images/ad_onlysit.jpg")
			+ spacer
			+ img("images/page_images/ad_earlycomp1.jpg")
			+ spacer
			+ img("images/page_images/ad_headlines_1500.jpg")
			+ caption("Exploring line break variations")
			;
		contentlist.bags = ""
			+ img("images/page_images/bags_SFclutch_1800.jpg")
			+ spacer
			+ img("images/page_images/bags_SF-Overnight---2017-01-27-18.31.41---thumbnail_repositioned_1800.jpg")
			+ spacer
			+ img("images/page_images/bags_SF-Satchel---2017-01-24-23.35.12---thumbnail_repositioned_1800b.jpg")
			+ spacer
			+ img("images/page_images/bags_grid.jpg", "darkenImage")
			/*
			+ spacer
			+ img("images/page_images/bags_IMG_8892_1200.jpg")
			+ spacer
			+ img("images/page_images/bags_2016-12-08-13.04.20_rt2_50_q9_1200.jpg")
			+ spacer
			+ img("images/page_images/bags_2016-11-28-13.21.43---drawstring-top-edge_1200.jpg")
			*/
			;
		contentlist.event = ""
			+ text("Hershey's Easter Event", "heading")
			+ text("Step and repeat, kiosks and stage backdrop.")
			+ spacermedium
			+ img("images/page_images/hersheys_double.jpg")
			+ spacer
			+ img("images/page_images/hersheys_stage.jpg")
			//-------------------------
			+ spacer
			+ text("Aramark Guest Chef Event", "heading")
			+ text("Entrance and sponsor banners.")
			+ spacermedium
			+ img("images/page_images/event_aramark.jpg")
			//-------------------------
			+ spacer
			+ text("Hershey's BlogHer Conference Suites", "heading")
			+ text("Floor-to-ceiling environmental graphics.")
			+ spacermedium
			+ img("images/page_images/event_forest.jpg")
			+ spacer
			+ img("images/page_images/event_perspectivethreewalls.png")
			+ spacer
			+ img("images/page_images/event_rightwall.jpg")
			+ spacer
			+ img("images/page_images/event_wallgraphic_door.jpg")
			+ spacer
			+ img("images/page_images/event_wall_beach.jpg")
			+ spacer
			+ img("images/page_images/event_blogher2012_wallD_2000.jpg")
			+ spacer
			+ img("images/page_images/event_blogher2012_wallD_detail_1500.jpg")
			+ spacer
			+ img("images/page_images/event_blogher2012_wallE_2000.jpg")
			;
		contentlist.oysters = ""
			+ text("The problem: ", "heading")
			+ text("Oyster farming is a large industry in Rhode Island, but a deadly bacteria periodically kills off oyster populations by up to 90%. However there is one strain of oyster that is immune to the infection, and biologists at The University of Rhode Island are working to discover what makes these oysters different. I had the opportunity to work closely with these researchers to design and build visualization software tools enabling custom explorations of the genetic data produced by their experiments.")
			+ text("Challenges: ", "heading")
			
			/*
			+ text("When we project data into a readable form, it can look very different depending on how we view it.  For example, one might wish to look at the interrelatedness of specific genes and/or the timing of when certain genes express themselves in the developing oyster. We have to choose a good visual and conceptual projection in order to see features in the data that matter to us.")
			*/
			+ text("The first major challenge was the size of the data to be visualized. In these networks a node represents a slice of the genome, and an edge represents a relationship between those two slices. The shear interconnectedness of the network, with over 50,000 edges, was so dense that it appeared to be a solid mass.")

			+ spacermedium
			+ img("images/page_images/oysters_network-1.jpg")
			/*
			+ img("images/page_images/oysters_network-2.jpg")
			*/
			+ spacer
			+ "<p>The first version of the tool was named <span style='font-style:italic;'>Permissive</span> because of the extreme number of connections - we chose to use the most permissive thresholds in generating the network. The task was then to create interactive tools that allowed the researchers to \"dissolve\" edges in order to isolate small structures within the network that persisted under certain conditions. These structures would signify a special evolutionary relationship shared by a group of genes.</p>"
			+ spacer
			+ '<div class="aspectratio permissive"><iframe src="https://player.vimeo.com/video/233454716?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0" width="640" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
			+ spacermedium
			+ img("images/page_images/oysters_network-2_crop-1.jpg")

			



			/*
			+ img("images/page_images/oysters_perspectives.jpg")
			+ div("caption credit", 'Credit: Emok via <a href="https://commons.wikimedia.org/wiki/File%3AFirst_angle_projection.svg">Wikimedia Commons</a>')
			*/
			/*
			+ text("Solution:", "heading")
			+ text('Software that enabled the researchers to visualize genes as networks of "nodes and edges". The visualization allowed scientists to test their assumptions by "playing" with the networks, in order to reveal structure in the data. The software had to be flexible enough to accommodate yet-unknown forms of data, as the scientists continually restructured their material. As a major benefit, the programs have made it much easier to describe and share the progress of this research in educational settings, with colleagues, across disciplines, and in the scientific literature.')
			*/

			+ spacer
			//+ img("images/page_images/oysters_slider.gif")
			//+ '<iframe src="https://player.vimeo.com/video/170709062?autoplay=1&amp;loop=1&amp;autopause=0" width="640" height="88" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
			+ img("images/page_images/oysters_oysters - Screen shot 2012-09-10 at 3.53.03 AM.jpg")
			+ spacermedium
			+ img("images/page_images/oysters2.jpg")
			+ spacermedium
			+ img("images/page_images/oysters1.jpg")
			+ spacermedium
			+ img("images/page_images/oysters_2.jpg")
			;
		contentlist.other = ""
			+ img("images/page_images/raytrace.jpg")
			+ caption("Raytracer written from scratch in C++. Capabilities include soft focus / depth of field blurring, recursive reflections, refraction within transparent objects, texture mapping and antialiasing with spheres and polygons.")
			+ spacer
			+ img("images/page_images/shirt_front.jpg")
			+ caption("MAGA")
			;
		contentlist.rd = ""
			+ img("images/page_images/keyart_vegucated.jpg")
			+ "<p class='caption'>Key art for the documentary film <span style='font-style:italic;'>Vegucated</span></p>"
			+ spacer
			+ img("images/page_images/keyart_rd_1600.jpg")
			+ "<p class='caption'>Key art for the documentary film <span style='font-style:italic;'>Racing Dreams</span></p>"
			+ spacer
			+ img("images/page_images/keyart_skinnydip.jpg")
			+ "<p class='caption'>Key art for the film <span style='font-style:italic;'>Skinny Dip</span></p>"
			;
	}

	// create list of items
	make_items_list();
	function make_items_list(){
		function add(image, blurb, query, title, subtitle, content){
			var object = {
				image: image
				,blurb: blurb
				,query: query
				,title: title
				,subtitle: subtitle
				,content: content
			}
			data.push(object);
		}
		//------------------------------------
		add(
			"hersheys_th.jpg"
			,"Event Graphics"
			,"event"
			,"Event Graphics"
			,""
			,contentlist.event
		);
		add(
			"th_vj.jpg"
			,"Visual Design"
			,"visualdesign"
			,"Visual Design"
			,""
			,contentlist.webdesign
		);
		add(
			"titleist_th.jpg"
			,"Brochure"
			,"titleist"
			,"Brochure"
			,"Titleist"
			,contentlist.titleist
		);
		add(
			
			//"gp_th.jpg"
			"th_gp_camera.jpg"

			,"Experimental Rendering"
			,"gp"
			,"Experimental Digital Rendering"
			,"Using simulations of evolution to draw pictures"
			,contentlist.gp
		);
		add(
			"flowers_th.jpg"
			,"Drawings"
			,"drawings"
			,"Drawings"
			,""
			,contentlist.drawings
		);
		add(
			
			//"rd_th.jpg"
			"th_vegucated.jpg"

			,"Key Art"
			,"rd"
			,"Key Art"
			,"Film branding"
			,contentlist.rd
		);
		add(
			"ad_th.jpg"
			,"Ad Campaign"
			,"ad"
			,"Ad Campaign"
			,"Spec ads for Health Warrior"
			,contentlist.ads
		);
		add(
			"bags_th.jpg"
			,"Product Photography"
			,"bags"
			,"Product Photography"
			,"Leather handbags"
			,contentlist.bags
		);
		add(
			
			//"oysters_th.jpg"
			"th_oysters_gray.jpg"

			,"Data Visualization"
			,"oysters"
			,"Data Visualization"
			,"Collaboration with researchers at the University of Rhode Island Department of Oceanography"
			,contentlist.oysters
		);
		add(
			
			// "th_tshirt.jpg"
			"th_raytrace.jpg"

			,"Other Projects"
			,"raytrace"
			,"Other Projects"
			,""
			,contentlist.other
		);
	}

}
