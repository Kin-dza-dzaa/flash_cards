import React, { useState } from 'react'
import Badge from 'antd/lib/badge'
import Progress from 'antd/lib/progress'
import { DivDescription } from '../cards-styled'
import Card from 'antd/lib/card'
import { PlusOutlined, PlayCircleOutlined, CheckOutlined, EditOutlined } from '@ant-design/icons';
import { red, yellow, green } from '@ant-design/colors';
import { WordData } from '../../../api/words-calls';
import { Modal, Typography } from 'antd';
import { LearnCarousel } from './learn-carousel';
import { WordsStructValidation } from '../../../validation/user-validation';
import { useQueryClient } from '@tanstack/react-query';
import { WordsTable } from './words-table'
import { AddForm } from './Add-word'

const { Paragraph } = Typography;

export const Collection = (props: { words: WordData[], collectionName: string }) => {
    const [isAddOpen, setAddOpen] = useState(false);
    const [isLearnOpen, setLearnOpen] = useState(false);
    const [isEditOpen, setEditOpen] = useState(false);
    const queryClient = useQueryClient();
    const progressPercent = (): number => {
        const wordsToLearn = props.words.filter(WordsStructValidation).length;
        return (1 - wordsToLearn / props.words.length) * 100;
    }
    return (
        <React.Fragment>
            <Badge count={props.words.filter(WordsStructValidation).length === 0 ? <CheckOutlined style={{ color: "rgba(0, 245, 0, 1)" }} /> : props.words.filter(WordsStructValidation).length} status="warning" title="Word to learn for today">
                <Card
                    style={{ width: "max(190px, 32vw)" }}
                    actions={
                        props.words.filter(WordsStructValidation).length === 0 ?
                            [
                                <PlusOutlined onClick={() => setAddOpen(true)} />,
                                <EditOutlined onClick={() => setEditOpen(true)} />
                            ]
                            :
                            [
                                <PlayCircleOutlined onClick={() => setLearnOpen(true)} />,
                                <PlusOutlined onClick={() => setAddOpen(true)} />,
                                <EditOutlined onClick={() => setEditOpen(true)} />
                            ]
                    }
                >
                    <Card.Meta
                        title={props.collectionName}
                        description=
                        <DivDescription>
                            <span>Collection progress</span>
                            <Progress
                                size="default"
                                percent={progressPercent()}
                                steps={6}
                                strokeColor={
                                    [
                                        red[5],
                                        red[5],
                                        yellow[5],
                                        yellow[5],
                                        green[6],
                                        green[6]]
                                }
                            />
                        </DivDescription>
                    />
                </Card>
            </Badge>
            <Modal
                open={isLearnOpen}
                onCancel={() => { queryClient.invalidateQueries(["words"]); setLearnOpen(false) }}
                footer={false}
                keyboard={false}
                centered
                bodyStyle={{ "height": "100vh" }}
                width="100%"
                destroyOnClose
                title=<Paragraph style={{ textAlign: "center" }}>{`Collection: ${props.collectionName}`}</Paragraph>
            >
                <LearnCarousel words={props.words} collectionName={props.collectionName} setOpen={setLearnOpen} />
            </Modal>
            <Modal
                open={isEditOpen}
                onCancel={() => { queryClient.invalidateQueries(["words"]); setEditOpen(false) }}
                footer={false}
                keyboard={false}
                centered
                title=<Paragraph style={{ textAlign: "center" }}>{`Collection: ${props.collectionName}`}</Paragraph>
                bodyStyle={{ "height": "100%" }}
                width="100%"
                destroyOnClose
            >
                <WordsTable words={props.words} collectionName={props.collectionName} />
            </Modal>
            <Modal
                open={isAddOpen}
                onCancel={() => { queryClient.invalidateQueries(["words"]); setAddOpen(false) }}
                footer={false}
                centered
                title=<Paragraph style={{ textAlign: "center" }}>{`Collection: ${props.collectionName}`}</Paragraph>
                bodyStyle={{ "height": "100%" }}
                destroyOnClose
            >
                <AddForm words={props.words.map((value) => value.word)} collection_name={props.collectionName} />
            </Modal>
        </React.Fragment>
    )
}
