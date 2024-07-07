import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col text-sm gap-2 p-4">
      <p>About Me:</p>
      <p className="opacity-75">Software Engineer</p>

      <section>
        <p>
          I am a software engineer and a current student at the University of
          Houston, with a strong passion for web development, which I have
          pursued through various open-source projects. My journey as a
          first-generation immigrant has instilled in me a robust work ethic and
          a relentless drive to succeed. This unique background has shaped my
          determination and resilience, enabling me to overcome challenges and
          thrive in both my academic and professional endeavors.
        </p>
      </section>

      {/* <section>
        <ul>
          <li className="flex items-center gap-2">
            <span>🍩</span>
            Making the best donuts!
          </li>
        </ul>
      </section> */}

      {/* <section>
        <p>Outside of tech...</p>
        <ul>
          <li className="flex items-center gap-2">
            <span>🍩</span>
            Making the best donuts!
          </li>
        </ul>
      </section>*/}
    </div>
  );
};

export default AboutMe;
