import { FunctionComponent } from "react";

interface FormProps {
    
}
 
const Form: FunctionComponent<FormProps> = () => {
    return ( 
        <form 
            className="w-full md:max-w-[800px] max-w-[345px] px-10 py-5 text-gray-900 font-karla bg-white rounded-xl shadow"
        >
            <h1 className="text-3xl font-bold m-4 ml-0">Contact Us</h1>

            <div className="grid grid-flow-row grid-rows-9 md:grid-rows-7 grid-cols-2 gap-5">
                <div className="flex grow flex-col col-span-2 md:col-span-1 space-y-2">
                    <label htmlFor="first-name" className="text-sm">First Name<span className=" text-emerald-700">&nbsp;&nbsp;*</span></label>
                    <input
                        id="first-name"
                        type="text"
                        className="flex grow border border-gray-500 p-2 rounded-md"
                    />
                    {/* This field is required */}
                </div>

                <div className="flex grow flex-col col-span-2 md:col-span-1 space-y-2">
                    <label htmlFor="last-name" className="text-sm">Last Name<span className=" text-emerald-700">&nbsp;&nbsp;*</span></label>
                    <input
                        id="last-name"
                        type="text"
                        className="flex grow border border-gray-500 p-2 rounded-md"
                    />
                    {/* This field is required */}
                </div>

                <div className="flex grow flex-col col-span-2 space-y-2">
                    <label htmlFor="email" className="text-sm">Email Address<span className=" text-emerald-700">&nbsp;&nbsp;*</span></label>
                    <input
                        id="email"
                        type="email"
                        className="flex grow border border-gray-500 p-2 rounded-md col-span-2"
                    />
                    {/* Please enter a valid email address
                        This field is required */}
                </div>

                <div className="flex grow flex-col row-span-2 col-span-2 md:row-span-1 space-y-2">
                    <span className="text-sm">Query Type<span className=" text-emerald-700">&nbsp;&nbsp;*</span></span>
                    <div className="flex flex-col md:flex-row grow gap-y-5 md:gap-x-5 md:gap-y-0">
                        <div className="flex grow items-center border border-gray-500 p-2 rounded-md">
                            <input 
                                id="general-enquiry"
                                type="radio" 
                                name="query" 
                                className="flex grow-0 items-center text-base mx-4"
                            />
                            <label htmlFor="general-enquiry" className="text-sm">General Enquiry</label>
                        </div>
                        <div className="flex grow items-center border border-gray-500 p-2 rounded-md">
                            <input 
                                id="support-request"
                                type="radio" 
                                name="query" 
                                className="flex grow-0 items-center text-base mx-4"
                            />
                            <label htmlFor="support-request" className="text-sm">Support Request</label>
                        </div>
                    </div>                   
                </div>

                <div className="flex grow flex-col col-span-2 row-span-3 md:row-span-2 space-y-2">
                    <label htmlFor="message" className="text-sm">Message<span className=" text-emerald-700">&nbsp;&nbsp;*</span></label>
                    <input
                        id="message"
                        type="text"
                        className="flex grow border border-gray-500 p-2 rounded-md col-span-2"
                    />
                    {/* This field is required */}
                </div>
                <div className="flex grow col-span-2 items-center">
                    <input
                        id="consent"
                        type="checkbox"
                        className="flex grow-0 mr-4 border border-gray-500 p-2 rounded-md col-span-2"
                    />
                    <label htmlFor="consent" className="text-sm">I consent to being contacted by the team<span className=" text-emerald-700">&nbsp;&nbsp;*</span></label>
                    {/* To submit this form, please consent to being contacted */}
                </div>
                <div className="flex grow h-min col-span-2">
                    <button type="submit" className="flex grow items-center justify-center p-4 font-bold bg-emerald-700 text-white rounded-lg">Submit</button>
                        {/* Message Sent!
                            Thanks for completing the form. We'll be in touch soon!  */}
                </div>
            </div>
        </form>
     );
}
 
export default Form;