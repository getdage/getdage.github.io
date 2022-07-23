var Menus = document.querySelector(".menus");
var Cancel = document.querySelector(".cancel");

		Menus.onclick = () =>{
			document.body.classList.add("disable");
		}
		
		Cancel.onclick = () =>{
			document.body.classList.remove("disable");
		}
