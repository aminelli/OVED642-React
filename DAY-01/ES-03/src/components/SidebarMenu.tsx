import React from "react";

const SidebarMenu: React.FC = () => {

    return (
        <>
            <aside className="w-60 bg-white border-r shadow-md p-4">
                <nav>
                    <ul className="space-y-2">
                    <li className="hover:text-blue-600 cursor-pointer">🏠 Home</li>
                    <li className="hover:text-blue-600 cursor-pointer">📦 Prodotti</li>
                    <li className="hover:text-blue-600 cursor-pointer">📊 Report</li>
                    <li className="hover:text-blue-600 cursor-pointer">⚙️ Impostazioni</li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default SidebarMenu;