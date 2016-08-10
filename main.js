$(function() {
	(function initZoom (argument) {
		var $zoomed = $(".img-wrapper-l"),
			$normal = $(".img-wrapper");
			// $img = createImage($normal.children('img').attr("src"));
		console.log($normal);
		$zoomed.append($img);

		$normal
			.mouseover(function () {
				$zoomed.removeClass("hidden");
			})
			.mouseout(function () {
				$zoomed.addClass("hidden");
			})
			.mousemove(function (e) {
				console.log("testing");
			});

		function createImage (url) {
			var i = document.createElement("img");
			i.src = url;
			return i;
		}
	})();
});