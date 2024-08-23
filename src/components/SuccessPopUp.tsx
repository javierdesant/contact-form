import { FunctionComponent } from "react";
import successIcon from "../assets/images/icon-success-check.svg"

interface SuccessPopUpProps {
    
}
 
const SuccessPopUp: FunctionComponent<SuccessPopUpProps> = () => {
    return ( 
        <div className="fixed top-0 justify-center items-center p-5 m-5 bg-neutral-darker-grey text-white font-karla rounded-xl 
            animate-in slide-in-from-top duration-300">
            <div className="flex">
                <img src={successIcon} className="mr-2"/>
                <h1 className="text-lg font-bold">Message Sent!</h1>
            </div>
            <p className="">Thanks for completing the form. We'll be in touch soon!</p>
        </div>
     );
}
 
export default SuccessPopUp;