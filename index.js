require("dotenv").config();
const axios = require("axios");

const { App } = require("@slack/bolt")

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/baguette-ping", async ({command,ack,respond}) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond ({ text: `Baguette is Up! :yay:\nLatency: ${latency}ms`});
});


app.command("/baguette-flip", async ({command,ack,respond}) => {
  const roll = Math.random()
  let result;
  await ack();

  if (roll > 0.5) {
   result = `The flip was 👀 \nHeads! :sonbaby-anim:`}
  else {
   result = `The flip was 👀 \nTails! :pet-baguette:`
  }

  await respond ({ 
    text : result,
    response_type : "in_channel",
});
});

app.command("/baguette-customs-incident", async ({command,ack,respond}) => {
  await ack();
  await respond ({
    text: `On the unsuspecting night of 25th September, 2026\nA dumbass with little help from @ayesha bought keycaps for 50 stardust.\n Little did he know that those keycaps were 300$ amounting to over 190$ in customs :sonbaby-anim:\n Legends say The baguette still awaits his parcel...`,
    response_type : "in_channel"
  });
});

app.command("/baguette-help", async ({command,ack,respond}) => {
  await ack();
  await respond({
      text: `Availaible Commands:
      1. Actual Commands-
        /baguette-ping : Check the bot's latency
        /baguette-dog : Fetches an image from the Dog.ceo API.
        /baguette-help : The help command for @Baguette slackbot (current occurence)
        /baguette-flip : Randomly flips a coin! (in_channel)
        /baguette-quote : Expels out the quote of the day! (in_channel)
      2. Joke Commands- 
        /baguette-customs-incident : Tells the lore behind the customs...`
});
});

app.command("/baguette-dog", async ({command,ack,respond}) => {
  await ack();
  const response = await axios.get("https://dog.ceo/api/breeds/image/random");
  try {
  await respond ({
    blocks: [{
      type: 'image',
      image_url: response.data.message,
      alt_text: 'a random dog'
    }
  ]
  }); }
  catch(err) {
    console.error(err);
    await respond ({text: `Failed to fetch one :( Looks like even the dogs are angry.`})
  }
});

app.event('member_joined_channel', async ({event, client}) =>{
  await client.chat.postMessage ({
    channel :event.channel,
    text : `:SIREN1: WELCOME TO THE CHANNEL <@${event.user}> :RAHH:\nPrepare to be disappointed :omgg2: Also Join <#C0BBY3B43EJ> while you're at it :constipation:\nCC <@U0AE3R4FR3R>`
  })
})

app.command("/baguette-quote", async ({command,ack,respond})  => {
  await ack()
try {
  const response = await axios.get("https://zenquotes.io/api/today");
  const quote = response.data[0]; //since it's a array https://docs.zenquotes.io/zenquotes-documentation/
  await respond ({
    text : `${quote.q} \n By ${quote.a}`,
    response_type : "in_channel"
  });
  }
  catch(err) {
    console.error(err);
    await respond ({
      text: `AWW MAN how am I supposed to get my motivation now :sad-pf:\n Error fetching quote :pf:`
    })
  }

});


(async () => {
  await app.start();
  console.log ("bot is up");
})();