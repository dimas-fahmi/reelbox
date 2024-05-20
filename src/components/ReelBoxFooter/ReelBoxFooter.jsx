import React from "react";
import { Link } from "react-router-dom";

function ReelBoxFooter() {
  return (
    <div className="p-10 pb-3 text-white bg-secondary">
      <div className="flex-col hidden gap-4 p-5 px-0 md:flex md:flex-row">
        <div className="flex-grow">
          <h4 className="text-2xl poppins-bold">
            <i className="text-yellow-300 bi bi-geo-alt-fill me-2"></i>Find Us
          </h4>
          <small className="opacity-50 ms-9">
            1011 Avenue, Hill Clinton, CA
          </small>
        </div>
        <div className="flex-grow">
          <h4 className="text-2xl poppins-bold">
            <i className="text-yellow-300 bi bi-telephone-fill me-2"></i>Contact
            Us
          </h4>
          <small className="opacity-50 ms-9">+1 551-558-566</small>
        </div>
        <div className="flex-grow">
          <h4 className="text-2xl poppins-bold">
            <i className="text-yellow-300 bi bi-envelope-fill me-2"></i>Mail Us
          </h4>
          <small className="opacity-50 ms-10">info@reelbox.com</small>
        </div>
      </div>
      <div className="grid grid-cols-1 pt-4 mt-4 border-t-2 md:grid-cols-3 border-slate-700">
        <div className="px-2 mb-10">
          <h2 className="text-2xl poppins-bold">About Us</h2>
          <p className="mb-3 quicksand-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            illum voluptas, ab tempore odio perspiciatis corporis accusantium
            earum.
          </p>
          <h2 className="mt-4 text-xl poppins-bold">Follow Us</h2>
          <div className="flex gap-4 pt-3">
            <div className="text-2xl">
              <i className="bi bi-facebook"></i>
            </div>
            <div className="text-2xl">
              <i className="bi bi-twitter-x"></i>
            </div>
            <div className="text-2xl">
              <i className="bi bi-discord"></i>
            </div>
          </div>
        </div>
        <div className="px-2 mb-10">
          <h2 className="mb-3 text-2xl poppins-bold">Navigation</h2>
          <nav className="grid grid-cols-2 gap-2 quicksand-regular">
            <Link className="opacity-50 hover:opacity-100 hover:text-primary hover:underline">
              About
            </Link>
            <Link className="opacity-50 hover:opacity-100 hover:text-primary hover:underline">
              Career
            </Link>
            <Link className="opacity-50 hover:opacity-100 hover:text-primary hover:underline">
              Contact
            </Link>
            <Link className="opacity-50 hover:opacity-100 hover:text-primary hover:underline">
              Guestpost
            </Link>
            <Link className="opacity-50 hover:opacity-100 hover:text-primary hover:underline">
              Home
            </Link>
            <Link className="opacity-50 hover:opacity-100 hover:text-primary hover:underline">
              Latest News
            </Link>
            <Link className="opacity-50 hover:opacity-100 hover:text-primary hover:underline">
              Our Team
            </Link>
            <Link className="opacity-50 hover:opacity-100 hover:text-primary hover:underline">
              Partners
            </Link>
            <Link className="opacity-50 hover:opacity-100 hover:text-primary hover:underline">
              Partnership
            </Link>
            <Link className="opacity-50 hover:opacity-100 hover:text-primary hover:underline">
              Services
            </Link>
          </nav>
        </div>
        <div className="px-2 mb-10">
          <h2 className="mb-3 text-2xl poppins-bold">Navigation</h2>
          <p className="quicksand-regular">
            Don't miss the latest news about your favorites, susbscribe to our
            feeds!
          </p>
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="flex-grow h-[50px] rounded-s-2xl rounded-e-none bg-secondary-accent-emphasis px-6 outline-none"
              placeholder="Email Adress"
            />
            <button className=" w-[80px] h-[50px] bg-secondary-emphasis rounded-e-2xl text-primary p-3 hover:bg-white hover:text-black transition-colors">
              <i className="rounded bi bi-send-fill "></i>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between px-2 md:flex-row pt-8md:flex-row">
        <div className="opacity-50 hover:opacity-100 ">
          Copyright © 2018, All Right Reserved ReelBox
        </div>
        <div className="flex gap-4 mb-5">
          <Link className="hidden opacity-50 md:inline hover:opacity-100">
            Home
          </Link>
          <Link className="opacity-50 hover:opacity-100">
            Terms & Conditions
          </Link>
          <Link className="opacity-50 hover:opacity-100">Privacy & Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default ReelBoxFooter;
