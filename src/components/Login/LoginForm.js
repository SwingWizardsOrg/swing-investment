





import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../Models/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "../Models/form";
import Input from '../Models/input';



import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


// check inputs privide error messge
const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
});


const LoginForm = () => {





    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            username: "",
            password: "",
        }
    });



    // post the details to the server
    const onSubmit = (data) => {
        console.log(data);


    };

    return (
        // form with react hook form for validation of inputs,manage states and errors 
        <FormProvider {...form}>
            <div className='group'>
                <Form >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className=" ">username</FormLabel>
                                    <div className='bg-[#4472C4]/10 p-[7px] rounded-md'>
                                        <FormControl className="bg-[#4472C4]/40">
                                            <Input placeholder="username"  {...field} className=" text-slate-200 font-medium leading-10 tracking-wide" />
                                        </FormControl>
                                    </div>
                                    <FormMessage className=" text-rose-900 tracking-wide" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <div className='bg-[#4472C4]/10 p-[7px] rounded-md'>
                                        <FormControl className="bg-[#4472C4]/40">
                                            <Input placeholder="password"  {...field} className=" text-black" />
                                        </FormControl>
                                    </div>
                                    <FormMessage className=" text-rose-900 tracking-wide" />
                                </FormItem>
                            )}
                        />
                        <div className=' w-full  flex justify-center'>
                            <Button disabled={form.formState.isLoading} type="submit" className=" group-hover:bg-gradient-to-r from-blue-600/80 transition-all delay-300 duration-500">Log In</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </FormProvider>
    );
}

export default LoginForm;

