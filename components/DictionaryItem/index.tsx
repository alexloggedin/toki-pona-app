import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native'
import { View, Text } from '../Themed'
import styles from './styles'

interface DictionaryItemProps {
    word: {
        entry: {
            id: number;
            form: string;
        };
        translations: {
            title: string;
            forms: string[];
        }[];
        tags: never[];
        contents: never[];
        variations: never[];
        relations: never[];
    }
}

export default function DictionaryItem(props: DictionaryItemProps) {
    const {word} = props;
    return (
        <View style={styles.container}>
            <View style={styles.toki}>
                <Text style={styles.tokiText}>
                    {word.entry.form}
                </Text>
                <Text style={styles.pos}>
                    {word.translations[0].title}.
                </Text>
            </View>
            <View style={styles.definition}>

                <Text style={styles.def}>
                    {word.translations[0].forms[0]}
                </Text>
            </View>
        </View>
    )
}


const word = {
    entry: {
        id: 1,
        form: "word"
    },
    translations: [{
        title: "separator",
        forms: ["A declarative sentence ends with a full stop. Don't use a full stop before or after the other separators 'e', 'la', 'li', 'pi', '.', '!', '?', ':'. "]
    }],
    tags: [],
    contents: [],
    variations: [],
    relations: []
}