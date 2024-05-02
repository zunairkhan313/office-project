import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from "../Button/button";

export default function ContactUsForm() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_1w2ddap', 'template_ta4gg4z', form.current, {
                publicKey: 'vj-hZYXMs2f40puqD',
            })
            .then(
                () => {
                    console.log('MESSAGE SENT SUCCESSFULLY!');
                    alert("Message Sent Successfully!")
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert("Sending Message Failed...! ")
                },
            );
    };


    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-8 p-5 shadow-2xl" >
                            <h1 className="text-2xl font-bold text-[#006429]">We Are Here to Assist You!</h1>
                            <div className="row">
                                <div className="col-md-6 p-2">
                                    <label><strong>Name:</strong></label>
                                    <input id="form_name" name="user_name" class="form-control" required="required" type="text" placeholder="Name"></input>
                                </div>
                                <div className="col-md-6 p-2">
                                    <label><strong>Email:</strong></label>
                                    <input id="form_name" name="user_email" class="form-control" required="required" type="email" placeholder="Email"></input>
                                </div>
                                <div className="col-md-6 p-2">
                                    <label><strong>Phone:</strong></label>
                                    <input id="form_name" name="user_phone_no" class="form-control" required="required" type="number" placeholder="Phone Number"></input>
                                </div>
                                <div className="col-md-6 p-2">
                                    <label><strong>Subject:</strong></label>
                                    <input id="form_name" name="subject" class="form-control" required="required" type="text" placeholder="Subject"></input>
                                </div>
                                <div className="col-md-12">
                                    <label><strong>Message:</strong></label>
                                    <textarea id="form_message" name="message" class="form-control required" rows="6" required="required" placeholder="Your Message"></textarea>
                                </div>
                                <div className="p-2 flex items-center justify-center">
                                    {/* <Button label="Send Message" type="submit" value="send"/> */}
                                    {/* <input type="submit" value="Send" /> */}
                                    <button
                                        type="submit"
                                        className="w-full p-3 focus:outline-none rounded-[5px] bg-[#006429] text-white
                                        hover:bg-black text-center ease-linear duration-150"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-5 shadow-2xl">
                            <div className="row">
                                <div className="col-md-12">
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#006429]">For inquiries Contact:</h2>
                                        <div className="p-2">
                                            <h3><strong>Telephone:</strong></h3>
                                            <p>+92 322 8888520</p>
                                        </div>
                                        <div className="p-2">
                                            <h3><strong>Email Address:</strong></h3>
                                            <p>info@changlutools.pk</p>
                                            {/* <p>www.changlutools.com</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}