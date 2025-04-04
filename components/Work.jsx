import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Take a look at my latest web projects, crafted with care and attention
        to detail.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
      >
        {workData.map((project, index) => (
          // <motion.div
          //   whileHover={{ scale: 1.05 }}
          //   transition={{ duration: 0.3 }}
          //   key={index}
          //   className="aspect-video bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          //   style={{
          //     backgroundImage: `url(${project.bgImage})`,
          //   }}
          // >
          //   <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
          //     <div>
          //       <h2 className="font-semibold">{project.title}</h2>
          //       <p className="text-sm text-gray-700">{project.description}</p>
          //     </div>
          //     <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
          //       <Image src={assets.send_icon} alt="send icon" className="w-5" />
          //     </div>
          //   </div>
          // </motion.div>
          <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-gray-900 text-white hover:shadow-2xl transition-transform transform hover:scale-105">
            {/* Project Image */}
            <div key={project.title} className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-t-xl"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-300">
                {project.title}
              </h2>
              <p className="text-gray-300 mt-2">{project.description}</p>

              {/* Tech Stack */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-gray-800 text-sky-500 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="https://github.com/htutkyaw99"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Watch more
      </motion.a>
    </motion.div>
  );
};

export default Work;
