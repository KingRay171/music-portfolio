
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonPraying, faHeartCrack, faSailboat, faChurch } from '@fortawesome/free-solid-svg-icons'
import React from "react";


export default function SpringMens() {


    const projects = [
        {
            title: "Gloria",
            link: "https://www.jwpepper.com/Gloria/3299691.item",
            description: ["By: Eugene Butler", "Piano: Isaiah Shim"],
            icon: <FontAwesomeIcon icon={faPersonPraying} size="3x" />,
          },
          {
            title: "Down in the Valley",
            link: "https://www.jwpepper.com/Down-in-the-Valley/1293828.item",
            description:["arr: George Mead", "Piano: Isaiah Shim"],
            icon: <FontAwesomeIcon icon={faHeartCrack} size="3x"/>,
          },
          {
            title: "The Wellerman",
            link: "https://www.jwpepper.com/The-Wellerman/11339530.item",
            description:["arr: Michael Ware", "Solo: Nishith Tripathi"],
            icon: <FontAwesomeIcon icon={faSailboat} size="3x"/>,
          },
          {
            title: "Ride the Chariot",
            link: "https://www.jwpepper.com/Ride-the-Chariot/568170.item",
            description:["arr: William Henry Smith", "Soloists: Maxwell Ryon, Ethan Wentworth"],
            icon: <FontAwesomeIcon icon={faChurch} size="3x"/>,
          },
      ];



  return (
    <main className='py-12'>
          <h1 className="title-font text-lg font-medium text-white mb-3 ">Men's Choir</h1>
          <div className="flex flex-wrap -m-4">

            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
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