function enemy( c , distance ){

	var that = this;

	this.c = c;

	this.img = new Image();

	this.img.src = this.file;

	this.img.onload = function(){ 

		that.y = 5 ;

		that.x = distance+5;

		that.w = this.width;

		that.h = this.height;

		that.imageLoaded(); 
	};

}

enemy.prototype = {
	'c'				: null,
	'img'			: null,
	'x'				: null,
	'y'				: null,
	'w'				: null,
	'h'				: null,
	'UUID'			: null,
	'shoots'		: [],
	'timeShoot'		: 300,
	'lastShoot'		: 0,
	'speed'			: 3,
	'count'			: 0,
	'file'			: 'images/ship.png',
	'imageLoaded'	: function( ){

		this.UUID = this.c.createUUID();

		this.c.attach( this.UUID , this.draw , this );
	},
	'getPosition'	: function(){

		return {'x':this.x,'y':this.y,'w':this.w,'h':this.h};
	},
	'position'		: function(){

		this.x += Math.sin( this.count * ( Math.PI / 90 ) ) * 5 ;

		++this.count;
	},
	'draw'			: function( el ){

		el.position();

		el.c.cc.drawImage( el.img , el.x ,el.y );
	},
	'_destroy'		: function(){

		this.c.unattach( this.UUID );
	}
}
