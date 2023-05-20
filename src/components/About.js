import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>I'm doing this work on a Saturday of the date 20/05/2023. If there was a world appocalypse who would even know technology this advanced existed? </p>
    <img src={image} alt="I made this" ></img>
  </div>;
}

export default About;
