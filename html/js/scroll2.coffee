	fade = (elems, isFadeIn, duration) ->
		if isFadeIn
			elems.fadeIn(duration)
		else
			elems.fadeOut(duration)
	scrollHeight = -> $(document).height() - $(window).height()
	$(document).ready ->
		top = $("#scroll-to-top")
		bottom = $("#scroll-to-bottom")
		duration = 500
		isFirefox = InstallTrigger?
		body = $(if isFirefox then "html" else "body")
		isTopVisible = true
		isBottomVisible = true
		top.click ->
			body.animate({scrollTop: 0}, duration)
		bottom.click ->
			body.animate({scrollTop: scrollHeight()}, duration)
		updateButton = ->
			duration = "fast"
			fade(top, isTopVisible = !isTopVisible, duration) if isTopVisible != (body.scrollTop() > 0)
			fade(bottom, isBottomVisible = !isBottomVisible, duration) if isBottomVisible != (body.scrollTop() < scrollHeight() )
		$(window).scroll updateButton
		updateButton()
