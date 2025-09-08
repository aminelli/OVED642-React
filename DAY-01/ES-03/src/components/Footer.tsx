import React from "react";


const Footer: React.FC = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white p-4 mt-auto">
            <p className="text-center">&copy; {year} My Company. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

