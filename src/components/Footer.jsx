import React from "react";

/* Create a Footer.jsx component that renders a <footer> element
  to show a copyright message in a <p> with a dynamically updated year. */


const currentYear = new Date().getFullYear();

function Footer() {
    return (
        <footer>
            <p>Copyright © {currentYear}</p>
        </footer> 
    );
}

export default Footer;