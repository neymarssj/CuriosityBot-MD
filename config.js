import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['59898600787', 'CuriosityBot-MD 🍧', true], ['5492266466080', 'Colaborado', true], ['5217294888993'], ['5492266466080'], ['593968585383'], ['51992004117'], ['5492266613038'], ['573106040746'], ['50558124470'], ['5214437863111'], ['51929972576']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['400359205']
global.suittag = ['994400359205']
global.mods = []
global.prems = []

global.packname = 'LASD9 🇺🇾'
global.author = ''
global.wm = 'LASD9 🇺🇾'
global.wm2 = 'LASD9 🇺🇾'
global.azami = 'alann'
global.cb = 'LASD9 🇺🇾'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '5217294888993'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
