"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BackgroundBeams } from "@/ui/background-beams";
import "./confetti.css";

export default function ValentinePage() {
  const [yesClicked, setYesClicked] = useState(false);

  const Confetti = () => (
    <div className="confetti">
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i} className="confetti-piece"></div>
      ))}
    </div>
  );

  const ScrapbookContent = () => {
    const items = [
      // Page 1
      { type: "h2", text: "Hi Honey! :)", style: { top: "5rem", left: "5rem", transform: "rotate(-6deg)", fontSize: "3.5rem" }, font: "font-patrick-hand", color: "text-pink-300" },
      { type: "p", text: "Wow! It's been another year together huh?", style: { top: "15rem", right: "5rem", width: "400px", transform: "rotate(2deg)" }, font: "font-caveat", color: "text-white", size: "text-3xl" },
      { type: "img", src: "/photos-valenties/houston.jpeg", alt: "Houston", style: { top: "25rem", left: "10rem", width: "300px", height: "370px", transform: "rotate(5deg)" } },

      // Page 2
      { type: "p", text: "I'm so excited to be able to celebrate...", style: { top: "55rem", left: "2rem", width: "400px", transform: "rotate(-3deg)" }, font: "font-caveat", color: "text-white", size: "text-3xl" },
      { type: "p", text: "...this Valentine's day with you!", style: { top: "60rem", right: "2rem", width: "350px", transform: "rotate(4deg)" }, font: "font-caveat", color: "text-white", size: "text-3xl" },
      
      // Original New text section
      { type: "p", text: "I'm so thankful to be with you :)", style: { top: "70rem", left: "4rem", width: "400px", transform: "rotate(-2deg)" }, font: "font-caveat", color: "text-green-300", size: "text-3xl" },
      { type: "img", src: "/photos-valenties/image copy 5.png", alt: "Image 5", style: { top: "78rem", right: "2rem", width: "300px", height: "230px", transform: "rotate(5deg)" } },
      { type: "p", text: "I'm happy to talk to you and learn so much about you!", style: { top: "95rem", right: "1rem", width: "450px", transform: "rotate(3deg)" }, font: "font-caveat", color: "text-white", size: "text-3xl" },
      { type: "img", src: "/photos-valenties/ferris-wheel.jpeg", alt: "Ferris Wheel", style: { top: "105rem", left: "5rem", width: "320px", height: "250px", transform: "rotate(6deg)" } },
      { type: "p", text: "I'm happy to be with you for another year hehe... and many more!", style: { top: "128rem", left: "2rem", width: "500px", transform: "rotate(-3deg)" }, font: "font-caveat", color: "text-white", size: "text-3xl" },
      { type: "img", src: "/photos-valenties/image copy.png", alt: "Image Copy", style: { top: "140rem", right: "2rem", width: "290px", height: "230px", transform: "rotate(-4deg)" } },
      { type: "p", text: "I'm so excited for our future and can't wait", style: { top: "155rem", left: "3rem", width: "500px", transform: "rotate(2deg)" }, font: "font-caveat", color: "text-blue-300", size: "text-3xl" },

      // USER'S LATEST ADDITIONS
      { type: "p", text: "to see you in person soon :)!!", style: { top: "160rem", right: "3rem", width: "450px", transform: "rotate(-3deg)" }, font: "font-caveat", color: "text-blue-300", size: "text-3xl" },
      { type: "p", text: "Anyway back to our Valentie's day date :)", style: { top: "170rem", left: "4rem", width: "500px", transform: "rotate(1deg)" }, font: "font-patrick-hand", color: "text-pink-300", size: "text-3xl" },

      // Pushed-down content
      { type: "img", src: "/photos-valenties/image copy 2.png", alt: "Image 2", style: { top: "185rem", left: "3rem", width: "280px", height: "210px", transform: "rotate(-5deg)" } },
      { type: "p", text: "I hope you got your yummy food...", style: { top: "200rem", right: "3rem", width: "380px", transform: "rotate(-4deg)" }, font: "font-caveat", color: "text-white", size: "text-3xl" },
      { type: "p", text: "...and are ready for a night of fun and games.", style: { top: "208rem", left: "2rem", width: "450px", transform: "rotate(1deg)" }, font: "font-caveat", color: "text-white", size: "text-3xl" },
      { type: "img", src: "/photos-valenties/gas-station.jpeg", alt: "Gas Station", style: { top: "220rem", right: "2rem", width: "300px", height: "220px", transform: "rotate(-3deg)" } },
      
      { type: "p", text: "This will be a night to remember :)", style: { top: "240rem", left: "2rem", width: "400px", transform: "rotate(5deg)" }, font: "font-caveat", color: "text-white", size: "text-3xl" },
      { type: "img", src: "/photos-valenties/image.png", alt: "Image", style: { top: "250rem", right: "3rem", width: "260px", height: "200px", transform: "rotate(3deg)" } },
      { type: "img", src: "/photos-valenties/eating-food.jpeg", alt: "Eating Food", style: { top: "265rem", left: "8rem", width: "250px", height: "300px", transform: "rotate(-8deg)" } },

      { type: "p", text: "I love you Honey.", style: { top: "300rem", left: "10rem", width: "300px", transform: "rotate(3deg)" }, font: "font-patrick-hand", color: "text-red-300", size: "text-5xl" },
      { type: "img", src: "/photos-valenties/birthday-2025.jpeg", alt: "Birthday 2025", style: { top: "310rem", right: "3rem", width: "280px", height: "210px", transform: "rotate(-5deg)" } },
      { type: "img", src: "/photos-valenties/image copy 3.png", alt: "Image 3", style: { top: "330rem", left: "4rem", width: "290px", height: "220px", transform: "rotate(7deg)" } },
      
      { type: "img", src: "/photos-valenties/image copy 4.png", alt: "Image 4", style: { top: "355rem", right: "5rem", width: "260px", height: "200px", transform: "rotate(-2deg)" } },
      { type: "img", src: "/photos-valenties/image copy 6.png", alt: "Image 6", style: { top: "375rem", left: "3rem", width: "270px", height: "210px", transform: "rotate(-6deg)" } },
      { type: "img", src: "/photos-valenties/image copy 7.png", alt: "Image 7", style: { top: "395rem", right: "1rem", width: "280px", height: "220px", transform: "rotate(8deg)" } },
    ];

    return (
        <div className="w-full h-full relative p-8" style={{ minHeight: "420rem" }}> 
            {items.map((item, index) => {
                const style = { ...item.style, animationDelay: `${index * 0.1}s` };
                if (item.type === "img") {
                    return (
                        <div key={index} className="absolute float-animation scrapbook-image" style={style}>
                            <Image src={item.src} alt={item.alt} layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
                        </div>
                    );
                }
                const classNames = `${item.font || ''} ${item.color || ''} ${item.size || ''} absolute`;
                if (item.type === "h2") return <h2 key={index} className={classNames} style={item.style}>{item.text}</h2>
                if (item.type === "p") return <p key={index} className={classNames} style={item.style}>{item.text}</p>
                return null;
            })}
        </div>
    );
  };
  
  const ValentinePrompt = () => {
    const [noPosition, setNoPosition] = useState({ top: "50%", left: "55%" });
     const handleNoHover = () => {
        const newTop = Math.random() * 80 + 10;
        const newLeft = Math.random() * 80 + 10;
        setNoPosition({ top: `${newTop}%`, left: `${newLeft}%` });
    };
    return (
        <div className="text-center py-20">
            <h1 className="text-5xl font-bold font-caveat">Oops! Forgot to ask :) Will you be my valenties >:)</h1>
            <div className="mt-8 relative flex justify-center items-center h-48">
                <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg mr-4 text-2xl z-20"
                    onClick={() => setYesClicked(true)}
                >
                    Yes
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg text-2xl"
                    style={{ position: "absolute", ...noPosition, transition: "top 0.3s, left 0.3s" }}
                    onMouseEnter={handleNoHover}
                >
                    No
                </button>
            </div>
        </div>
    )
  }

  return (
    <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center antialiased text-white font-patrick-hand overflow-y-auto">
      {yesClicked && <Confetti />}

      <main className="w-full max-w-4xl h-full rounded-lg mt-8 border-4 border-dashed border-pink-300 p-4 z-10 bg-neutral-900/50">
        {yesClicked ? (
          <div className="text-center flex flex-col items-center justify-center h-full py-20" style={{ minHeight: "80vh" }}>
            <h1 className="text-6xl font-bold font-caveat">YAY! You're my Valentine!</h1>
            <p className="mt-8 text-2xl">Here are some adventures for us:</p>
            <ul className="mt-4 space-y-4 text-xl">
              <li>
                <a href="https://www.roblox.com/games/18334179599/Chained" className="text-pink-300 hover:underline">
                  Adventure 1
                </a>
              </li>
              <li>
                <a href="https://www.roblox.com/games/17477960154/Draw-Switch" className="text-pink-300 hover:underline">
                  Adventure 2
                </a>
              </li>
              <li>
                <a href="https://www.roblox.com/games/136764190843219/Knockout" className="text-pink-300 hover:underline">
                  Adventure 3
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <ScrapbookContent />
            <ValentinePrompt />
          </>
        )}
      </main>

      <BackgroundBeams className="z-0" />
    </div>
  );
}