import Typography from 'antd/lib/typography';
import React from 'react'

const { Paragraph, Title, Text } = Typography;


export const Tips = () => {
    return (
        <React.Fragment>
            <Title level={2} style={{ "textAlign": "center", "margin": "10px 0 0 0" }}>Some tips:</Title>
            <ul>
                <li>
                    <Paragraph strong style={{ "fontSize": "20px" }}>
                        It uses Google translation.
                    </Paragraph>
                    <Text style={{ "fontSize": "18px" }}>
                        You've got to keep in mind that this website uses Google Translate to fetch translations. It filters "bad words," so you won't get translations for those words.
                    </Text>
                </li>
                <br />
                <li>
                    <Paragraph strong style={{ "fontSize": "20px" }}>
                        How to learn words more efficently
                    </Paragraph>
                    <Text style={{ "fontSize": "18px" }}>
                        It'd be more efficient for you if you added actual words to your collections, by doing that, you get more translation data. So don't try to add sentences.
                    </Text>
                </li>
                <br />
                <li>
                    <Paragraph strong style={{ "fontSize": "20px" }}>
                        How does it work? How does it determine the time of the next repetition?
                    </Paragraph>
                    <Text style={{ "fontSize": "18px" }}>
                        It uses a <a href='https://en.wikipedia.org/wiki/Spaced_repetition' target="_blank" rel="noopener noreferrer">spaced repetition</a> technique.
                    </Text>
                </li>
                <br />
            </ul>
        </React.Fragment>
    )
}
