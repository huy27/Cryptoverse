import {
    HomeOutlined,
    AreaChartOutlined,
    MoneyCollectOutlined,
    BulbOutlined,
    MenuOutlined,
    HeatMapOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Menu, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import icon from "../images/cryptocurrency.png";

const items = [
    { key: "1", label: "Home", path: "/", icon: <HomeOutlined /> },
    { key: "2", label: "CryptoCurrencies", path: "/cryptocurrencies", icon: <AreaChartOutlined /> },
    { key: "3", label: "Exchanges", path: "/exchanges", icon: <MoneyCollectOutlined /> },
    { key: "4", label: "News", path: "/news", icon: <BulbOutlined /> },
    { key: "5", label: "Heat", path: "/heat", icon: <HeatMapOutlined /> },
];

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setCreenSize] = useState(null);
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        const handleResize = () => setCreenSize(window.innerWidth);
        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src="http://cryptoicons.co/images/coin_icon@2x.png" size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu && (
                <Menu theme="dark">
                    {items.map((item) => (
                        <Menu.Item key={item.key} icon={item.icon}>
                            <Link to={item.path}>{item.label}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            )}
        </div>
    );
};

export default Navbar;
