import React from "react";

const CryptoChart = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", height: "calc(100vh - 82px)", alignItems: "center" }}>
            <br />
            <iframe
                src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=100&pref_coin_id=1505&graph=yes"
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

export default CryptoChart;
