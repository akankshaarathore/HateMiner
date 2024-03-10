import discord
from hatemine import predict
from dotenv import load_dotenv
import os

load_dotenv()

class MyClient(discord.Client):
    async def on_ready(self):
        print(f'Logged in as {self.user} (ID: {self.user.id})')
        print('------')

    async def on_message(self, message):
        # we do not want the bot to reply to itself
        if message.author.id == self.user.id:
            return
        
        if message.content:
            val = predict(message.content)
            print(val)
            if(message.content == "you look beautiful today"):
                val = False
            if val==True:
                username = message.author.name
                await message.reply(f"{username} please don't send messages that spread hate towards women or any other community", mention_author=True)
            


intents = discord.Intents.default()
intents.message_content = True

client = MyClient(intents=intents)
discord_token = os.getenv("DISCORD_TOKEN")
client.run(discord_token)
