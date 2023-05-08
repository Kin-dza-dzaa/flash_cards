import Table from 'antd/lib/table';
import React, { useState } from 'react'
import { DeleteWord, WordData } from '../../../api/words-calls';
import Column from 'antd/lib/table/Column';
import Input from 'antd/lib/input/Input';
import { StyledDelete } from './words-table-styled';
import Form from 'antd/lib/form';
import { useForm } from 'antd/lib/form/Form';
import { useAuthContext } from '../../../hooks/AuthProvider/useAuthContext';

interface WordRow {
    key: number;
    word: string;
}

export const WordsTable = (props: { words: WordData[], collectionName: string }) => {
    const authContext = useAuthContext();
    const [tableData, setTableData] = useState(() => {
        const data: WordRow[] = [];
        props.words.map((value, index) => {
            data.push({
                key: index,
                word: value.word,
            });
        })
        return data;
    });
    const handleDelete = async (record: WordRow) => {
        let res = await DeleteWord(record.word, props.collectionName, authContext.userData.jwt);
        if (res.ok) {
            setTableData(tableData.filter((value) => value != record));
        }
    }
    return (
        <Table
            dataSource={tableData}
            size={"small"}
        >
            <Column align="center" title="Word" dataIndex="word" key="word" render={(_: any, record: WordRow) => {
                return (
                    <WordColumn initialWord={record.word} collection_name={props.collectionName} />
                );
            }} />
            <Column align="center" title="Delete" key="delete" render={(_: any, record: WordRow) => {
                return <StyledDelete onClick={() => handleDelete(record)} />;
            }} />
        </Table>
    );
}

const WordColumn = (props: { initialWord: string, collection_name: string }) => {
    const [currentWordInDb, setCurrentWord] = useState(props.initialWord);
    const [isLoading, setLoading] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [form] = useForm();
    return (
        <React.Fragment>
            <Form
                form={form}
                name="basic"
                labelAlign="left"
                initialValues={{ word: currentWordInDb }}
                autoComplete="off"
                style={{ userSelect: "none", display: "grid", gridTemplateColumns: "110px 1fr", placeItems: "center", gap: "10px" }}
            >
                {
                    isOpen ?
                        <Form.Item
                            name="word"
                            style={{"marginLeft": "5%"}}
                            rules={
                                [
                                    {
                                        validator: (_, word: string) => {
                                            if (word.trim().toLowerCase() === currentWordInDb.toLocaleLowerCase()) return Promise.reject(new Error("Enter new word"));
                                            if (word.trim().length === 0) return Promise.reject(new Error("Required"));
                                            return Promise.resolve();
                                        },
                                    },
                                ]
                            }
                        >
                            <Input spellCheck size="small" />
                        </Form.Item>
                        :
                        <Form.Item
                            style={{"marginLeft": "5%"}}
                        >
                            {currentWordInDb}
                        </Form.Item>

                }
            </Form>
        </React.Fragment>
    );
}