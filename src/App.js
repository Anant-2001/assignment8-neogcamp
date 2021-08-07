import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const emojDictionary = {
    "😉": "Blinking eye",
    "😂": "Laughing",
    "🙃": "Upside down face",
    "😋": "Face savouring Food",
    "🤗": "Hugging face"
  };

  var emojiList = Object.keys(emojDictionary);

  const [emojiMeaning, setEmojiMeaning] = useState("");

  function emojiHandler(event) {
    var display = emojDictionary[event.target.value];
    if (emojDictionary[event.target.value] === undefined) {
      setEmojiMeaning(" not present in our database");
    } else {
      setEmojiMeaning(display);
    }
  }

  function emojiClickHandler(emoji) {
    var display = emojDictionary[emoji];
    setEmojiMeaning(display);
  }

  return (
    <div className="center-container">
      <h1>Inside outtt</h1>
      <input
        style={{ maxWidth: "400px", padding: "0.5rem" }}
        onChange={emojiHandler}
      />

      <div style={{ padding: "1rem 1rem" }}>
        {" "}
        {emojiList.map(function (emoji, index) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "2rem",
                padding: "1rem 0.7rem",
                cursor: "pointer"
              }}
              key={emoji}
            >
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </div>
      <div>
        The meaning of your emoji is<strong> {emojiMeaning}</strong>
      </div>
    </div>
  );
}
