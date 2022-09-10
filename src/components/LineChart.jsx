import React from "react";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
    }

    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">
                    {coinName} Price Chart{" "}
                </Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">
                        {/* Change: {coinHistory?.data?.change}% */}
                    </Title>
                    <Title level={5} className="current-price">
                        {/* Current {coinName} Price: $ {currentPrice} */}
                    </Title>
                </Col>
            </Row>
            {/* <Line data={data} options={options} /> */}

            <coingecko-coin-compare-chart-widget
                coin-ids={coinName?.replace(/\s/g, '')?.toLowerCase() ?? ''}
                currency="usd"
                locale="en"
            ></coingecko-coin-compare-chart-widget>
        </>
    );
};

export default LineChart;
