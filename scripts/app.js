
(function(document) {

	var app = document.querySelector('#app');


	app.addEventListener('dom-change', function() {

		page('/', function (ctx, next) {                
			app.route = 'list';
		});

		page('/list', function (ctx, next) {                
			app.route = 'list';
		});

		page('/room', function (ctx, next) {                
			app.route = 'room';
		});

		page({
	      hashbang: true
	    });    
	});


})(document);