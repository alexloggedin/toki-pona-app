import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native'
import { View, Text } from '../Themed'
import styles from './styles'
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';


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
    tooltip?: Boolean
}

export default function DictionaryItem(props: DictionaryItemProps) {
    const colorScheme = useColorScheme();
    const {word} = props;
    return (
        <View style={[styles.container,  { backgroundColor: Colors[colorScheme].offset }]}>
            <View style={[styles.toki,   { backgroundColor: Colors[colorScheme].offset }]}>
                <Text style={styles.tokiText}>
                    {word.entry.form}
                </Text>
                <Text style={[styles.pos, {color: Colors[colorScheme].tint}]}>
                    {word.translations[0].title}.
                </Text>
            </View>
            <View style={[styles.definition,   { backgroundColor: Colors[colorScheme].offset }]}>

                <Text style={styles.def}>
                    {word.translations[0].forms[0]}
                </Text>
            </View>
        </View>
    )
}