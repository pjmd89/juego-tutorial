function background( c ){

	var that = this;

	this.c = c;

	this.img = new Image();

	this.img.src = this.file;

	this.img.onload = function(){ 
		
		that.imageLoaded(); 
	};
}

background.prototype = {
	'c'				: null,
	'img'			: null,
	'file'			: 'images/espacio.jpg',
	'imageLoaded'	: function( ){

		this.c.attach( this.c.createUUID() , this.draw , this );
	},
	'draw'			: function( el ){

		el.c.cc.drawImage( el.img , 0 , 0 );
	}

}