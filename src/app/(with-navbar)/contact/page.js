"use client";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import Swal from "sweetalert2";

// const resend = new Resend("re_7zcSdR2s_ExsXq82wLyWEcAFMR9h77HJv");
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g3lqplj",
        "template_1ro30j1",
        form.current,
        "7TDLTQ9I1JwjgJLhl"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Email is sended",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };

  return (
    <div className="container-fluid lg:mt-20 w-full mx-auto">
      <div className="w-full h-96 mx-auto  bg-[url('https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-no-repeat bg-cover bg-attach contact-banner flex flex-col items-center pt-24 lg:pt-20 px-3">
        <div className="w-full bg-black/40 text-center py-7">
          <p className="lg:text-7xl text-2xl font-bold text-white ">
            Feel Free To Contact Use
          </p>

          <h1 className="leading-loose text-slate-300 lg:text-xl font-serif">
            Wether you're at home or in the wild we are here for you.
            <br />
            There is a good chance your question has been answered
          </h1>
        </div>
      </div>
      <div className="bg-base-200">
        <div className="flex flex-col items-center space-y-8 px-3">
          <h1 className="text-3xl lg:text-5xl font-serif pt-16">
            Get in Touch
          </h1>
          <p className="lg:text-xl text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit <br />{" "}
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row px-4 lg:px-20 gap-8 max-w-screen-xl w-full mx-auto mt-14 pb-20">
          <div className="card lg:w-96 bg-base-100 shadow-xl">
            <figure className=" pt-10 mx-auto">
              <h2 className="rounded-full mx-auto p-3 text-white text-9xl bg-blue-400">
                <AiOutlineMail />
              </h2>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-xl mb-6 font-bold">Mail to us</h2>
              <p className="text-blue-600 font-bold">
                Our friendly team is here to help.
              </p>
              <div className="card-actions">
                <h1 className="hover:text-yellow-400 font-bold">
                  health@care.com
                </h1>
              </div>
            </div>
          </div>
          <div className="card lg:w-96 bg-base-100 shadow-xl">
            <figure className="pt-10 mx-auto">
              <h1 className="rounded-full p-3 text-white text-9xl bg-blue-400">
                <HiOutlineLocationMarker />
              </h1>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title mb-6 font-bold">Office</h2>
              <p className="text-blue-600 font-bold">
                Come say hello at our office.
              </p>
              <div className="card-actions">
                <h1 className="font-bold">
                  Dhaka, Bangladesh
                  <br />
                  Chattogram, Bangladesh
                </h1>
              </div>
            </div>
          </div>
          <div className="card lg:w-96 bg-base-100 shadow-xl">
            <figure className="mx-auto pt-10">
              <h1 className="rounded-full p-3 text-white text-9xl bg-blue-400">
                <HiOutlinePhone />
              </h1>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title mb-6 font-bold">Phone</h2>
              <p className="text-blue-600 font-bold">Mon-Fri from 8am to 5am</p>
              <div className="card-actions">
                <h1 className="font-bold">018********</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="md:flex justify-between items-center  my-20 w-8/12 mx-auto bg-white  ">
        <div className="w-full flex justify-center">
          <div className="text-xl">
            <h1 className="md:text-3xl text-2xl font-semibold mb-8">
              Branch-1
            </h1>
            <p className="md:text-md text-sm">
              <strong>Address</strong> :{" "}
              <span className="text-slate-500">satkhira khulna</span>
            </p>
            <p className="md:text-md text-sm">
              <strong>Email</strong> :{" "}
              <span className="text-slate-500">healthcare@gmail.com</span>
            </p>
            <p className="md:text-md text-sm">
              <strong>Phone</strong> :{" "}
              <span className="text-slate-500">+8801xxxxxxx</span>
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center md:mt-0 mt-10">
          <div className="text-xl">
            <h1 className="md:text-3xl text-2xl font-semibold mb-8">
              Branch-2
            </h1>
            <p className="md:text-md text-sm">
              <strong>Address</strong> :{" "}
              <span className="text-slate-500">khulna</span>
            </p>
            <p className="md:text-md text-sm">
              <strong>Email</strong> :{" "}
              <span className="text-slate-500">healthcare@gmail.com</span>
            </p>
            <p className="md:text-md text-sm">
              <strong>Phone</strong> :{" "}
              <span className="text-slate-500">+8801xxxxxxx</span>
            </p>
          </div>
        </div>
      </div> */}
      <div className="font-serif">
        <h1 className="md:text-4xl text-2xl font-bold text-center  text-slate-800">
          Do You Have Any Confusion Feel Free To Mail Us
        </h1>
        <p className="md:w-5/12 w-11/12 mx-auto text-center text-sm text-slate-400 mb-6">
          Aught where for childe so scape yet ye heralds suits delphis, though
          so sighed dome then thence and did land,.Breast aisle to he he feere,
          lines had sadness but are there visit nor was wassailers, and and been
          his.
        </p>
      </div>
      <div className="mt-10 md:w-full  mx-auto my-10 relative">
        <div className="contact-bg  h-[90vh] "></div>
        <div className="md:w-7/12 w-9/12  contact-form ">
          <form className="" ref={form} onSubmit={(e) => sendEmail(e)}>
            <div className="md:flex  gap-6 font-bold w-full">
              <div className="form-control md:w-1/2 w-full my-2">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="input  bg-[#E0F4FF] border-[#6c9eb3]"
                />
              </div>
              <div className="form-control md:w-1/2 w-full my-2">
                <input
                  type="email"
                  name="form_email"
                  placeholder="Your Email"
                  className="input bg-[#E0F4FF] border-[#6c9eb3] "
                />
              </div>
            </div>
            {/* <div className="md:flex gap-6 font-bold  "> */}
            <div className="form-control md:w-full w-full my-10">
              <textarea
                name="message"
                id=""
                cols="30"
                rows="3"
                placeholder="Write Here..."
                className=" w-full  rounded-md bg-[rgb(224,244,255)] p-2 border-[#6c9eb3]  focus:outline-slate-300 font-bold "
              ></textarea>
            </div>
            {/* </div> */}

            <div className="flex justify-center mt-6">
              <input
                type="submit"
                className="btn border-none bg-[#03506F] font-bold  text-white hover:bg-[#1D3E53] "
                value={` Send Message`}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
