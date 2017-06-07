const Discord = require('discord.js');
const readline = require('readline');

let webHookId = ""
let hookToken = ""

const hook = new Discord.WebhookClient(webHookId, hookToken)

let rl = readline.createInterface(process.stdin, process.stdout);
processMsg();

function processMsg() {

    rl.setPrompt(`Please enter your message: `);
    rl.prompt();
    rl.on('line', function (line) {
        hook.send(line);
        processMsg();
    })
}
