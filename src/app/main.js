// API Dolar Today
//https://s3.amazonaws.com/dolartoday/data.json
/*
	Requires
*/
const typed = require('typed-js');
const Hammer = require('hammerjs');
const aos = require('aos');
const anime = require('animejs');

// variables
let AOS = Aos.init();
let valoR = document.getElementById('money');
let resultado = document.getElementById('resultado');
let btn = document.getElementById('send');
let Btn = document.getElementById('sendII');
let calculator = document.getElementById('calculator');
let open = document.querySelectorAll('.open');
let images = document.querySelectorAll('#xd');
let opens = [document.querySelector('.open'), document.querySelector('.open2'), document.querySelector('.open3'), document.querySelector('.open4')];
let pq3 = document.getElementById('pq');
let pq2 = document.getElementById('pq1');
let lista = document.getElementById('list');
let ventana = document.getElementById('window');
let ventanA = document.getElementById('windowImgs');
let btN = document.getElementById('mE');
let madurito = document.querySelectorAll('.madurito')[0];
let chz = document.querySelectorAll('.chaz')[0];
carga = false;


window.addEventListener('load', (l) => {
	carga = true;
});

btN.addEventListener('click', (v) => {
	v.preventDefault();
	ventana.classList.add('window-two');
	ventanA.style.visibility = 'visible';
		anime({
		targets : '.developer',
		translateX: 630,
		delay: anime.stagger(200)
	});
});

window.addEventListener('click', (A) => { 
	if(A.target == ventana)
	{
	ventana.classList.remove('window-two');
	ventanA.style.visibility = 'hidden';
	} else if(A.target == ventanA)
	{
	ventana.classList.remove('window-two');
	ventanA.style.visibility = 'hidden';
	}
});

anime({
  targets: '.one',
  translateY: 100,
  direction: 'reverse',
  delay: function(el, i, l) {
    return i * 100;
  },
  endDelay: function(el, i, l) {
    return (l - i) * 100;
  }
});

images[0].addEventListener('mouseover', imgScale);
images[1].addEventListener('mouseover', imgScale);
images[2].addEventListener('mouseover', imgScale);

madurito.addEventListener('click', sonar);

chz.addEventListener('click', sonarI);

btn.addEventListener('click', resultadoD);
Btn.addEventListener('click', resultadoB);

opens[0].addEventListener('mouseover', () => {
		anime({
			targets: '.open', 
			rotateZ: 270,
			loop: true,
			direction: 'alternate'
		});
});

opens[1].addEventListener('mouseover', () => {
		anime({
			targets: '.open2', 
			rotateZ: 270,
			loop: true,
			direction: 'alternate'
		});
});

opens[2].addEventListener('mouseover', () => {
		anime({
			targets: '.open3', 
			rotateZ: 270,
			loop: true,
			direction: 'alternate'
		});
});

opens[3].addEventListener('mouseover', () => {
		anime({
			targets: '.open4', 
			rotateZ: 270,
			loop: true,
			direction: 'alternate'
		});
});

function sonar(a)
{
	pq3.autoplay = true;
}


function sonarI(a)
{
	pq2.autoplay = true;
}


function imgScale(i)
{
	anime({
		targets: '#start',
		translateY: 5,
		scale: {
			value: 2,
			duration: 500,
			delay: 100
		}
	});
	window.addEventListener('mouseup', () => {
		anime({
		targets: '#start',
		translateY: 0,
		scale: {
			value: 1,
			duration: 600,
			delay: 200
		}
	});
	})
}

function resultadoB()
{
	
		$.getJSON("https://s3.amazonaws.com/dolartoday/data.json",function(data)
		{
		let valor = parseInt(valoR.value)
		const dolar = data.USD.transferencia;
		conversion = parseInt(valor / dolar);
		if(valoR.value == "")
		{
		$('#resultado').html('Debes escribir una cantidad, <b>lo siento</b>');
		} 
		else if(valor < dolar)
		{
		$('#resultado').html(`<p class="parfF">Nuestra moneda está demasiado devaluada como para ser calculada menor qué ${dolar}, <b>lo siento</b></p>`);
		} 
		else
		{
		$('#resultado').html(`${valor} Bolívares son: <b>${conversion} dólares</b>`);
		}
	});
}


function resultadoD()
{

		$.getJSON("https://s3.amazonaws.com/dolartoday/data.json",function(data)
		{
		let valor = parseInt(valoR.value)
		const dolar = data.USD.transferencia;
		conversion = parseInt(valor * dolar);
		if(valoR.value == "")
		{
			$('#resultado').html('Debes escribir una cantidad, <b>lo siento</b>')
		} else if(valor >= 100000)
		{
			$('#resultado').html('Debes escribir una cantidad menor qué')		
		} else if(typeof(dolar)){
			conversionI = parseFloat(conversion);
			$('#resultado').html()
		} else
		{
		$('#resultado').html(`${valor} dólares son: <b>${conversion} bolívares</b>`);
		}
	});
}

$.getJSON("https://s3.amazonaws.com/dolartoday/data.json",function(data)
{
	$('#DL').html(data.USD.transferencia + " Bs")
})


var typed = new Typed('#titleOne', {
	strings: ['Bienvenido/a...'],
	typedSpeed: 500,
	startDelay: 1520,
	smartBackspace: true,
	backSpeed: 100,
	loop: true,
	showCursor: false
});



var typedII = new Typed('#tite', {
	strings: ['', 'Soy Christian Paez'],
	typedSpeed: 500,
	startDelay: 120,
	smartBackspace: true,
	backSpeed: 100,
	loop: true,
	showCursor: false
});

var hammer = new Hammer(window);

hammer.on('tap', (ev) => {
		lista.style.display = "flex";
		lista.style.visibility = "visible";
		let dolarcito = document.getElementById('APIS')
		anime({
			targets: '#list',
			translateY: 20
		});
		if(ev.target == dolarcito)
		{
			console.log('jeje');
		}
});

hammer.on('press', (iv) => {
	anime({
			targets: '#list',
			translateY: -170
		});
});


