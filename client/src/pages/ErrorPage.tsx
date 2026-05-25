import React, { useEffect, useState } from "react";

// Framer Motion is used for animations
import { motion, AnimatePresence } from "framer-motion";

const ErrorPage: React.FC = () => {
  /*
    ===============================
    STAGES OF THE ANIMATION
    ===============================

    charging  -> electricity flows into speaker
    overload  -> speaker starts shaking/glowing
    explode   -> explosion effect
    dead      -> 404 text appears
  */

  const [stage, setStage] = useState<
    "charging" | "overload" | "explode" | "dead"
  >("charging");

  /*
    ===============================
    ANIMATION TIMELINE
    ===============================

    After 3s -> overload
    After 5.2s -> explode
    After 6.2s -> show 404 text
  */

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("overload"), 3000),
      setTimeout(() => setStage("explode"), 5200),
      setTimeout(() => setStage("dead"), 6200),
    ];

    // Cleanup timers when component unmounts
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    /*
      ===============================
      MAIN PAGE CONTAINER
      ===============================

      h-screen       -> full screen height
      overflow-hidden -> prevents particles from overflowing
      pt-16          -> pushes content downward
      bg-black       -> dark cinematic background
    */

    <div className="relative h-screen overflow-hidden pt-16 bg-black flex items-center justify-center text-white">
      {/* =========================================
          BACKGROUND GRADIENT
      ========================================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f172a_0%,#000_70%)]" />

      {/* =========================================
          ELECTRIC GRID BACKGROUND
      ========================================= */}

      <div className="absolute inset-0 opacity-20">
        <div className="grid-bg" />
      </div>

      {/* =========================================
          FLOATING ELECTRIC PARTICLES
      ========================================= */}

      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          /*
            Small glowing particle
          */

          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          /*
            Random starting positions
          */

          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + Math.random() * 200,
            opacity: 0,
          }}
          /*
            Animate upward infinitely
          */

          animate={{
            y: -100,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* =========================================
          ELECTRIC CABLE LINE
      ========================================= */}

      <motion.div
        className="absolute left-0 top-110 md:top-120 h-1 bg-linear-to-r from-red-700 via-yellow-700 to-blue-700"
        /*
          Starts with no width
        */

        initial={{ width: 0 }}
        /*
          Expands while charging
        */

        animate={{
          width: stage !== "dead" ? "50%" : "0%",
          opacity: stage === "explode" ? [1, 0.2, 1, 0] : 1,
        }}
        transition={{
          duration: 2,
        }}
      />

      {/* =========================================
          LIGHTNING EFFECTS
      ========================================= */}

      <AnimatePresence>
        {stage !== "dead" && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-cyan-400 text-3xl"
                /*
                  Lightning starts from left side
                */

                initial={{
                  opacity: 0,
                  x: -200,
                  y: -50 + i * 20,
                }}
                /*
                  Moves toward speaker
                */

                animate={{
                  opacity: [0, 1, 0],
                  x: 0,
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              >
                ⚡
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* =========================================
          MAIN CONTENT WRAPPER
      ========================================= */}

      <div className="relative flex flex-col items-center justify-center mt-40 md:mt-52">
        {/* =========================================
            404 TEXT
        ========================================= */}

        <AnimatePresence>
          {stage === "dead" && (
            <motion.div
              /*
                Fade + scale animation
              */

              initial={{
                opacity: 0,
                scale: 0.6,
                y: -50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                type: "spring",
              }}
              /*
                Positioned above speaker
              */

              className="absolute -top-26 md:-top-54 text-center z-50"
            >
              {/* 404 TITLE */}

              <motion.h1
                className="text-5xl md:text-[140px] font-black tracking-[10px]"
                /*
                  Glowing text animation
                */

                animate={{
                  textShadow: [
                    "0 0 10px #00ffff",
                    "0 0 30px #00ffff",
                    "0 0 10px #00ffff",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                404
              </motion.h1>

              {/* PAGE NOT FOUND */}

              <motion.p
                className="text-xl md:text-3xl font-light tracking-[4px] md:tracking-[8px] text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                PAGE NOT FOUND
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =========================================
            SPEAKER SECTION
        ========================================= */}

        <motion.div
          /*
            Speaker shakes during overload
            Speaker scales during explosion
          */

          animate={{
            rotate: stage === "overload" ? [0, -3, 3, -3, 3, 0] : 0,

            scale:
              stage === "explode"
                ? [1, 1.4, 0]
                : stage === "overload"
                  ? [1, 1.05, 1]
                  : 1,
          }}
          transition={{
            duration: 0.2,
            repeat: stage === "overload" ? Infinity : 0,
          }}
          className="relative"
        >
          {/* =========================================
              OUTER GLOW
          ========================================= */}

          <motion.div
            className="absolute inset-0 rounded-3xl blur-3xl"
            animate={{
              background:
                stage === "charging"
                  ? "rgba(34,211,238,0.3)"
                  : "rgba(255,0,0,0.6)",

              scale: stage === "overload" ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              repeat: stage === "overload" ? Infinity : 0,
            }}
          />

          {/* =========================================
              SPEAKER BODY
          ========================================= */}

          <div className="relative w-44 h-56 md:w-52 md:h-64 bg-linear-to-b from-zinc-800 to-black rounded-3xl border border-zinc-700 shadow-2xl overflow-hidden">
            {/* =====================================
                TOP SMALL SPEAKER
            ===================================== */}

            <motion.div
              className="absolute top-10 left-1/2 -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full border-10 border-zinc-700 bg-zinc-900"
              animate={{
                scale: stage !== "dead" ? [1, 1.05, 1] : 1,
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
              }}
            />

            {/* =====================================
                MAIN BASS SPEAKER
            ===================================== */}

            <motion.div
              className="absolute bottom-12 left-1/2 -translate-x-1/2 w-28 h-28 md:w-32 md:h-32 rounded-full border-14 border-zinc-700 bg-black flex items-center justify-center"
              /*
                Bass vibration animation
              */

              animate={{
                scale:
                  stage === "charging"
                    ? [1, 1.08, 1]
                    : stage === "overload"
                      ? [1, 1.2, 0.9, 1.3]
                      : 1,
              }}
              transition={{
                duration: 0.3,
                repeat: stage !== "dead" ? Infinity : 0,
              }}
            >
              {/* INNER BASS CORE */}

              <motion.div
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-linear-to-br from-zinc-700 to-zinc-900"
                /*
                  Glow changes based on stage
                */

                animate={{
                  boxShadow:
                    stage === "overload"
                      ? ["0 0 20px red", "0 0 60px orange", "0 0 20px red"]
                      : ["0 0 10px cyan", "0 0 30px cyan", "0 0 10px cyan"],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* =====================================
                ELECTRIC SURGES INSIDE SPEAKER
            ===================================== */}

            {stage !== "dead" &&
              [...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-cyan-400"
                  initial={{
                    opacity: 0,
                    x: 120,
                    y: 160,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: 50 + Math.random() * 120,
                    y: 40 + Math.random() * 220,
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                >
                  ⚡
                </motion.div>
              ))}
          </div>

          {/* =========================================
              EXPLOSION RINGS
          ========================================= */}

          <AnimatePresence>
            {stage === "explode" && (
              <>
                {/* ORANGE RING */}

                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-orange-500"
                  initial={{
                    scale: 0,
                    opacity: 1,
                  }}
                  animate={{
                    scale: 4,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                />

                {/* RED RING */}

                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-red-500"
                  initial={{
                    scale: 0,
                    opacity: 1,
                  }}
                  animate={{
                    scale: 6,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1,
                  }}
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>

        {/* =========================================
            GO HOME BUTTON
        ========================================= */}

        <AnimatePresence>
          {stage === "dead" && (
            <motion.button
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px rgba(216,125,74,0.8)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                delay: 1,
              }}
              /*
                Redirects user to homepage
              */

              onClick={() => (window.location.href = "/")}
              className="mt-20 px-10 py-4 rounded-xl bg-[#D87D4A] text-[#FFFFFF] font-bold tracking-wider"
            >
              GO HOME
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* =========================================
          EXPLOSION SMOKE
      ========================================= */}

      <AnimatePresence>
        {stage === "explode" && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.7,
            }}
            exit={{
              opacity: 0,
            }}
            className="absolute w-125 h-125 rounded-full bg-gray-500 blur-[120px]"
          />
        )}
      </AnimatePresence>

      {/* =========================================
          CUSTOM CSS
      ========================================= */}

      <style>{`

        /*
          Electric moving grid
        */

        .grid-bg {
          width: 100%;
          height: 100%;

          background-image:
            linear-gradient(
              rgba(0,255,255,0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(0,255,255,0.08) 1px,
              transparent 1px
            );

          background-size: 40px 40px;

          animation: moveGrid 8s linear infinite;
        }

        /*
          Grid movement animation
        */

        @keyframes moveGrid {
          from {
            transform: translateY(0px);
          }

          to {
            transform: translateY(40px);
          }
        }

      `}</style>
    </div>
  );
};

export default ErrorPage;
