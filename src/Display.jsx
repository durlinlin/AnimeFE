import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Display() {
  const [anime, setAnime] = useState([]);
  let { title } = useParams();

  const fetchData = async () => {
    const response = await axios.get(
      `https://api-project-production-9b1c.up.railway.app/anime/title/${title}`,
      {
        headers: { Accept: "application/json" },
      }
    );
    console.log(response.data);
    
    setAnime(response.data);
  };

  useEffect(() => {
    setAnime([]);
    fetchData();
  }, [title]);

  const characters = [];

  const eachCharacter = anime.filter((element) => {
    const isDuplicate = characters.includes(element.character);

    if (!isDuplicate) {
      characters.push(element.character);
      return true;
    }

    return false;
  });
  console.log(characters);

  return (
    <div className="displayContainer">
      <h1>{title}</h1>
      <div className="contentContainer">
        {characters.map((data, key) => (
          <div key={key} className="characterCard">
            <div className="characterName">{data}</div>
            <div className="characterQuote">
              <div key={key} className="quotes">
              {anime.map((quote, key) => quote.character.includes(data) && (
                <div className="quoteText">{quote.quote}</div>
              ))}
                </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
