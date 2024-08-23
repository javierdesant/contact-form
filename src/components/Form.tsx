import { FunctionComponent, useState } from "react"
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

    const { register, handleSubmit, formState } = form
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
            className="w-full md:max-w-[600px] max-w-[345px] px-10 py-5 text-neutral-darker-grey bg-white rounded-xl shadow"
            onSubmit={handleSubmit(onSubmit, onError)}
            noValidate
        >
            <h1 className="text-3xl font-bold m-4 ml-0">Contact Us</h1>

            <div className="flex flex-wrap gap-5">
                <div className="flex basis-full md:basis-[48%] flex-col space-y-2">
                    <label htmlFor="first-name" className="text-sm">First Name<span className=" text-primary-medium-green">&nbsp;&nbsp;*</span></label>
                    <input
                        id="first-name"
                        type="text"
                        className={`${errors.name?.first ? 'border-primary-red' : ''}`}
                        {...register("name.first", 
                            { required: "This field is required" }
                        )}
                    />
                    <span className="text-sm text-primary-red">{errors.name?.first?.message}</span>
                </div>

                <div className="flex basis-full md:basis-[48%] flex-col space-y-2">
                    <label htmlFor="last-name" className="text-sm">Last Name<span className=" text-primary-medium-green">&nbsp;&nbsp;*</span></label>
                    <input
                        id="last-name"
                        type="text"
                        className={`${errors.name?.last ? 'border-primary-red' : ''}`}
                        {...register("name.last",
                            { required: "This field is required" }
                        )}
                    />
                    <span className="text-sm text-primary-red">{errors.name?.last?.message}</span>
                </div>

                <div className="flex basis-full flex-col space-y-2">
                    <label htmlFor="email" className="text-sm">Email Address<span className=" text-primary-medium-green">&nbsp;&nbsp;*</span></label>
                    <input
                        id="email"
                        type="email"
                        className={`${errors.email ? 'border-primary-red' : ''}`}
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


                 {/* FIXME */}
                 <div className="flex basis-full flex-col space-y-2">
                    <span className="text-sm">Query Type<span className=" text-primary-medium-green">&nbsp;&nbsp;*</span></span>
                    <div className="flex flex-col md:flex-row grow gap-y-5 md:gap-x-5 md:gap-y-0">
                        <div className="flex grow items-center border border-neutral-darker-grey 
                            hover:border-primary-medium-green focus:border-primary-medium-green p-2 rounded-md">
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
                        <div className="flex grow items-center border border-neutral-darker-grey 
                            hover:border-primary-medium-green focus:border-primary-medium-green p-2 rounded-md">
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

                

                <div className="flex basis-full flex-col space-y-2">
                    <label htmlFor="formMessage" className="text-sm">Message<span className=" text-primary-medium-green">&nbsp;&nbsp;*</span></label>
                    <textarea
                        id="formMessage"
                        className={`h-32 ${errors.formMessage ? 'border-primary-red' : ''}`}
                        {...register("formMessage", 
                            { required: "This field is required" }
                        )}
                    />
                    <span className="text-sm text-primary-red">{errors.formMessage?.message}</span>
                </div>

                <div className="flex flex-col basis-full">
                    <div className="flex items-center">
                        <input
                            id="consent"
                            type="checkbox"
                            {...register("consent", 
                                { required: "To submit this form, please consent to being contacted" }
                            )}
                            />
                        <label htmlFor="consent" className="ml-4 text-sm">I consent to being contacted by the team<span className=" text-primary-medium-green">&nbsp;&nbsp;*</span></label>
                    </div>
                    <span className="text-sm col-span-2 text-primary-red my-2">{errors.consent?.message}</span>
                </div>

                <div className="flex basis-full">
                    <button 
                        type="submit" // FIXME: Add a focus style
                        className="flex grow items-center justify-center p-4 font-bold bg-primary-medium-green text-white rounded-lg" 
                        >Submit</button>
                </div>
            </div>
        </form>
    </>
    );
}
 
export default Form;