let elems = document.querySelectorAll('.elem')

elems.forEach(el => {
	el.addEventListener('click', function () {
		elems.forEach(e => e.classList.remove("active"))
		if (!this.classList.contains('active')) this.classList.add('active')
		else this.classList.remove('active')
	})
})

//================================================ Game

let rps = ['rock', 'paper', 'scissors']
let userElem = document.querySelector('.userElem')
let userImg = document.querySelector('.userElem img')
let comElem = document.querySelector('.comElem')
let comImg = document.querySelector('.comElem img')
let winText = document.querySelector('.who-win span')
let randomNum

function start() {
	window.scrollTo(0, 0)
	if (document.querySelector('.elem.active')) {
		document.querySelector('.userElem').style.transform = 'scale(0)'
		document.querySelector('.comElem').style.transform = 'scale(0)'
		document.querySelector('.vs').style.opacity = 0
		document.querySelector('.vs').style.transform = 'translateY(-50%)'
		document.querySelector('.who-win span').style.transform = 'translateY(-50%)'
		document.querySelector('.who-win span').style.opacity = 0
		document.querySelector('.next').style.opacity = 0

		randomNum = Math.floor(Math.random() * 3)
		let user = document.querySelector('.elem.active')
		userElem.id = user.getAttribute('data-value')
		userImg.src = `./img/${user.getAttribute('data-value')}.png`
		document.querySelector('.start').style.display = 'none'
		document.querySelector('.game').style.display = 'flex'
		comElem.id = rps[randomNum]
		comImg.src = `./img/${rps[randomNum]}.png`
		setTimeout(() => {
			document.querySelector('.userElem').style.transform = 'scale(1)'
		}, 250)
		setTimeout(() => {
			document.querySelector('.vs').style.opacity = 1
			document.querySelector('.vs').style.transform = 'translateY(0)'
		}, 500)
		setTimeout(() => {
			document.querySelector('.comElem').style.transform = 'scale(1)'
		}, 1000)
		setTimeout(() => {
			if (comElem.id === userElem.id) winText.innerHTML = 'Draw...'
			else if (comElem.id === 'rock' && userElem.id == 'paper' ||
				comElem.id === 'paper' && userElem.id == 'scissors' ||
				comElem.id === 'scissors' && userElem.id == 'rock') winText.innerHTML = 'You Win!!!'
			else winText.innerHTML = 'You Lose :('

			document.querySelector('.who-win span').style.transform = 'translateY(0)'
			document.querySelector('.who-win span').style.opacity = 1
			document.querySelector('.next').style.opacity = 1
		}, 1300)
	}
}

function again() {
	window.scrollTo(0, 0)
	document.querySelector('.game').style.display = 'none'
	document.querySelector('.start').style.display = 'flex'

	document.querySelector('.next').style.opacity = 0
	document.querySelector('.userElem').style.transform = 'scale(0)'
	document.querySelector('.comElem').style.transform = 'scale(0)'
	document.querySelector('.vs').style.opacity = 0
	document.querySelector('.vs').style.transform = 'translateY(-50%)'
	document.querySelector('.who-win span').style.transform = 'translateY(-50%)'
	document.querySelector('.who-win span').style.opacity = 0

}

