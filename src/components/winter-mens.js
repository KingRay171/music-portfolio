
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHollyBerry, faMenorah, faMoon } from '@fortawesome/free-solid-svg-icons'
import React from "react";


export default function WinterMens() {


    const projects = [
        {
          title: "Santa, Bring my Baby Back",
          link: "https://www.jwpepper.com/Chante%2C-C%27est-Noel%21/11366141.item#.ZFBQmc7MK3A",
          description: ["arr: Ryan O'Connell", "Piano: Ross Rawlings"],
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
          link: "React and Firebase",
          description:["arr: Andy Beck", "Piano: Eli Wasserman", "Cello: Hannah Choi"],
          icon: <FontAwesomeIcon icon={faMoon} size="3x"/>,
        },
      ];



  return (
          <div>
            <h1 className="title-font text-lg font-medium text-white mb-3 ">Men's Choir</h1>
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-11/12 p-2">
                <div className="flex relative">


                  <div className="px-4 py-4 relative z-10 w-full border-4 border-gray-800 bg-gray-900 group i-am-parent">
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

  );
}