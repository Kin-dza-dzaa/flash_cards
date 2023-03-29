import React from 'react'
import Typography from 'antd/lib/typography';

const { Title } = Typography;


export const Home = () => {
  return (
    <div style={{ "display": "grid", "placeItems": "center" }}>
      <Title>
        Just create a collection with some inital words:
      </Title>
      <img src="http://localhost/create_collection.gif" alt='create collection animation' width={"50%"} />
      <Title>
        Then you can start learning:
      </Title>
      <Title level={4}>
        The website tracks down all of your progress and offers detailed translations with definitions.
      </Title>
      <img src="http://localhost/learn_words.gif" alt='learning words animation' width={"50%"} />
    </div>
  )
}
