$(function(){
	window.touch = $('html').hasClass('touch');
	window.media = $('hr:first').length != 0 ? $('hr:first').css('width').replace('px', '') : 0;
	
	if (window.touch) {
		$('[data-tooltip]').removeAttr('data-tooltip');
	}
	
	$(document).foundation();
	
	$.get('http://www.xavierfoucrier.fr/javascript/asynchronous/service-detection.php', function(data) {
		if (data == 'deprecated') {
			$('#workspace').append('<div class="notification deprecated text-center effect bounceInDown"><i class="icon fontello-info-circled"></i>Le navigateur que vous utilisez n\'est plus Ã  jour. Il est recommandÃ© d\'utiliser un navigateur moderne&nbsp;&mdash;&nbsp;<a href="http://whatbrowser.org/" title="Aide Google" target="_blank" class="fontello-cog">&nbsp;Mettre Ã  jour</a></div>');
		}
	});
});