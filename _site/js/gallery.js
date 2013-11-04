$('#blueimp-gallery').on('slide', function(event, index, slide) {
	var gallery = $(this).data('gallery');
	var text = gallery.list[index].getAttribute('data-description');
	var node = $(slide).find('.description');
	node.empty();
	if (text) {
		node.text(text);
	}
	var link = gallery.list[index].getAttribute('data-link');
	var linkEl = $(slide).find('.link');
	if (link) {
		linkEl.attr('href', link);
	}
});

