$(function() {
	(function initZoom (argument) {
		var $zoomed = $(".img-wrapper-l"),
			$normal = $(".img-wrapper"),
			$img = $normal.children("img"),
			$zImg = $(createImage($img.attr("src")))
			ratio = {};

		// append the new created image to the zoomed image area
		$zoomed.append($zImg);
		// mouse events to control display of zoomed image on hover of original image
		$normal
			.mouseenter(function () {
				$zoomed.removeClass("hidden");
				window.setTimeout(function () {
					ratio = getRatio();
				}, 10);
			})
			.mouseover(function () {
				$zoomed.removeClass("hidden");
			})
			.mouseout(function () {
				$zoomed.addClass("hidden");
			});

			 // ######## capture coordinates of original image and then reposition the zoomed image ########### //
		    // 1) capture coordinates of original image in respect of the pointer X,Y //
		   // 2) calculate the x,y coordinates for the part of zoomed image to show //
		  // e.g. original image is of 10x10px and zoomed image is of 50x50px then the ratio is 5 //
		 //  & then move the big image x by X*5 and y by Y*5 to show the zoomed hover part as zoomed//
		// ############################################################################################## //
		$img.mousemove(function (e) {
			var parentOffset = $(this).offset();
			var coors = {x: e.pageX - parentOffset.left, y: e.pageY - parentOffset.top};
			$zImg.css({'top': -(ratio.sizeRatio.y * coors.y), 'left': -(ratio.sizeRatio.x * coors.x)});
		});

		// #### create image everytime original image is hovered on #### //
		function createImage (url) {
			var i = document.createElement("img");
			i.src = url;
			return i;
		}

		// #### calculate the sizeratio between original image and zoomed image #### //
		function getRatio () {
			var nImSize = {w: $img.width(), h: $img.height()};
			var zImSize = {w: $zImg.width(), h: $zImg.height()};
			var sizeRatio = { x: zImSize.w/nImSize.w, y: zImSize.h/nImSize.h}
			
			return {
				sizeRatio: sizeRatio,
				img: nImSize,
				zImg: zImSize
			};
		}
	})();
});