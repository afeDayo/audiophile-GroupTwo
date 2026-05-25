import React from "react";

const RollerLoader: React.FC = () => {
  return (
    /*
      =========================================
      MAIN FULLSCREEN CONTAINER
      =========================================

      flex                -> enables flexbox
      items-center        -> vertical center
      justify-center      -> horizontal center
      min-h-screen        -> full screen height
      bg-black            -> black background
    */

    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* =====================================
          LOADER ELEMENT
      ===================================== */}

      <span className="loader"></span>

      {/* =====================================
          CUSTOM CSS
      ===================================== */}

      <style>{`

        /*
          =====================================
          LOADER STYLING
          =====================================

          width & height:
          controls loader size

          background-image:
          creates multiple vertical bars

          #F1F1F1:
          inactive bars

          #D87D4A:
          active animated bar
        */

        .loader {
          position: relative;

          width: 85px;
          height: 50px;

          background-repeat: no-repeat;

          /*
            Multiple bar backgrounds
          */

          background-image:
            linear-gradient(#F1F1F1 50px, transparent 0),
            linear-gradient(#F1F1F1 50px, transparent 0),
            linear-gradient(#F1F1F1 50px, transparent 0),
            linear-gradient(#F1F1F1 50px, transparent 0),
            linear-gradient(#F1F1F1 50px, transparent 0),
            linear-gradient(#F1F1F1 50px, transparent 0);

          /*
            Positions of each bar
          */

          background-position:
            0px center,
            15px center,
            30px center,
            45px center,
            60px center,
            75px center;

          /*
            Animation

            rikSpikeRoll -> animation name
            0.65s        -> speed
            linear       -> smooth same speed
            infinite     -> never stops
            alternate    -> reverses naturally
          */

          animation: rikSpikeRoll 0.65s linear infinite alternate;
        }

        /*
          =====================================
          ANIMATION
          =====================================

          Each stage:
          - one bar becomes orange
          - others stay white
          - heights change
        */

        @keyframes rikSpikeRoll {

          0% {
            background-size:
              10px 3px,
              10px 3px,
              10px 3px,
              10px 3px,
              10px 3px,
              10px 3px;

            background-image:
              linear-gradient(#D87D4A 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0);
          }

          16% {
            background-size:
              10px 50px,
              10px 3px,
              10px 3px,
              10px 3px,
              10px 3px,
              10px 3px;

            background-image:
              linear-gradient(#D87D4A 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0);
          }

          33% {
            background-size:
              10px 30px,
              10px 50px,
              10px 3px,
              10px 3px,
              10px 3px,
              10px 3px;

            background-image:
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#D87D4A 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0);
          }

          50% {
            background-size:
              10px 10px,
              10px 30px,
              10px 50px,
              10px 3px,
              10px 3px,
              10px 3px;

            background-image:
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#D87D4A 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0);
          }

          66% {
            background-size:
              10px 3px,
              10px 10px,
              10px 30px,
              10px 50px,
              10px 3px,
              10px 3px;

            background-image:
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#D87D4A 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0);
          }

          83% {
            background-size:
              10px 3px,
              10px 3px,
              10px 10px,
              10px 30px,
              10px 50px,
              10px 3px;

            background-image:
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#D87D4A 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0);
          }

          100% {
            background-size:
              10px 3px,
              10px 3px,
              10px 3px,
              10px 10px,
              10px 30px,
              10px 50px;

            background-image:
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#F1F1F1 50px, transparent 0),
              linear-gradient(#D87D4A 50px, transparent 0);
          }
        }

      `}</style>
    </div>
  );
};

export default RollerLoader;