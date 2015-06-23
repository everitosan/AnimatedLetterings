
  'use sctrict';

  var s ,lastData, lettering;

  function animateLetters() {

	  s = Snap('1000','1000');

	  Snap.load("/svg/NilasMoscas.svg",loadSnapCallback);

  }


  function loadSnapCallback(data) {
  		if (data) {
  			lastData = data;
	    	lettering = lastData.select("g");
	  		s.append(lettering);
	  		lettering.drag();
  		}


	  	var parts = lettering.selectAll(".bigLetters");
	  	var whiteLetters = lettering.selectAll('.whiteLetters');

	  	var propertiesParts = {	
	  		'stroke-width': 4.9535,
	  		'stroke': '#7C5A35',
	  		'stroke-dashoffset': 0
	  	};

	  	var propertiesWhiteLetters = {
	  		'fill-opacity': 1,
	  	};

	  	parts.attr({'stroke':'#966A40', 'stroke-width': 10, 'fill': '#FFFFFF'});
	  	whiteLetters.attr({'fill-opacity': 0});

	  	parts.forEach(function(path){
	  		tLenght = path.getTotalLength();

	  		var strokeProps = {
	  			'stroke-dasharray': tLenght,
	  			'stroke-dashoffset': tLenght
	  		};

	  		path.attr(strokeProps);
	  	});



	  	parts.animate(propertiesParts,5000, mina.easeinout);
	  	whiteLetters.animate(propertiesWhiteLetters,8000, mina.easeinout);

	  	parts.animate({'fill-opacity': 0},8000, mina.easeinout);
  	
  }

  document.onload=setTimeout(animateLetters,2500);



