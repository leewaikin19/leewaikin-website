import '../main.css';
import React from 'react';
import * as T from '../template.tsx';


function Contact(props: React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    document.title = "Contact Me - Lee Wai Kin";
    // TODO handle email logic
    return (
        <>
            <T.Section>
                <T.Title>
                    Contact Me
                </T.Title>
                <T.SectionContent>
                    <form className="w-1/2 max-w-[300px] text-xl">
                        <div className="">
                            <label className="w-fullblock text-3xl text-white ">
                                Your Email
                            </label>
                            <div className="mt-2 flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 outline-black has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-accent1">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="example@domain.com"
                                    className="block min-w-0 grow py-1.5 pl-1 pr-3 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0"
                                />
                            </div>
                        </div>
                        <div className="mt-10">
                            <label className="block text-3xl text-white ">
                                Inquiry
                            </label>
                            <textarea
                                id="inquiry"
                                placeholder="Enter text here"
                                className="mt-2 block min-w-0 grow py-1.5 px-3 min-h-[200px] w-full rounded-md text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0"
                            />
                        </div>
                        <div className="mt-10">
                            <T.Button className="place-items-center mr-0"> Send </T.Button>
                        </div>
                        <div className="mt-10"> (Page still in development) </div>
                    </form>
                </T.SectionContent>
            </T.Section>
        </>

    );
}

export default Contact;