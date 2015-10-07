function background( c , fn ){

	var that = this;

	this.c = c;

	this.img = new Image();

	this.img.src = this.file;

	this.img.onload = function(){ 

		that.isLoaded = true;

		that.imageLoaded(); 

		fn();
	};
}

background.prototype = {
	'c'				: null,
	'img'			: null,
	'isLoaded'		: false,
	'file'			: 'images/espacio.jpg',
	'imageLoaded'	: function( ){

		this.c.attach( this.c.createUUID() , this.draw , this );
	},
	'draw'			: function( el ){

		el.c.cc.drawImage( el.img , 0 , 0 );
	}

}