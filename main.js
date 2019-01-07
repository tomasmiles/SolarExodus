const {app, BrowserWindow} = require('electron')

function createWindow() {
	win = new BrowserWindow({width: 800, height: 600})
	win.loadFile('se.html')
	win.on('closed', () => {
		win = null
	})
	win.setMenu(null);
}

app.on('ready', createWindow)
