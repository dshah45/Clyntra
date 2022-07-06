import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: "Products",
        path: "/products",
        icon: <AiIcons.AiFillShopping />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    
        subNav: [
        {
    
            path: "/lee",
            icon: <AiIcons.AiFillShopping />,
            cName: "sub-nav",
        },
        {
            
            path: "/products/levis",
            icon: <AiIcons.AiFillShopping />,
            cName: "sub-nav",
        },
        {
            title: "Raymond",
            path: "/products/raymond",
            icon: <AiIcons.AiFillShopping />,
        },
        {
            title: "H&M",
            path: "/products/h&m",
            icon: <AiIcons.AiFillShopping />,
        },{
            title: "Peter England",
            path: "/products/peter_england",
            icon: <AiIcons.AiFillShopping />,
        },
        ],
    },
{
	title: "About Us",
	path: "/about-us",
	icon: <AiIcons.AiFillHome />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

},

{
	title: "Contact",
	path: "/contact",
	icon: <FaIcons.FaPhone />,
},

];
