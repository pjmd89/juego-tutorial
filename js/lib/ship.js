function ship( c ){

	var that = this;

	this.c = c;

	this.img = new Image();

	this.img.src = this.file;

	this.setKeys();

	this.img.onload = function(){ 

		that.y = that.c.c.height - that.img.height - 5;

		that.x = 0

		that.imageLoaded(); 
	};

}

ship.prototype = {
	'c'				: null,
	'img'			: null,
	'x'				: null,
	'y'				: null,
	'w'				: null,
	'h'				: null,
	'speed'			: 3,
	'file'			: 'images/ship.png',
	'imageLoaded'	: function( ){

		this.c.attach( this.c.createUUID() , this.draw , this );
	},
	'setKeys'		: function(){

		this.c.setKeyControl( 37 , this.keyLeft , this );

		this.c.setKeyControl( 39 , this.keyRight , this );
	},
	'keyLeft'		: function( el ){

		el.x -= el.speed;
	},
	'keyRight'		: function( el ){

		el.x += el.speed;
	},
	'draw'			: function( el ){

		el.c.cc.drawImage( el.img , el.x ,el.y );
	}
}
