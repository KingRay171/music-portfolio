
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaby, faGifts, faSleigh, faStar } from '@fortawesome/free-solid-svg-icons'
import React from "react";


export default function WinterMens() {


    const projects = [
        {
          title: "Santa, Bring my Baby Back",
          link: "https://www.jwpepper.com/Santa%2C-Bring-My-Baby-Back/10511006.item",
          description: ["arr: Ryon O'Connell", "Piano: Ross Rawlings"],
          icon: <FontAwesomeIcon icon={faBaby} size="3x" />,
        },
        {
          title: "You're a Mean One, Mr. Grinch",
          link: "https://www.jwpepper.com/You%27re-a-Mean-One%2C-Mr.-Grinch/3262102.item",
          description:["arr: Jeff Funk", "Piano: Ross Rawlings", "Soloist: Ethan Wentworth"],
          icon: <FontAwesomeIcon icon={faGifts} size="3x"/>,
        },
        {
          title: "A Holly Jolly Christmas",
          link: "https://www.jwpepper.com/A-Holly-Jolly-Christmas/10510983.item",
          description:["arr: Greg Gilpin", "Piano: Ross Rawlings"],
          icon: <FontAwesomeIcon icon={faSleigh} size="3x"/>,
        },
        {
          title: "Do You Hear What I Hear?",
          link: "https://www.jwpepper.com/Do-You-Hear-What-I-Hear/11303227F.item",
          description:["arr: Harry Simeone", "Piano: Aaron Jung"],
          icon: <FontAwesomeIcon icon={faStar} size="3x"/>,
        }
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
                    <h2 className="tracking-widest text-lg title-font font-medium mb-1 ">
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