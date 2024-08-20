import React from "react";
import TitleText from "./TitleText";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const Education = () => {
  return (
    <div>
      <TitleText title="My Education" />
      <StickyScroll content={content} />
    </div>
  );
};

export default Education;

const content = [
  {
    title: "SSC in Computer Science",
    description:
      "IT drives innovation, enhances business operations, and shapes the digital landscape of our interconnected world.Information Technology (IT) is the use of computers, software, and networks to process, store, secure, and exchange electronic data. It encompasses a wide range of critical areas including:",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <a href="https://drive.google.com/drive/folders/1cja4LZN20GFabVCw_SKkPZK7x_T-CuWX?usp=sharing" target="_blank">SSC</a>
      </div>
    ),
  },
  {
    title: "Bachelor's in  Manufacturing Technology",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <a href="https://drive.google.com/drive/folders/1cja4LZN20GFabVCw_SKkPZK7x_T-CuWX?usp=sharing" target="_blank">B.Tech</a>
      </div>
    ),
  },
  {
    title: "Full Stack Developer-Udemy",
    description:
      "Proficient in Node.js, adept at orchestrating robust backend systems and crafting intricate APIs. Skilled in database architecture, ensuring optimization and data integrity. Expertise in cloud deployment, containerization, and seamless integration of front-end frameworks.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--green-500))] flex items-center justify-center text-white text-lg font-semibold">
        <a href="https://drive.google.com/drive/folders/1xd_rXaDoBA7pdG1tlEO0_Ie-HFyinvy9?usp=sharing" target="_blank">Certifications</a>
      </div>
    ),
  },
  {
    title: "Full Stack Developer-Besant Tech",
    description:
      "Proficient in Python, with expertise in engineering scalable backend architectures and developing RESTful APIs. Skilled in database design and optimization, ensuring robust data management. Experienced in deploying applications to cloud environments, utilizing containerization and orchestration tools.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--green-500))] flex items-center justify-center text-white text-lg font-semibold">
        <a href="https://drive.google.com/drive/folders/1xd_rXaDoBA7pdG1tlEO0_Ie-HFyinvy9?usp=sharing" target="_blank">Certifications</a>
      </div>
    ),
  },
];