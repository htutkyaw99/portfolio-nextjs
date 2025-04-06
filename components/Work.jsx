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
          <div
            key={project.title}
            className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-gray-900 text-white hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            {/* Project Image */}
            <div className="relative w-full h-48">
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
            <div className="p-5 ">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-300">
                  {project.title}
                </h2>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-8 h-8 text-white hover:border-white hover:border-2 rounded-full"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <p className="text-gray-300 mt-3">{project.description}</p>

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
        target="_blank"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Watch more
      </motion.a>
    </motion.div>
  );
};

export default Work;
