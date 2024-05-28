// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import Contact from "../components/Contact";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full relative">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 relative">
        <div className="text-center flex flex-col sm:justify-between md:justify-between lg:justify-center xl:pt-40 xl:text-left h-full container mx-auto relative">
          {/* title and subtitle */}
          <div className="flex flex-col h-full justify-between lg:justify-center z-30">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1 z-30 mt-28 lg:mt-0 xl:mt-0"
            >
              ¡Nos preparamos
              <br /> {""}
              <span className="text-accent">para ti!</span>
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-28 lg:mb-10 xl:mb-16 z-30"
            >
              {/* Estamos construyendo el espacio ideal para ti! */}
              <Contact className="mt-20 z-40" />
            </motion.p>
          </div>

          {/* btn */}
          {/* <div className="flex justify-center xl:hidden relative z-30">
            <ProjectsBtn />
            <div className="relative w-[185px] h-[185px] flex"></div>
          </div> */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex z-30"
          >
            {/* <ProjectsBtn /> */}
            <div className="relative w-[185px] h-[185px] flex"></div>
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-full h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-mobile bg-cover bg-center lg:bg-desktop lg:bg-cover lg:bg-right l:bg-no-repeat sm:bg-mobile sm:bg-cover sm:bg-center sm:bg-no-repeat w-full h-full absolute translate-z-0"></div>
      </div>
    </div>
  );
};

export default Home;
