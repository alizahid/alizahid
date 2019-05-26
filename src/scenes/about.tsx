import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import ali from "../assets/ali-zahid.jpg";

import "./about.scss";

const About: FunctionComponent = () => {
  return (
    <main className="about">
      <img src={ali} alt="Ali Zahid" />
      <h1>I'm Ali Zahid.</h1>
      <h2>I have a patent on blowing minds with epic design.</h2>
      <p>
        I started web design when I was 8 years old. 20 years later, I've built
        a lot of products for web, mobile, and desktop.
      </p>
      <p>
        I've worked with large enterprises, government organizations, Academy
        and Emmy award winning filmmakers, esports teams, student groups, and
        everything in between, to help realize their ideas.
      </p>
      <p>
        Check out my <Link to="/playground">playground</Link>. I make cool stuff
        in my spare time.
      </p>
      <p>
        Get in <a href="mailto:ali@designplox.co">touch with me</a> if you're
        looking for help with your next great product or idea.
      </p>
      <h3>Blog</h3>
      <p>
        Built with&#160;
        <a href="https://reactjs.org">React</a> and&#160;
        <a href="https://www.typescriptlang.org">TypeScript</a>.
      </p>
      <p>
        Content on <a href="https://prismic.io">Prismic</a>. Hosted on&#160;
        <a href="https://render.com">Render</a>. Source on&#160;
        <a href="https://github.com/alizahid/alizahid">GitHub</a>.
      </p>
    </main>
  );
};

export default About;
