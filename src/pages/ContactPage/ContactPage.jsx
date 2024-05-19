import React from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div>
      <h4 className="text-4xl mb-5">Contact Page</h4>
      <Link
        className="px-4 py-2 border-2 border-black bg-black text-white hover:border-black hover:bg-white hover:text-black transition-colors rounded mt-14"
        to={"/reelbox/"}
      >
        Homepage
      </Link>
    </div>
  );
};

export default ContactPage;
