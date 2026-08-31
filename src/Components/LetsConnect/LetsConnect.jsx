import React from 'react'
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const LetsConnect = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_6q277do",
                "template_3gfuhxs",
                form.current,
                {
                    publicKey: "J09yeneXEIPC_IIsH",
                }
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.error("FAILED...", error);
                    alert("Failed to send message.");
                }
            );
    };

    return (
        <section id="LetsConnect" className=" mt-20 px-4 px-5">
            <div className="gap-8 rounded-2xl   p-6 shadow-lg  flex lg:flex-row flex-col md:p-10">
                <div className="flex flex-1 flex-col justify-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
                        <span className='text-white/80 space-x-0.5'>let's </span>Connect
                    </p>
                    <h2 className="mb-4 lg:text-6xl md:text-6xl text-4xl md:text-6xl font-bold text-transparent [-webkit-text-stroke:2px_#7C3AED33]">
                        LET'S TURN IDEAS
                        INTO SOMETHING
                        EXTRAORDINARY.
                    </h2>
                    <p className="text-sm tracking-wider lg:w-full md:w-lg text-white/80">
                        Projects, collaborations, or a simple conversation —
                        I’m always open to hearing what you have in mind.
                        Tell me a little about your idea or opportunity,
                        and let’s see where it can lead.
                    </p>
                </div>
                
                {/* message send form here */}
                <form className="space-y-5 flex-2 lg:mt-0 md:mt-10 mt-10" ref={form} onSubmit={sendEmail}>
                    <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                            <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-violet-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="Name"
                                name='user_name'
                                placeholder="Name"
                                className="w-full  border-b border-slate-300  px-3 py-2.5 text-violet-700 placeholder:text-slate-400  focus:outline-none "
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-violet-700">
                                email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name='user_email'
                                placeholder="Email"
                                className="w-full  border-b border-slate-300  px-3 py-2.5 text-violet-700 placeholder:text-slate-400  focus:outline-none "
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-violet-700">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name='subject'
                            placeholder="Subject"
                            className="w-full  border-b border-slate-300  px-3 py-2.5 text-violet-700 placeholder:text-slate-400 focus:outline-none "
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-violet-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name='message'
                            rows="5"
                            placeholder="Write your message here..."
                            className="w-full min-h-64 resize-none  border-b border-slate-300  px-3 py-2.5 text-violet-700 placeholder:text-slate-400  focus:outline-none "
                        />
                    </div>

                    <button
                        type="submit"
                        className="inline-flex items-center justify-center  bg-violet-600 rounded-lg px-5 py-2.5 font-semibold text-white transition focus:outline-none "
                    >
                        Send Message
                    </button>
                </form>

            </div>
        </section>
    )
}

export default LetsConnect
