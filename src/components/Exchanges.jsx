import React, { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Col, Row, Select } from "antd";

const Exchanges = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", height: "calc(100vh - 82px)", alignItems: "center" }}>
            <br />
            <iframe
                src="https://widget.coinlib.io/widget?type=converter&theme=light"
                width="100%"
                height="100%"
                scrolling="auto"
                marginWidth="50px"
                marginHeight="0"
                frameBorder="0"
                border="0"
            ></iframe>
        </div>
    );
};

export default Exchanges;
