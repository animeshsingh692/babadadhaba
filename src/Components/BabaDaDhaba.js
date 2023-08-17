import "./style.css";
import Menu from "./MenuAPI";
import { useState } from 'react';
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueCategories = [
    ...new Set(Menu.map((currItem) => {
        return currItem.category;
    })), "All"
];
console.log(uniqueCategories);

const BabaDaDhaba = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuCategory, setMenuCategory] = useState(uniqueCategories)

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
        }
        else {
            const displayItems = Menu.filter((currItem) => {
                return currItem.category === category;
            })
            setMenuData(displayItems);
        }
    }

    return (
        <>
            <Navbar filterItem={filterItem} menuCategory={menuCategory} />
            <MenuCard menuData={menuData} />
        </>
    );
}

export default BabaDaDhaba;