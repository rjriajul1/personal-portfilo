import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="text-3xl mt-12 mb-8 text-center md:text-4xl font-bold text-primary">
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
              <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered  w-72"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered w-full md:col-span-2"
                />
                <textarea
                  className="textarea textarea-bordered w-full md:col-span-2"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
                <div className="md:col-span-2 text-center mt-2">
                  <button className="btn btn-primary">Send Message</button>
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
