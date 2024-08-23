import { FunctionComponent, useState } from "react"
import { DevTool } from "@hookform/devtools"
import { FieldErrors, useForm } from "react-hook-form"
import SuccessPopUp from "./SuccessPopUp"

interface FormProps {}

interface FormValues {
    name: {
        last: string
        first: string
    }
    email: string
    query: string
    formMessage: string
    consent: boolean
}

const Form: FunctionComponent<FormProps> = () => {

    const form = useForm<FormValues>({
        defaultValues: {
            name: {
                last: "",
                first: ""
            },
            email: "",
            query: "",
            formMessage: "",
            consent: false
        }
    })

    const { register, control, handleSubmit, formState } = form
    const { errors } = formState

    const [showSuccess, setShowSuccess] = useState(false)

    const onSubmit = () => {
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000)
    }

    const onError = (errors: FieldErrors<FormValues>) => {
        errors.name?.first?.message && console.log("First Name Error", errors.name.first.message)   // TEST
        errors.name?.last?.message && console.log("Last Name Error", errors.name.last.message)      // TEST
        errors.email?.message && console.log("Email Error", errors.email.message)                   // TEST
        errors.query?.message && console.log("Query Error", errors.query.message)                   // TEST
        errors.formMessage?.message && console.log("Message Error", errors.formMessage.message)     // TEST
    }

    return ( 
    <>
        {showSuccess && <SuccessPopUp />}

        <form 
            className="w-full md:max-w-[800px] max-w-[345px] px-10 py-5 text-neutral-darker-grey font-karla bg-white rounded-xl shadow"
            onSubmit={handleSubmit(onSubmit, onError)}
            noValidate
        >
            <h1 className="text-3xl font-bold m-4 ml-0">Contact Us</h1>

            <div className="grid grid-flow-row grid-rows-8 md:grid-rows-5 grid-cols-2 gap-5">
                <div className="flex grow flex-col col-span-2 md:col-span-1 space-y-2">
                    <label htmlFor="first-name" className="text-sm">First Name<span className=" text-emerald-700">&nbsp;&nbsp;*</span></label>
                    <input
                        id="first-name"
                        type="text"
                        className={`flex grow border ${errors.name?.first ? 'border-red-500' : 'border-gray-500'} p-2 rounded-md`}
                        {...register("name.first", 
                            { required: "This field is required" }
                        )}
                    />
                    <span className="text-sm text-primary-red">{errors.name?.first?.message}</span>
                </div>

                <div className="flex grow flex-col col-span-2 md:col-span-1 space-y-2">
                    <label htmlFor="last-name" className="text-sm">Last Name<span className=" text-emerald-700">&nbsp;&nbsp;*</span></label>
                    <input
                        id="last-name"
                        type="text"
                        className={`flex grow border ${errors.name?.last ? 'border-red-500' : 'border-gray-500'} p-2 rounded-md`}
                        {...register("name.last",
                            { required: "This field is required" }
                        )}
                    />
                    <span className="text-sm text-primary-red">{errors.name?.last?.message}</span>
                </div>

                <div className="flex grow flex-col col-span-2 space-y-2">
                    <label htmlFor="email" className="text-sm">Email Address<span className=" text-emerald-700">&nbsp;&nbsp;*</span></label>
                    <input
                        id="email"
                        type="email"
                        className={`flex grow border ${errors.email ? 'border-red-500' : 'border-gray-500'} p-2 rounded-md`}
                        {...register("email",
                            { required: "This field is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Please enter a valid email address"
                                }
                             }
                        )}
                    />
                    <span className="text-sm text-primary-red">{errors.email?.message}</span>
                </div>

                <div className="flex grow flex-col row-span-2 col-span-2 md:row-span-1 space-y-2">
                    <span className="text-sm">Query Type<span className=" text-emerald-700">&nbsp;&nbsp;*</span></span>
                    <div className="flex flex-col md:flex-row grow gap-y-5 md:gap-x-5 md:gap-y-0">
                        <div className="flex grow items-center border border-gray-500 p-2 rounded-md">
                            <input 
                                id="general-enquiry"
                                type="radio" 
                                className="flex grow-0 items-center text-base mx-4"
                                {...register("query",
                                    { required: "Please select a query type" }
                                )}
                            />
                            <label htmlFor="general-enquiry" className="text-sm">General Enquiry</label>
                        </div>
                        <div className="flex grow items-center border border-gray-500 p-2 rounded-md">
                            <input 
                                id="support-request"
                                type="radio" 
                                className="flex grow-0 items-center text-base mx-4"
                                {...register("query",
                                    { required: "Please select a query type" }
                                )}
                            />
                            <label htmlFor="support-request" className="text-sm">Support Request</label>
                        </div>
                    </div>
                    <span className="text-sm text-primary-red">{errors.query?.message}</span>
                </div>

                <div className="flex grow flex-col col-span-2 row-span-3 md:row-span-2 space-y-2">
                    <label htmlFor="formMessage" className="text-sm">Message<span className=" text-emerald-700">&nbsp;&nbsp;*</span></label>
                    <input
                        id="formMessage"
                        type="text"
                        className={`flex grow border ${errors.formMessage ? 'border-red-500' : 'border-gray-500'} p-2 rounded-md`}
                        {...register("formMessage", 
                            { required: "This field is required" }
                        )}
                    />
                    <span className="text-sm text-primary-red">{errors.formMessage?.message}</span>
                </div>

                <div className="flex flex-col grow col-span-2">
                    <div className="flex items-center">
                        <input
                            id="consent"
                            type="checkbox"
                            className="flex grow-0 mr-4 border border-gray-500 p-2 rounded-md"
                            {...register("consent", 
                                { required: "To submit this form, please consent to being contacted" }
                            )}
                            />
                        <label htmlFor="consent" className="text-sm">I consent to being contacted by the team<span className=" text-emerald-700">&nbsp;&nbsp;*</span></label>
                    </div>
                    <span className="text-sm col-span-2 text-primary-red my-2">{errors.consent?.message}</span>
                </div>

                <div className="flex grow h-min col-span-2 mt-4">
                    <button 
                        type="submit" className="flex grow items-center justify-center p-4 font-bold bg-primary-medium-green text-white rounded-lg">Submit</button>
                </div>
            </div>
        </form>

        <DevTool control={control}/>
    </>
    );
}
 
export default Form;