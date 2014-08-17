	$(document).ready ->
		top = $("#scroll-to-top")
		bottom = $("#scroll-to-bottom")
		duration = 500
		isFirefox = InstallTrigger?
		body = $(if isFirefox then "html" else "body")
		isTopVisible = true
		isBottomVisible = true
		top.click ->
			body.animate({scrollTop: 0}, duration )
		bottom.click ->
			body.animate({scrollTop: $(document).height() - $(window).height()}, duration)
		updateButton = ->
			duration = "fast"
			if isTopVisible != (body.scrollTop() > 0)
				isTopVisible = !isTopVisible
				if isTopVisible
					top.fadeIn(duration)
				else
					top.fadeOut(duration)
			if isBottomVisible != (body.scrollTop() < $(document).height() - $(window).height())
				isBottomVisible = !isBottomVisible
				if isBottomVisible
					bottom.fadeIn(duration)
				else
					bottom.fadeOut(duration)
		$(window).scroll updateButton
		updateButton()
