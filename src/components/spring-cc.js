
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faFaceGrinHearts, faHandsPraying, faRing, faDoorOpen} from "@fortawesome/free-solid-svg-icons"
import React from "react";


export default function SpringCC() {


    const projects = [
        {
          title: "Come to Me, O My Love",
          link: "https://www.jwpepper.com/Come-to-Me%2C-O-My-Love/1718097.item",
          description: ["By: Allan Robert Petker", "Piano: Aaron Jung"],
          icon: <FontAwesomeIcon icon={faFaceGrinHearts} size="3x" />,
        },
        {
          title: "Kyrie",
          link: "https://www.jwpepper.com/Kyrie/1639657.item",
          description:["By: Andrea Klouse", "Piano: Aaron Jung"],
          icon: <FontAwesomeIcon icon={faHandsPraying} size="3x"/>,
        },
        {
          title: "A Little Pretty Bonnie Lass",
          link: "https://www.jwpepper.com/A-Little-Pretty-Bonny-Lass/3701760.item",
          description:["arr: Russell Robinson"],
          icon: <FontAwesomeIcon icon={faHeart} size="3x"/>,
        },
        {
            title: "Come Live with Me and be My Love",
            link: "https://www.jwpepper.com/Come-Live-with-Me-and-Be-My-Love/10047066.item",
            description:["By: Greg Gilpin", "Piano: Aaron Jung"],
            icon: <FontAwesomeIcon icon={faRing} size="3x"/>,
          },
          {
            title: "Shut De Do",
            link: "https://www.jwpepper.com/Shut-De-Do/10305351.item",
            description:["arr: Tom Fettke", "Piano: Aaron Jung", "Soloists: Abdullah Khan, Mekaal Ali, Victoria Okon"],
            icon: <FontAwesomeIcon icon={faDoorOpen} size="3x"/>,
          },
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
                    <h2 className="tracking-widest text-lg title-font font-medium mb-1 ">
                      {project.icon}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3 opacity-0 i-am-child group-hover:opacity-100 ">
                      {project.title}
                    </h1>
                    {project.description.map((item) => (
                      <p className="leading-relaxed opacity-0 i-am-child group-hover:opacity-100 ">{item}</p>
                    ))}

                  </div>
                </div>
              </a>
            ))}
            </div>
            </main>
  );
}