import React from "react";
import { useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import api from "./components/api.js";
import "./style.css";

const api_memes (api) => {
  return (
    <div>
      {memes.map((meme) => (
        <div key={meme.id}>
          <img src={meme.url} alt={meme.name} />
        </div>
      ))}
    </div>
  );
}
