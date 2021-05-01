module.exports = {
    name: 'translate',
    description: 'Translate the message sent by user.',
    execute(client, message, cmd, args, Discord) {
        if (cmd === "translate") {
            if (args.length < 3) {
                message.reply(speech.BOT_TRANS_SPECIFIC_ERROR);
            } 
            else {
                let argFrom = args[0].toLowerCase();
                let argTo = args[1].toLowerCase();
    
                let lang_from = language.filter(ele => ele.name === argFrom)[0].abrv;
                let lang_to = language.filter(ele => ele.name=== argTo)[0].abrv;
                let text = args.slice(2).join(' ');
    
                translate(text, {from: lang_from, to: lang_to})
                    .then(res => message.channel.send(res.text))
                    .catch(err => console.log(speech.BOT_TRANSLATION_ERROR + err));
            }
        }
    }
}