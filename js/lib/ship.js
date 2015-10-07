function ship( c , enemies ){

	var that = this;

	this.c = c;

	this.enemies = enemies;

	this.img = new Image();

	this.img.src = this.file;

	this.setKeys();

	this.lastShoot = Date.now() - this.timeShoot;

	this.img.onload = function(){ 

		that.y = that.c.c.height - that.img.height - 5;

		that.x = 0

		that.w = this.width;

		that.h = this.height;

		that.imageLoaded(); 
	};

}

ship.prototype = {
	'c'				: null,
	'enemies'		: null,
	'img'			: null,
	'x'				: null,
	'y'				: null,
	'w'				: null,
	'h'				: null,
	'shipShoots'	: [],
	'timeShoot'		: 100,
	'lastShoot'		: 0,
	'speed'			: 3,
	'file'			: 'images/ship.png',
	'imageLoaded'	: function( ){

		this.c.attach( this.c.createUUID() , this.draw , this );
	},
	'setKeys'		: function(){

		this.c.setKeyControl( 37 , this.keyLeft , this );

		this.c.setKeyControl( 39 , this.keyRight , this );

		this.c.setKeyControl( 32 , this.shoots , this );

	},
	'keyLeft'		: function( el ){

		el.x -= el.speed;
	},
	'keyRight'		: function( el ){

		el.x += el.speed;
	},
	'shoots'		: function( el ){

		var time = Date.now() - el.lastShoot;

		if( (time) >= el.timeShoot ){

			var shootUUID = el.c.createUUID();

			el.lastShoot = Date.now();

			el.shipShoots[ shootUUID ] = new shoot( el.c , el.x , el.y , el.w , el.h , shootUUID , el , 1 );
		}
	},
	'shootDestroy'	: function( shootUUID ){

		delete this.shipShoots[ shootUUID ];
	},
	'draw'			: function( el ){

		el.c.cc.drawImage( el.img , el.x ,el.y );
	}
}
