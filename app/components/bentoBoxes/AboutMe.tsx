import React from 'react'

const AboutMe = () => {
  return (
    <div className="flex flex-col text-sm gap-2">
      <p>About Me:</p>
      <p className="opacity-75">Software Engineer</p>

      <section>
        <p>
          Originally a software engineer that later developed a strong creative
          side. I&apos;ve worked professionally in the web and video game
          industry for over 10 years, utilizing advanced 3D and motion graphics
          to deliver magical experiences to millions of people. I find myself
          positioned between product, design, and engineering; leading the
          development of cutting-edge projects.
        </p>
      </section>

      <section>
        <ul>
          <li className="flex items-center gap-2">
            <span>🍩</span>
            Making the best donuts!
          </li>
        </ul>
      </section>

      <section>
        <p>Outside of tech...</p>
        <ul>
          <li className="flex items-center gap-2">
            <span>🍩</span>
            Making the best donuts!
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AboutMe