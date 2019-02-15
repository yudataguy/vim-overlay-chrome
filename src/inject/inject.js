let map = {};
let vim = false
let bookmark

// help screen html
const helpScreen = `<div id="help">VIM - main help file</div>
<ul>
  <li><span class='key'>j</span>: <span class='command'>scroll down</span></li>
  <li><span class='key'>k</span>: <span class='command'>scroll up</span></li>
  <li><span class='key'>d</span>: <span class='command'>page down</span></li>
  <li><span class='key'>u</span>: <span class='command'>scroll up</span></li>
  <li><span class='key'>g</span>: <span class='command'>jump to top</span></li>
  <li><span class='key'>Shift + g</span>: <span class='command'>jump to end</span></li>
  <li><span class='key'>m</span>: <span class='command'>set bookmark</span></li>
  <li><span class='key'>'</span>: <span class='command'>jump to bookmark</span></li>
  <li><span class='key'>CMD + /</span>: <span class='command'>toggle on/off VIM</span></li>
  <li><span class='key'>Shift + /</span>: <span class='command'>VIM hotkey guide</span></li>
</ul>`

const help = document.createElement('div')
help.innerHTML = helpScreen
help.className = 'helpScreen'
help.id = 'mainHelp'
document.getElementsByTagName('body')[0].appendChild(help)



document.getElementsByTagName('body')[0].addEventListener('keydown', event => {
	 // You could also use an array
	map[event.keyCode] = event.type == 'keydown';
	/* insert conditional here */
	console.log(map)
	
	if (vim || (map[191] && map[91])){
		if (event.keyCode === 74){ // J
			event.preventDefault()
			window.scrollBy(0, 50)
		}
		if (event.keyCode === 75){ // K
			event.preventDefault()
			window.scrollBy(0, -50)
		}
		if (event.keyCode === 68){ // D
			event.preventDefault()
			window.scrollBy(0, window.innerHeight-20)
		}
		if (event.keyCode === 85){ // U
			event.preventDefault()
			window.scrollBy(0, -window.innerHeight+20)
		}
		if (event.keyCode === 71){ // G
			event.preventDefault()
			window.scrollTo(0,0)
		}
		if (map[71] && map[16]){ // Shift + G
			event.preventDefault()
			window.scrollTo(0,document.body.clientHeight)
		}
		if (event.keyCode === 81){ // Q - close tab
			event.preventDefault()
			// alert('q')
		}
		if (event.keyCode === 77){ // M - bookmark position
			event.preventDefault()
			bookmark = window.scrollY
		}
		if (event.keyCode === 90){ // Shift + Z - close tab
			event.preventDefault()
			// alert('z')
		}
		if (event.keyCode === 222){ // ' - scroll to bookmark position
			event.preventDefault()
			window.scrollTo(0, bookmark)
		}
		if (map[191] && map[16]){ // ? - help screen 
			event.preventDefault()
			document.getElementById('mainHelp').classList.toggle('helpScreen')
		}
		if (map[191] && map[91]){ // turn on / off vim 
			event.preventDefault()
			vim = !(vim)
		}
		 
	}
	else {
		return
	}
})

document.getElementsByTagName('body')[0].addEventListener('keyup', event => {
	map = {}
})