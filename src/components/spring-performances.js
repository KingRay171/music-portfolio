import SpringCC from "./spring-cc"
import SpringMens from "./spring-mens"
import SpringMC from "./spring-mc"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

export default function SpringPerformances(){
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
              <div className="flex flex-col w-full mb-20">
                <FontAwesomeIcon icon={faLeaf} size="3x"/>
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                  Spring Performances
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  April 2023
                </p>
              </div>

              <SpringCC />
              <SpringMens />
              <SpringMC />
            </div>


    </section>
    )
}