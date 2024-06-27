import React from 'react';
import { Tilt } from 'react-tilt';
//import { motion } from "framer-motion";

import { motion, useAnimation } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { useInView } from "react-intersection-observer";




const ServiceCard = ({ index, title, icon }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const animationVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, delay: index * 0.5, type: "spring" }
    }
  };

  const noAnimationVariants = {
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Tilt className='w-full'>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={window.innerWidth < 640 ? noAnimationVariants : animationVariants}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt={title}
            className='w-40 h-40 object-contain'
          />
          <h3 className='text-white text-[15px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <h2 className={styles.sectionHeadText}>Get to Know Me ...</h2>
      </motion.div>
      <p className={`${styles.sectionSubText}`}>Domains I am interested in ...</p>

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {services.slice(0, 4).map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <br />

      <p className={`${styles.sectionSubText} `}>My Skills ...</p>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {services.slice(4, 8).map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <p className='mt-10 text-secondary text-[20px] max-w-5xl leading-[35px]'>
        I am currently pursuing a Master's degree in Computer Science at the Rochester Institute of Technology, driven by a passion for technology and a vision to create innovative solutions that address real-world problems. With a strong academic foundation and a GPA of 3.7, I have delved into diverse areas such as Machine Learning, Big Data Analytics, Cloud Computing, and Distributed Systems. This academic journey is complemented by a Bachelor's degree in Electrical and Electronics Engineering from the Manipal Institute of Technology.
      </p>

      <br />

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {services.slice(8, 12).map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <p className='mt-4 text-secondary text-[20px] max-w-5xl leading-[35px]'>
        As a software developer, I excel in building dynamic, responsive applications and optimizing backend systems. My proficiency spans a variety of programming languages including C++, Java, Python, and JavaScript/TypeScript, and I am adept with frameworks like Spring, Django, and ReactJS. I have a solid grasp of databases such as PostgreSQL and MongoDB, and am well-versed in cloud platforms including AWS, GCP, and Azure. My technical repertoire is further enriched by my experience with DevOps tools, web technologies, and various testing frameworks.
      </p>

      <br />

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {services.slice(12, 16).map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <p className='mt-4 text-secondary text-[20px] max-w-5xl leading-[35px]'>
        Beyond my technical skills, I am a dedicated problem solver with a keen interest in leveraging technology to drive efficiency and innovation. I thrive in collaborative environments, where I can contribute to and learn from a diverse team. My interests extend to areas like artificial intelligence, computational geometry, and the development of interactive and user-centric applications.
      </p>

      <br />

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {services.slice(16, 20).map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <br />

      <p className='font-bold mt-4 text-secondary text-[20px] max-w-5xl leading-[35px]'>
        I am actively seeking co-op and internship opportunities that will allow me to apply my skills, nurture my abilities, and further develop my expertise in a professional setting within the industry.
      </p>
    </>
  );
};
export default SectionWrapper(About, "about");
