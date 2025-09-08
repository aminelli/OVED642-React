import React  from "react";

interface HeaderProps {
  title: string;
}


const Header: React.FC<HeaderProps> = ({ title }) => {

    // qui va la logica di business

    return (
        <header className="bg-blue-500 text-white p-4 shadow-md">
            <h1 className="text-2xl font-semibold">{title}</h1>
        </header>
    );
};

export default Header;
