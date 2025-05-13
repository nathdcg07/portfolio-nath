"use client";

import { useEffect, useState, useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { initParticlesEngine } from "@tsparticles/react";

const Hero = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Inicializa el engine de partículas
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  return (
    ready && (
      <section
        id="hero"
        className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      >
        <Particles
          id="tsparticles"
          options={{
            background: { color: { value: "#000000" } },
            fpsLimit: 60,
            particles: {
              number: { value: 50 },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: { value: 0.5 },
              size: { value: { min: 1, max: 5 } },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                outModes: { default: "bounce" },
              },
              links: {
                enable: true,
                color: "#ffffff",
                distance: 150,
                opacity: 0.3,
                width: 1,
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />
        <div className="z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Hola, {' '} 
            <span className="font-bold text-pink-300">
                        soy Nath
                    </span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-300">
            Desarrolladora fullstack, amante de los gradientes y la estética
          </p>
          <a
            href="#projects"
            className="inline-block mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Ver proyectos
          </a>
        </div>
      </section>
    )
  );
};

export default Hero;
