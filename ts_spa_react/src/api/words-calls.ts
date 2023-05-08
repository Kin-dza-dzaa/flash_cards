interface response {
    path: string,
    message: string,
}

export interface wordDefinition {
    definition: string,
    example: string | null,
}

export interface WordData {
    word: string,
    source_language: string,
    target_language: string,
    transltions: Map<string, string[]>,
    definitions_with_examples: Map<string, wordDefinition[]>,
    examples: string[],
    main_translation: string,
    last_repeat: string,
    time_diff: number,
}

export interface userWords {
    words: Map<string, WordData[]>
}

interface UpdateState {
    word: string,
    new_state: number,
}

interface collection {
    collection_name: string,
    word: string,
    last_repeat: string,
    time_diff: number,
}

export const GetWords = (jwt: string) => async function(): Promise<userWords> {
    const options: RequestInit = {
        method: "GET",
        mode: "cors",
        headers: [["Content-Type", "application/json"], ["Authorization", `BEARER ${jwt}`]],
    }
    const response: Response = await fetch("http://localhost:8000/v1/words", options);
    const data = await response.json();

    const UserWords: userWords = {
        words: new Map<string, WordData[]>(
            Object.entries(data.words)
        ),
    } as userWords;

    Array.from(UserWords.words.keys()).map((key) => {
        let words = UserWords.words.get(key);
        words?.map((val) => {
            val.definitions_with_examples = new Map<string, wordDefinition[]>(Object.entries(val.definitions_with_examples ?? {}));
            val.transltions = new Map<string, string[]>(Object.entries(val.transltions ?? {}));
        });
    })

    return UserWords;
}

export const UpdateState = async function(wordData: WordData, collectionName: string, jwt: string): Promise<Response> {
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    let coll: collection = {
        word: wordData.word,
        collection_name: collectionName,
        last_repeat: new Date().toJSON(),
        time_diff: wordData.time_diff*2 + oneDayInMilliseconds,
    } as collection;

    const options: RequestInit = {
        method: "PUT",
        mode: "cors",
        headers: [["Content-Type", "application/json"], ["Authorization", `BEARER ${jwt}`]],
        credentials: "include",
        body: JSON.stringify(coll),
    }

    const response: Response = await fetch("http://localhost:8000/v1/words", options);

    return response;
}

export const AddWord = async function(word: string, collectionName: string, jwt: string): Promise<Response> {
    let coll: collection = {
        word: word,
        collection_name: collectionName,
        last_repeat: new Date().toJSON(),
        time_diff: 0,
    } as collection;

    const options: RequestInit = {
        method: "POST",
        mode: "cors",
        headers: [["Content-Type", "application/json"], ["Authorization", `BEARER ${jwt}`]],
        credentials: "include",
        body: JSON.stringify(coll),
    }

    const response: Response = await fetch("http://localhost:8000/v1/words", options);

    return response;
}

export const DeleteWord = async function(word: string, collectionName: string, jwt: string): Promise<Response> {
    let coll: collection = {
        word: word,
        collection_name: collectionName,
    } as collection;

    const options: RequestInit = {
        method: "DELETE",
        mode: "cors",
        headers: [["Content-Type", "application/json"], ["Authorization", `BEARER ${jwt}`]],
        credentials: "include",
        body: JSON.stringify(coll),
    }

    const response: Response = await fetch("http://localhost:8000/v1/words", options);

    return response;
}
