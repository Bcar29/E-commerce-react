import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MegaMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const menus = {
        phones: {
            title: "Téléphones & Tablettes",
            categories: [
                { name: "Samsung", image: "https://via.placeholder.com/80x80?text=Samsung" },
                { name: "iPhone", image: "https://via.placeholder.com/80x80?text=iPhone" },
                { name: "Tecno", image: "https://via.placeholder.com/80x80?text=Tecno" },
                { name: "Infinix", image: "https://via.placeholder.com/80x80?text=Infinix" },
            ]
        },
        fashion: {
            title: "Mode",
            categories: [
                { name: "Chaussures Homme", image: "https://via.placeholder.com/80x80?text=Chaussures" },
                { name: "T-shirts Homme", image: "https://via.placeholder.com/80x80?text=T-Shirts" },
                { name: "Robes Femme", image: "https://via.placeholder.com/80x80?text=Robes" },
                { name: "Sacs Femme", image: "https://via.placeholder.com/80x80?text=Sacs" },
            ]
        }
    };

    const handleEnter = (menu) => {
        setActiveMenu(menu);
    };

    const handleLeave = () => {
        setActiveMenu(null);
    };

    const menuStyle = {
        position: 'relative',
        marginRight: '20px',
        color: 'white',
        padding: '10px',
        cursor: 'pointer'
    };

    const dropdownStyle = {
        position: 'absolute',
        top: '100%',
        left: 0,
        background: '#fff',
        padding: '20px',
        minWidth: '400px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        zIndex: 1000,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px'
    };

    const itemStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '10px'
    };

    const imageStyle = {
        width: '60px',
        height: '60px',
        objectFit: 'cover',
        borderRadius: '8px'
    };

    const linkStyle = {
        color: '#333',
        textDecoration: 'none',
        fontWeight: '500'
    };

    const navbarStyle = {
        display: 'flex',
        backgroundColor: '#f68b1e',
        padding: '10px 20px'
    };

    return (
        <nav style={navbarStyle}>
            {Object.entries(menus).map(([key, menu]) => (
                <div
                    key={key}
                    style={menuStyle}
                    onMouseEnter={() => handleEnter(key)}
                    onMouseLeave={handleLeave}
                >
                    <span>{menu.title}</span>

                    <AnimatePresence>
                        {activeMenu === key && (
                            <motion.div
                                style={dropdownStyle}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {menu.categories.map((cat, index) => (
                                    <div key={index} style={itemStyle}>
                                        <img src={cat.image} alt={cat.name} style={imageStyle} />
                                        <a href="#" style={linkStyle}>{cat.name}</a>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                </div>

                

            ))}
        </nav>
    );
};

export default MegaMenu;
