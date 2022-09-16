import React, { useState } from "react";
import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import moment from "moment";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from './Loader';

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage = "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
    const { data: cryptoNews } = useGetCryptoNewsQuery({
        newsCategory,
        count: simplified ? 6 : 100,
    });
    
    const { data } = useGetCryptosQuery(100);

    if (!cryptoNews?.value) return <Loader />
    let cryptoNewsClone = [...cryptoNews?.value];

    return (
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className="select-news"
                        placeholder="Select a Crypto"
                        optionFilterProp="children"
                        onChange={(value) => setNewsCategory(value)}
                        filterOptions={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="Cryptocurrency">Cryptocurrency</Option>
                        {data?.data?.coins.map((currency, i) => (
                            <Option value={currency.name} key={currency.name}>
                                {currency.name}
                            </Option>
                        ))}
                    </Select>
                </Col>
            )}
            {cryptoNewsClone.sort((prev, next) => new Date(next.datePublished) - new Date(prev.datePublished)).map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>
                                    {news.name.length > 60 ? `${news.name.substring(0, 60)}...` : news.name}
                                </Title>
                                <img
                                    style={{ maxWidth: "150px", maxHeight: "100px" }}
                                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                                    alt="news"
                                />
                            </div>
                            <p>
                                {news.description.length > 200 ? `${news.description.substring(0, 200)}...` : news.description}
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar
                                        src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage}
                                        alt="news"
                                    />
                                    <Text className="provider--name">{news.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(news.datePublished).startOf("ss").fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default News;
