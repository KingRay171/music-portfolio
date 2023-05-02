import WinterCC from "./winter-cc"
import WinterMens from "./winter-mens"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'

export default function WinterPerformances(){
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
              <div className="flex flex-col w-full mb-20">
                <FontAwesomeIcon icon={faSnowflake} size="3x"/>
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                  Winter Performances
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  December 2022
                </p>
              </div>

              <WinterCC />
              <WinterMens />
            </div>


    </section>
    )
}