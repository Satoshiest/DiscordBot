var Scraper = require('images-scraper');

module.exports = {
    name: 'image',
    description: 'This command returns image to the text channel.',
    async execute(client, message, cmd, args, Discord){
      const google = new Scraper({
        puppeteer: {
          headless: true,
        },
      });
      const keyword = args.join(' ');
      if(!keyword) return message.channel.send('Please enter a keyword for the image.');
      const results = await google.scrape(keyword, 1);
      message.channel.send(results[0].url);
    }
}