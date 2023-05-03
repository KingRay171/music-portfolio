
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHollyBerry, faMenorah, faMoon} from "@fortawesome/free-solid-svg-icons"
import React from "react";


export default function WinterCC() {


    const projects = [
        {
          title: "Chante, C'est Noel!",
          link: "https://www.jwpepper.com/Chante%2C-C%27est-Noel%21/11366141.item#.ZFBQmc7MK3A",
          description: ["arr: Christi Cary Miller", "Piano: Eli Wasserman"],
          icon: <FontAwesomeIcon icon={faHollyBerry} size="3x" />,
        },
        {
          title: "Hanerot Halalu",
          link: "https://www.jwpepper.com/Hanerot-Halalu/10089785.item#.ZFBQ8s7MK3A",
          description:["arr: Becki Slagle Mayo", "Piano: Ross Rawlings"],
          icon: <FontAwesomeIcon icon={faMenorah} size="3x"/>,
        },
        {
          title: "Under Winter Moon",
          link: "https://www.jwpepper.com/Under-Winter-Moon/10355972.item#.ZFBn-c7MK3A",
          description:["arr: Andy Beck", "Piano: Eli Wasserman", "Cello: Hannah Choi"],
          icon: <FontAwesomeIcon icon={faMoon} size="3x"/>,
        }
      ];



  return (
    <main className="py-14">
          <h1 className="title-font text-lg font-medium text-white mb-4">Concert Choir</h1>
          <div className="flex flex-wrap -m-4">

            {projects.map((project) => (
              <a
                href={project.link}
                className="sm:w-1/2 w-100 p-4">

                <div className="flex relative h-full">
                  <div className="px-4 py-4 relative z-10 w-full border-4 border-gray-800 bg-gray-900 hover:border-indigo-500 hover:ring-2 hover:ring-indigo-900 transition-colors duration-200 ease-in-out group i-am-parent">
                    <h2 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1 ">
                      {project.icon}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3 opacity-0 i-am-child group-hover:opacity-100 ">
                      {project.title}
                    </h1>
                    {project.description.map((item) => (
                      <p className="leading-relaxed opacity-0 i-am-child group-hover:opacity-100">{item}</p>
                    ))}

                  </div>
                </div>
              </a>
            ))}
            </div>
            </main>
  );
}