# Baguette SlackBot
A welcomer slackbot for my personal channel! Originally shipped to Stardance under the "Make a Slack Bot" mission!   
## Currently the following commands work-
1. /baguette-ping : Pings the bot for it's latency
2. /baguette-help : Lists all commands by the @baguette slack bot.
3. /baguette-dog : Fetches an image of a dawg from the dog.ceo [dog API](https://dog.ceo/dog-api)!
4. /baguette-flip : Randomly flips Heads or Tails.
5. /baguette-quote : Fetches the quote of the day from ZEN QUOTES [zen](https://docs.zenquotes.io/zenquotes-documentation/)!  
6. /baguette-customs-incident : Tells the lore behind the customs...

## EVENT Subscriptions--
+ Checks for user entry into my channel ONLY "[Mk1A-NotDefined](https://hackclub.enterprise.slack.com/archives/C0BMFNBG1FU)" and sends a welcome message.   
+ Replies with "Did someone order a FRESH BAGUETTE" to a message containing "Mk1A" and CCs me to the response message, in_channel.

I have a lot more planned for this bot such as-   
~~1. Auto detecting user entry in a channel and welcoming them.~~  
2. API features to update new entries to my blog website!

The bot is hosted on [NEST](https://nest.hackclub.com/) and runs 24/7!  

## To run it locally-
+ Navigate to the directory in which you want to host it and run-  
"git clone https://github.com/Mk1A-Falcon/Baguette.git"
+ Run ```npm install``` to check for updates in dependencies.
+ Follow and input the api Keys accordingly in a seperate .env file as referred to as in the .env.example file.


Anyways, Thanks for reading this README :)