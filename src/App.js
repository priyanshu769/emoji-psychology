import React, { useState } from "react";
import "./styles.css";

const priyanshu = "https://devpriyanshu.netlify.app";

const myEmojis = {
  "🤑":
    "This is 'money mouth face' emoji, it is mainly used while a person is seeing money in near future or things related to money. But here in India people use 'Paisa hi paisa hoga' meme template.",
  "🤫":
    "This is 'sushing face' emoji, it is used when someone wants to make the other person quite or they want to keep a secret.",
  "😐":
    "This is 'expressionless face' emoji, it is used when someone is numb from the words the other person wrote or if someone doesn't want to say anything at that moment.",
  "🥰":
    "This is 'face with hearts' emoji as emojipedia. People say it's used when someone feels loved. I don't know that much as I have never been in love.",
  "🙂":
    "This is 'slightly smiling Face' emoji. Mainly used at the saddest point to hide their sadness with this mask. The most used one.",
  "❤️":
    "People say this 'heart' emoji. I don't know much about it as people say it's something related to love or what. Actually I have never been loved, so I can't tell much.",
  "🤐":
    "This is 'zipper face' emoji. It is used when someone's going to keep a secret or don't have words.",
  "🤤":
    "This is 'drooling face' emoji. It is used when someone wants to convey that their mouth is watering right now.",
  "🥳":
    "This is 'partying face' emoji. It is used when people are planning for a party or they want to say that we will have fun in the party.",
  "👋":
    "This is 'waving hand' emoji. It is used when someone wanna say bye to you. It can also be used at times when you start the chat but I think it isn't promising so it doesn't get used."
  // "": "This is '' emoji. It is used when",
};

const emojisWeHave = Object.keys(myEmojis);

export default function App() {
  const [emojis, setEmojis] = useState("");
  const [displayEmoji, setDisplayEmoji] = useState("");

  function inputHandler(event) {
    let userInput = event.target.value;
    let meaning = myEmojis[userInput];
    if (meaning === undefined) {
      meaning = "Not in our Database.";
    }
    setDisplayEmoji(userInput);
    setEmojis(meaning);
  }

  function emojiClickHandler(emoji) {
    let meaning = myEmojis[emoji];
    setDisplayEmoji(emoji);
    setEmojis(meaning);
  }

  return (
    <div className="App">
      <h1 className="heading">Emoji Psychology</h1>
      <input
        onChange={inputHandler}
        placeholder="Enter an emoji or select below!"
      />
      <div className="emojiContainer">
        {emojisWeHave.map(function (emoji) {
          return (
            <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
              {emoji}
            </span>
          );
        })}
      </div>

      <div className="result">
        <h2>Psychology behind: {displayEmoji}</h2>
        <span>{emojis}</span>
      </div>
      <footer>
        <p>More emojis coming soon.</p>
        <p>
          Made by <a href={priyanshu}>Priyanshu</a>.
        </p>
      </footer>
    </div>
  );
}
