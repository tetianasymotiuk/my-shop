import React from 'react';
import { Card, Col, Row, Layout } from 'antd';
import Meta from 'antd/lib/card/Meta';

const data = [
   {
      id: 1,
      name: "шарик",
      image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg"
   },
   {
      id: 2,
      name: "футболка",
      image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg"
   },
   {
      id: 4,
      name: "шарик 2",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
   }
]

export const Main = () => {
   const renderProducts = (el) => (
      <Col span={3}>
         <Card cover={<img alt='example' src={el.image} style={{ minHeight: '240px' }} />}>
            <Meta title={el.name} />
         </Card>
      </Col>
   )

   return (
      <Layout style={{minHeight:'100vh'}}>
         <Row justify="space-around">
            {
               data.map(el => renderProducts(el))
            }
         </Row>
      </Layout>
   );
}