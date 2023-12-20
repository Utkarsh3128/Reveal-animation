import { useRef } from "react";
import "./App.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
import image from "../src/assets/images/image.jpg";
// import bg from "../src/assets/images/img.jpg";

function App() {
  const reference = useRef(null);
  const isInView = useInView(reference);

  const animationControl = useAnimation();
  const slideControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControl.start("show");
      slideControl.start("show");
    }
  }, [isInView]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          fontSize: "50px",
          height: "100vh",
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          style={{
            overflow: "hidden",
          }}
        >
          Hello Everyone
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 150,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeIn",
          }}
        >
          <img src={image} width={400} height={600} />
        </motion.div>
      </div>
      <div
        style={{
          display: "grid",
          placeContent: "center",
          height: "100vh",
          fontSize: "40px",
        }}
      >
        <div
          ref={reference}
          style={{
            position: "relative",
            overflow: "hidden",
            width: "fit-content | 100%",
          }}
        >
          <motion.div
            variants={{
              hide: {
                opacity: 0,
                y: 75,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hide"
            animate={slideControl}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
          >
            Welcome to our new Food site
          </motion.div>
          <motion.div
            variants={{
              hide: {
                left: 0,
              },
              show: {
                left: "100%",
              },
            }}
            initial="hide"
            animate={slideControl}
            transition={{
              duration: 0.5,
              ease: "easeIn",
            }}
            style={{
              position: "absolute",
              top: 4,
              bottom: 4,
              right: 0,
              left: 0,
              background: "red",
              zIndex: 20,
            }}
          ></motion.div>
        </div>
      </div>
    </>
  );
}

export default App;
