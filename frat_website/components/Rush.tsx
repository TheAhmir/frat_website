import React from 'react'
import { motion } from "framer-motion"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler} from "react-hook-form"
import emailjs from '@emailjs/browser'

type Props = {}

type Inputs = {
    name: string
    phone: string
    email: string
    message: string
}

export default function Rush({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        //window.location.href = `mailto:123Ahmir@gmail?subject=New Rush:${formData.name}&body=Hi, my name is ${formData.name}, and I am interested in Rushing Delta Phi!%0D%0AHere is my contact info:%0D%0AEmail: ${formData.email}%0D%0APhone Number: ${formData.phone}%0D%0A%0D%0AOne More Thing: ${formData.message}.`
        emailjs.send("service_h0m8kaj","template_dossv9m",{
            from_name: formData.name,
            to_name: "Delta Phi Fraternity",
            message: `Hi, my name is ${formData.name}, \n \nI am interested in Rushing Delta Phi! Here is my contact info:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone Number: ${formData.phone}\n\nMessage: ${formData.message}.`,
            },
            'K3pQkeUkJe9UkHaKD')
    }

  return (
    <motion.div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1.5
    }}>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Rush
        </h3>
        <div className='pt-20 space-y-5 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>What you will find here</h4>
                <p className='text-sm'>
                Academic and scholastic achievements are the top priority of every college man and a vital element of The Three Pillars.  All members of the Delta Phi fraternity are expected to uphold the grade standards of our national organization as well as the expectations set forth by the College of William and Mary.
                </p>
                <p className='text-sm'>
                The Delta Phi Fraternity is proud of its academic excellence and the brotherhood aims to assure the academic success of the new members.
                </p>
                <p className='text-sm'>
                If interested in rush for Delta Phi or if you have questions about rush, contact us at <span className='font-semibold'>stelmohalloa@gmail.com</span>. Submit your name and email in the form below if you wish to be added to our current rush email list.
                </p>  

                <div>
            <div className='flex pt-5 items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#68BBE3] h-7 w-7 animate-pulse' />
                <p className='text-xl'>stelmohalloa@gmail.com</p>
            </div>
        </div> 
        
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('phone')} placeholder='Phone #' className='contactInput' type="tel" />
                </div>
                <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                <textarea {...register('message')} placeholder='Message' className='contactInput'/>
                <button className='bg-[#68BBE3] py-5 px-10 rounded-md text-black font-bold'
                type='submit'>Submit</button>
            </form>
        </div>
    

    </motion.div>
  )
}