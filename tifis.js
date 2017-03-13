	var tablero;

    var fondo = {
    	imagenURL:"fondo.png",
    	// imagenOK: true
    };

     // var tifis ={
     //    x: 200,
     //    y:100
     //    frenteURL:"diana-frente",
     //    frenteOK: false
     // };

// 	function inicio()
// 	{
//      var canvas = document.getElementById("campo");
//      tablero = canvas.getContext("2d");

//      fondo.imagen = new Image();
//      fondo.imagen.src = fondo.imagenURL;

//      fondo.imagen.onload = dibujarFondo;  
//      // fondo.imagen.onload = confirmarFondo;
//      // dibujar();
// 	}
// // function dibujarFondo()
// // function confirmarFondo()
// // {
// // 	fondo.imagenOk = true;
// // 	dibujar();
// // }

// function dibujarFondo()
// // {
// // 	if(fondo.imagenOK == true)
// 	{
// 		tablero.drawImage(fondo.imagen, 0, 0);
// 	}
// // }

var tablero;
var teclas = 
{
	UP: 38,
	DOWN : 40,
	LEFT : 37,
	RIGHT : 39
};

var fondo = 
{
	imagenURL: "fondo.png",
	imagenOK: false
};

var tifis = 
{
	frenteOK: false,
	atrasOK: false,
	derOK: false,
	izqOK: false,
	velocidad: 10,
	x: 0,
	y:0
};

var liz = 
{
	imagenOK: false,
	velocidad: 10,
	x: 400,
	y: 300
};

function inicio()
{
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;

	tifis.frente = new Image();
	tifis.frente.src = "diana-frente.png";
	tifis.frente.onload = confirmarFrente;

	tifis.atras = new Image();
	tifis.atras.src = "diana-atras.png";
	tifis.atras.onload = confirmarAtras;

	tifis.der = new Image();
	tifis.der.src = "diana-der.png"
	tifis.der.onload = confirmarDer;

	tifis.izq = new Image();
	tifis.izq.src = "diana-izq.png";
	tifis.izq.onload = confirmarIzq;

	liz.imagen = new Image();
	liz.imagen.src = "liz.png";
	liz.imagen.onload = confirmarLiz;

	document.addEventListener("keydown", teclado);
}

var campo = [[160,150],
             [210,(150,170)],
             [210,(200,220)],
             [210,(250,470)],
             [(160,210),120],
             [(260,310),470],
             [(320,370),120],
             [(310,360),(150,470)],
             [(410,460),,470]];



function teclado(evento)
{
	var codigo = evento.keyCode;
	if(codigo == teclas.UP)
	{

		if(tifis.y > 0)
		{
			if((tifis.y	< 250)||(tifis.y > 250 && tifis.y 	< 400)||(tifis.x==150&&tifis.y!=400)||(tifis.y==250&&tifis.x>200)||(tifis.y==400&&tifis.x	<150)||(tifis.y>400))
		    {
	        tifis.y -= tifis.velocidad;
		    }

		}
	}

	if(codigo == teclas.DOWN)
	{
		if(tifis.y 		< 450 )
		{
			if((tifis.y	< 150)||(tifis.y>150&&tifis.y	<300)||(tifis.x==150&&tifis.y!=300)||(tifis.x>150&&tifis.y==150)||(tifis.y==300&&tifis.x<150)||(tifis.y	>300))
			{
			tifis.y += tifis.velocidad;
			}
		}
	}

	if(codigo == teclas.LEFT)
	{
		if(tifis.x	> 0)
		{
		if((tifis.x>250)||(tifis.x	< 150&&tifis.y	< 250)||(tifis.x==150&&tifis.y==250)||(tifis.y!=200&&tifis.x!=250)||(tifis.y>200))
		{
			tifis.x -= tifis.velocidad;
		}
		}
	}

	if(codigo == teclas.RIGHT)
	{
		if(tifis.x	< 450)
		{
			if((tifis.x>200&&tifis.y	<250)||(tifis.x		<=150&&tifis.y	<250)||(tifis.y>350&&tifis.x>=0)||(tifis.y!=300&&tifis.x	<100)||(tifis.y	<=300&&tifis.y>200))
		
		
		   {
			  tifis.x += tifis.velocidad;
	       }
	    }
	}

	dibujar(codigo);
}

function confirmarFondo()
{
	fondo.imagenOK = true;
	dibujar();
}

function confirmarFrente()
{
	tifis.frenteOK = true;
	dibujar();
}

function confirmarAtras()
{
	tifis.atrasOK = true;
	dibujar();
}

function confirmarIzq()
{
	tifis.izqOK = true;
	dibujar();
}

function confirmarDer()
{
	tifis.derOK = true;
	dibujar();
}

function confirmarLiz()
{
	liz.imagenOK = true;
	dibujar();
}

function dibujar(direccion)
{
	if(fondo.imagenOK)
	{
		tablero.drawImage(fondo.imagen, 0, 0);
	}

	var tifisOrientada = tifis.frente;
    
	if(tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK)
	{
		if(direccion == teclas.DOWN || direccion == undefined)
		{
			tifisOrientada = tifis.frente;
		}
		else if(direccion == teclas.UP)
		{
			tifisOrientada = tifis.atras;
		}
		else if(direccion == teclas.LEFT)
		{
			tifisOrientada = tifis.izq;
		}
		else if(direccion == teclas.RIGHT)
		{
			tifisOrientada = tifis.der;
		}
	}

	tablero.drawImage(tifisOrientada, tifis.x, tifis.y);

	if(liz.imagenOK)
	{
		tablero.drawImage(liz.imagen, liz.x, liz.y);

	}
}