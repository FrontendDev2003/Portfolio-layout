const nav = document.querySelector('.nav');
const btn = document.querySelector('.nav-btn');
const img = document.querySelector('.nav-btn-img');

btn.onclick = ()=>{
	if (nav.classList.toggle('open')){
    img.src = "img/header/nav-close.svg";
	} else{
		img.src = "img/header/three-line.svg";
	}
}


