import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import Image from "next/image";

const Rules = ({ setRules }) => {
    return (
        <>
            <div className="z-20 fixed shadow bg-white mx-auto rounded"
            style={{left:0, right:0, top:"15%",  maxWidth:"23rem"}}
            >
                
                <div className="flex justify-between w-full my-4">
                    <p className="uppercase pl-4 text-2xl text-rules font-semibold">Rules</p>
                    <FontAwesomeIcon 
                    icon={faXmark} 
                    className="text-2xl pr-4 text-gray-300 cursor-pointer" 
                    onClick={() => setRules(false)}
                    />
                </div>

                <div
                className="w-fit mx-auto mb-8"
                >
                    <Image 
                    src="/images/image-rules-bonus.svg" width={300} height={300} 
                    />
                </div>
            </div>
        </>
    );
}
 
export default Rules;