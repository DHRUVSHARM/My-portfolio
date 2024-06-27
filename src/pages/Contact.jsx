import React from "react";
import Contact from "../components/Contact";
import StarsCanvas from "../components/canvas/Stars";


const ContactPage = () => {
    return (
        <div className="relative z-0">
            <Contact />
            <StarsCanvas />
        </div>
    );
};

export default ContactPage;