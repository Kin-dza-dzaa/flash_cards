import Typography from 'antd/lib/typography';
import React from 'react'

const { Paragraph, Title } = Typography;

export const About = () => {
    return (
      <React.Fragment>
        <br />
        <Title level={2} style={{ "textAlign": "center" }}>This project took a lot of inspiration from AnkiDroid</Title>
        <Paragraph style={{ "margin": "20px", "fontSize": "18px", "textAlign": "center" }}>
          AnkiDroid helped me learn new words, but making all those cards was quite a task.
        </Paragraph>
        <Paragraph style={{ "margin": "20px", "fontSize": "18px", "textAlign": "center" }}>
          So this website helps you with that. All you need to do is create a collection, then add some words to it. Translations are fetched from Google Translate.
          The website tracks your progress on each collection.
        </Paragraph>
      </React.Fragment>
    )
  }
  