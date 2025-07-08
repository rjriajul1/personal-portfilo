import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [email,setEmail]= useState("")
  const [name,setName]= useState("")
  const [subject,setSubject]= useState("")
  const [message,setMessage]= useState("")
  
  const handleContact = e => {
    e.preventDefault()
    const serviceId =import.meta.env.VITE_SERVICEID
    const templetId = import.meta.env.VITE_TEMPLETID
    const publicKey = import.meta.env.VITE_PUBLICKEY
  const templetPrams = {
    from_name: name,
    from_email: email,
    subject: subject,
    message:message
  }
 emailjs.send(serviceId,templetId,templetPrams,publicKey)
 .then((response)=>{
  console.log(response);
  setEmail("")
  setMessage("")
  setName("")
  setSubject("")
 })
 .catch(error=>{
  console.log(error);
 })
    
  }
  return (
    <div id="contact" className="mb-25">
      <h2 className="text-3xl mt-12 mb-10 text-center md:text-4xl font-bold text-primary">
        📬 Contact 
      </h2>
      
      <section id="contact" className="  bg-green-50 max-w-[1600px] mx-auto ">
        <div className=" max-w-7xl mx-auto  text-center">
          <div className="flex flex-col lg:flex-row items-center justify-center p-10 gap-8">
            <div className="border p-15 rounded-2xl">
              <p className="font-bold">
                Email:{" "}
                <span className="text-xs font-bold">
                  riajul.karim52@gmail.com
                </span>
              </p>
              <p className="font-bold">
                Phone&WhatsApp:{" "}
                <span className="text-xs font-bold">+880178867912</span>
              </p>
              <p className="font-bold">
                Address:{" "}
                <span className="text-xs font-bold">Dhaka,Bangladesh</span>
              </p>
            </div>
            <div>
              <form onSubmit={handleContact} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <input
                  type="text"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                  placeholder="Your Name"
                  className="input input-bordered  w-72"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  value={subject}
                  onChange={(e)=> setSubject(e.target.value)}
                  placeholder="Subject"
                  className="input input-bordered w-full md:col-span-2"
                />
                <textarea
                  value={message}
                  onChange={(e)=> setMessage(e.target.value)}
                  className="textarea textarea-bordered w-full md:col-span-2"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
                <div className="md:col-span-2 text-center mt-2">
                  <button  type="submit" className="btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
