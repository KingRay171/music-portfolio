
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonPraying, faStarOfDavid, faCross, faCandyCane, faChurch, faBookBible} from '@fortawesome/free-solid-svg-icons'
import React from "react";


export default function WinterMC() {


    const projects = [
        {
          title: "Gloria",
          link: "https://www.jwpepper.com/Gloria/1435783.item",
          description: ["from “Heiligmesse” (1796) by: F. J. Haydn", "Edited by: Michael S. Woodman", "Piano: Ross Rawlings"],
          icon: <FontAwesomeIcon icon={faPersonPraying} size="3x" />,
        },
        {
          title: "Hark! The Herald Angels Sing",
          link: "https://www.jwpepper.com/Hark%21-The-Herald-Angels-Sing/10513797.item",
          description:["arr: Dan Forrest", "Piano: Aaron Jung, Sophia Cai"],
          icon: <FontAwesomeIcon icon={faCross} size="3x"/>,
        },
        {
          title: "Dai Di Di Dai",
          link: "https://www.jwpepper.com/Dai-di-di-Dai/10602877.item",
          description:["arr: Coreen Duffy"],
          icon: <FontAwesomeIcon icon={faStarOfDavid} size="3x"/>,
        },
        {
          title: "Somewhere In My Memory",
          link: "https://www.jwpepper.com/Somewhere-in-My-Memory/10595154.item",
          description:["arr: Mark Hayes", "Piano: Sophia Cai"],
          icon: <FontAwesomeIcon icon={faCandyCane} size="3x"/>,
        },
        {
            title: "Children, Go Where I Send Thee",
            link: "https://www.jwpepper.com/Children%2C-Go-Where-I-Send-Thee/11196169.item",
            description:["arr: Adam Podd", "Piano: Aaron Jung"],
            icon: <FontAwesomeIcon icon={faChurch} size="3x"/>,
          },
          {
            title: "Hallelujah",
            link: "https://www.jwpepper.com/Hallelujah-Chorus-%28from-_QUOTE_Messiah_QUOTE_%29/11337716F.item",
            description:["from \"Messiah\" with Symphonic Orchestra"],
            icon: <FontAwesomeIcon icon={faBookBible} size="3x"/>,
          }
      ];



  return (
    <main className='py-12'>
          <h1 className="title-font text-lg font-medium text-white mb-3 ">Mustang Chorale</h1>
          <div className="flex flex-wrap -m-4">

            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4">
                <div className="flex relative h-full">


                  <div className="px-4 py-4 relative z-10 w-full border-4 border-gray-800 bg-gray-900 group hover:border-indigo-500 hover:ring-2 hover:ring-indigo-900 transition-colors duration-200 ease-in-out i-am-parent">
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