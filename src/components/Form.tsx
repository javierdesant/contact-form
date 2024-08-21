import { FunctionComponent } from "react";

interface FormProps {
    
}
 
const Form: FunctionComponent<FormProps> = () => {
    return ( 
        <form 
            className="space-y-5 bg-white p-10 rounded-lg shadow"
        >
            <h1 className="text-3xl font-bold">Contact Us</h1>

            <div className="grid grid-flow-row grid-rows-7 grid-cols-2 gap-5">
                <div className="flex grow flex-col space-y-2 bg-red-500">
                    <label htmlFor="first-name" className="text-sm">First Name *</label>
                    <input
                        id="first-name"
                        type="text"
                        className="flex grow border border-black p-2 rounded-md"
                        // value={activity.name}
                        // onChange={handleChange}
                />
                    {/* This field is required */}
                </div>

                <div className="flex grow flex-col space-y-2 bg-blue-500">
                    <label htmlFor="last-name" className="text-sm">Last Name *</label>
                    <input
                        id="last-name"
                        type="text"
                        className="flex grow border border-black p-2 rounded-md"
                        // onEmptied={}
                        // onError={}
                        // value={activity.name}
                        // onChange={handleChange}
                    />
                    {/* This field is required */}
                </div>

                <div className="flex grow flex-col col-span-2 space-y-2 bg-green-500">
                    <label htmlFor="email" className="text-sm">Email Address *</label>
                    <input
                        id="email"
                        type="email"
                        className="flex grow border border-black p-2 rounded-md col-span-2"
                        // onEmptied={}
                        // onError={}
                        // value={activity.name}
                        // onChange={handleChange}
                    />
                    {/* Please enter a valid email address
                        This field is required */}
                </div>

                <div className="flex grow flex-col col-span-2 space-y-2 bg-yellow-500">
                    <span className="text-sm">Query Type *</span>
                    <div className="flex grow gap-x-2">
                        <div className="flex grow items-center border border-black p-2 rounded-md bg-indigo-500">
                            <input 
                                id="general-enquiry"
                                type="radio" 
                                name="query" 
                                className="flex grow row-span-1 items-center"
                                />
                            <label htmlFor="general-enquiry" className="text-sm">General Enquiry</label>
                        </div>
                        <div className="flex grow items-center border border-black p-2 rounded-md bg-violet-700">
                            <input 
                                id="support-request"
                                type="radio" 
                                name="query" 
                                className="flex grow row-span-1 items-center "
                                />
                            <label htmlFor="support-request" className="text-sm">Support Request</label>
                        </div>
                    </div>                   
                </div>

                <div className="flex grow flex-col col-span-2 row-span-2 space-y-2 bg-purple-500">
                    <label htmlFor="message" className="text-sm">Message *</label>
                    <input
                        id="message"
                        type="text"
                        className="flex grow border border-black p-2 rounded-md col-span-2"
                        // onEmptied={}
                        // onError={}
                        // value={activity.name}
                        // onChange={handleChange}
                    />
                    {/* This field is required */}
                </div>
                <div className="flex grow col-span-2 items-center bg-yellow-500">
                    <input
                        id="consent"
                        type="checkbox"
                        className="flex grow-0 mr-4 border border-black p-2 rounded-md col-span-2"
                        // onEmptied={}
                        // onError={}
                        // value={activity.name}
                        // onChange={handleChange}
                    />
                    <label htmlFor="consent" className="text-sm">I consent to being contacted by the team *</label>
                    {/* To submit this form, please consent to being contacted */}
                </div>
                <div className="flex grow col-span-2 py-2 bg-pink-500">
                    <button type="submit" className="flex bg-blue-500 text-white grow items-center justify-center rounded-md">Submit</button>
                </div>
            </div>
                {/* Message Sent!
                Thanks for completing the form. We'll be in touch soon!  */}
        </form>
     );
}
 
export default Form;