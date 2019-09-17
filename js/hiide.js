(function($) {
	'use strict';

	// Tilføjer plugin til fn så det kan bruges normalt
	$.fn.hiide = function (options) {

		// Options
		// Sætter default options, hvis der ikke sendes noget med
		let defaultOptions = {
			options:{
				animation: 'fadeToggle',
				animTime: 1500
			}
		
		};
		
		let opts = $.extend(true, {}, defaultOptions, options);

		// Går gennem alle elementer der matcher selector = idx=index, el=element
		return this.each(function (idx, el) {

		    $(".hideBtn").click(function () {
		    	if (opts.options.animation == "fadeToggle") {
		    		$(".hideDiv").fadeToggle(opts.options.animTime);
		    	}
		    	else if (opts.options.animation == 'slideToggle') {
		    		$(".hideDiv").slideToggle(opts.options.animTime);
                }

                else {
                	$(".hideDiv").hide(opts.options.animTime);
                }
            })
			
		});
	};

})(jQuery);