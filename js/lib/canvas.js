function createCanvas( id ){

	var that = this;

	this.c = document.getElementById( id );

	this.cc = this.c.getContext( '2d');

	this.e = new Event('render');

	this.keyControl( );

	setInterval( function(){

		that._render();

	} , 1000 / this.frames );
}


createCanvas.prototype = {
	'e'				: null,
	'c' 			: null,
	'cc'			: null,
	'frames' 		: 40,
	'keyPressed'	: [],
	'fnRender'		: [],
	'keySeted'		: {},
	'attach'		: function(  id , fn , el ){

		this.fnRender[id] = {'fn':fn,'el':el};
	},
	'unattach'		: function ( UUID ){

		if( this.fnRender[UUID] ){

			delete this.fnRender[UUID]; 
		}
	},
	'_render'		: function(){

		for( var i in this.keySeted ){

			if( this.keyPressed[i] ){

				var fn = this.keySeted[i];

				fn.fn( fn.el , i );
			}
		}

		for( var i in this.fnRender ){

			var fn = this.fnRender[i];

			fn.fn( fn.el );
		}
	},
	'setKeyControl'	: function( keyCode , fn , el ){

		this.keySeted[keyCode] = {'fn':fn,'el':el}
	},
	'setKeyPressed'	: function( keyCode , value ){

		this.keyPressed[keyCode] = value;
	},
	'keyControl':function(){

		var that = this;

		document.addEventListener( 'keydown' , function( e ){
		
			that.setKeyPressed( e.keyCode , true );
		});

		document.addEventListener( 'keyup' , function( e ){
			
			that.setKeyPressed( e.keyCode , false );
		});
	},
	'createUUID'	: function(){
		
		var s = [];

		var hexDigits = "0123456789abcdef";

		for (var i = 0; i < 36; i++) {

			s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
		}

		s[14] = "4";

		s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);

		s[8] = s[13] = s[18] = s[23] = "-";

		var uuid = s.join("");

		return uuid;
	}

}