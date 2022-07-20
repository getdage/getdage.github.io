const chk = document.getElementById('chk');

var menus = document.querySelector('.menus');
var cancel = document.querySelector('.cancel');


	chk.addEventListener('change', () => {
		document.body.classList.toggle('dark');
	});


	menus.onclick = () =>{
		document.body.classList.add('discroled');
	}
	
	cancel.onclick = () =>{
		document.body.classList.remove('discroled');
	}


