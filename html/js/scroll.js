(function(){
	function fade(elems, isFadeIn, duration) {
		if(isFadeIn)
			elems.fadeIn(duration);
		else
			elems.fadeOut(duration);
	}
	function scrollHeight() {
		return $(document).height() - $(window).height();
	}
	$(document).ready(function(){
		var top = $("#scroll-to-top"),
			bottom = $("#scroll-to-bottom"),
			duration = 500,
			isFirefox = typeof InstallTrigger !== 'undefined',
			body = $(isFirefox ? "html" : "body"),
			isTopVisible = true,
			isBottomVisible = true;
		top.click(function(){
			body.animate( { scrollTop: 0 }, duration );
		});
		bottom.click(function(){
			body.animate( { scrollTop: scrollHeight() }, duration );
		});
		var updateButton = function(){
			var duration = "fast"
			if( isTopVisible !== (body.scrollTop() > 0)){
				fade(top, isTopVisible = !isTopVisible, duration);
			}
			if( isBottomVisible !== (body.scrollTop() < scrollHeight())){ 
				fade(bottom, isBottomVisible = !isBottomVisible, duration);
			}
		};
		$(window).scroll(updateButton);
		updateButton();
	});
})();
