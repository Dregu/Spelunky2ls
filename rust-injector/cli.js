const { spawn } = require('child_process')
const exec = require('child_process').exec
const entities = require('./entities.json')
const udp = require('dgram')
const client = udp.createSocket('udp4')
const readline = require('readline')
const path = require('path')
readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)
process.stdin.resume()
process.stdin.setEncoding('utf8')
console.clear()
var injector = 'injector.exe'
var running = false, pid = 0, status = ''
const inject = () => {
	exec('tasklist', (err, stdout, stderr) => {
		var match = stdout.match(/Spel2\.exe +(\d+)/s);
		if(match) {
			var newpid = parseInt(match[1])
			if(running == false || pid != newpid) {
				pid = newpid
				status = (new Date).toLocaleTimeString('is')+' \x1b[33mFound new Spel2.exe process, injecting...\x1b[0m'
				update()
				exec(injector, (err, stdout, stderr) => {
					if(err) {
						(new Date).toLocaleTimeString('is')+' \x1b[31mError injecting: '+err.toString()+'\x1b[0m'
					} else {
						status = (new Date).toLocaleTimeString('is')+' \x1b[32mSpel2.exe process id '+pid+' injected!\x1b[0m'
						running = true
					}
					update()
				})
			}
		} else {
			status = (new Date).toLocaleTimeString('is')+' \x1b[31mSpel2.exe process not found :(\x1b[0m'
			update()
			running = false
		}
	})
}
setInterval(inject, 5000);
inject()
var ents = [], results = []
for(let e of entities) {
	ents.push(e['ID'].toString().padStart(3, '0')+': '+e.Name.replace('ENT_TYPE_', ''))
}
ents.sort();
results = ents;
var input = '', id = 0, sid = 0, dx = 0, dy = 0, help = '(Pg)Up/Down: Select | ^Arrows: x,y | Enter: Spawn | ^W: Erase Word | ^C: Quit'
process.stdin.on('keypress', (str, key) => {
	update(str, key);
})
const update = (str, key) => {
	if (key && key.ctrl && key.name == 'c') process.exit()
	const y = process.stdout.rows
	console.clear()
	var search = false;
	if(key) {
		if(key.ctrl) {
			if(key.name == 'up') {
				dy++
			} else if(key.name == 'down') {
				dy--
			} else if(key.name == 'right') {
				dx++
			} else if(key.name == 'left') {
				dx--
			} else if(key.name == 'w') {
				let inputs = input.trim().split(' ')
				inputs.pop()
				input = inputs.join(' ')+' '
				if(input == ' ') input = ''
				search = true
			}
		} else if(key.name == 'return') {
			if(running) {
				var cmd = sid+' '+dx+' '+dy
				client.send(cmd+'\n', 5001, 'localhost')
				status = (new Date).toLocaleTimeString('is')+' \x1b[32mCommand '+cmd+' sent!\x1b[0m'
			} else {
				status = (new Date).toLocaleTimeString('is')+' \x1b[31mYou should start Spel2.exe before spawning items you know!\x1b[0m'
			}
		} else if(key.name == 'escape') {
			input = ''
			search = true
		} else if(key.name == 'up') {
			if(id > 0) id--
		} else if(key.name == 'down') {
			if(id <= results.length-2) id++
		} else if(key.name == 'pageup') {
			if(id > parseInt(y/2)) id -= parseInt(y/2)
			else id = 0
		} else if(key.name == 'pagedown') {
			if(id <= results.length-parseInt(y/2)-2) id += parseInt(y/2)
			else id = results.length-1
		} else if(key.name == 'backspace') {
			input = input.substring(0, input.length-1)
			search = true
		} else if(key.sequence.length == 1 && key.sequence.charCodeAt(0)) {
			input += key.sequence
			search = true
		}
	}
	if(search) {
		results = ents.filter((ent) => {
			if(input.length == 0) return true
			const words = input.trim().split(' ')
			for(let word of words) {
				if(ent.toLowerCase().indexOf(word.toLowerCase()) === -1) {
					return false
				}
			}
			return true
		})
		id = 0
	}
	console.log(status)
	console.log(help)
	for(var i = 0; i < results.length; i++) {
		const r = results[i].split(': ')
		const rid = parseInt(r[0])
		if(i == id) sid = rid
	}
	var listlen = 0
	for(var i = (parseInt(id-y/2+2) < 0 || parseInt(id-y/2+3-(y/2-(results.length-id))) < 0) ? 0 : (id > results.length-y/2 ? parseInt(id-y/2+3-(y/2-(results.length-id))) : parseInt(id-y/2+3)); i < results.length; i++) {
		console.log((i == id?'\x1b[1m > ':'   ')+results[i]+'\x1b[0m')
		if(listlen++ > y-5) break
	}
	process.stdout.write(sid+' '+dx+','+dy+' > '+input)
}
update()