
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkull, faWandMagicSparkles, faCross, faHandsClapping} from '@fortawesome/free-solid-svg-icons'
import React from "react";


export default function SpringMC() {


    const projects = [
        {
          title: "O Clap Your Hands",
          link: "https://www.jwpepper.com/O-Clap-Your-Hands/10346178.item",
          description: ["By: John Rutter", "Piano: Isaiah Shim"],
          icon: <FontAwesomeIcon icon={faHandsClapping} size="3x" />,
        },
        {
          title: "Rest",
          link: "https://www.jwpepper.com/Rest/4095725.item",
          description:["By: Ralph Vaughan Williams"],
          icon: <FontAwesomeIcon icon={faSkull} size="3x"/>,
        },
        {
          title: "Pure Imagination",
          link: "https://www.jwpepper.com/Pure-Imagination/10477008.item",
          description:["from \"Willy Wonka and the Chocolate Factory\"", "arr: Matthew D. Nielsen", "Piano: Justin Zhu"],
          icon: <FontAwesomeIcon icon={faWandMagicSparkles} size="3x"/>,
        },
        {
          title: "Ain't No Grave Can Hold My Body Down",
          link: "https://www.jwpepper.com/Ain%27t-No-Grave-Can-Hold-My-Body-Down/10020549.item",
          description:["arr: Paul Caldwell & Sean Ivory", "Piano, Isaiah Shim", "ASL Interpreters: Jadyn Kelly, Aruna Subramaniam"],
          icon: <FontAwesomeIcon icon={faCross} size="3x"/>,
        },
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