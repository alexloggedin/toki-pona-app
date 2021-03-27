import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'
import { View, Text } from '../Themed'
import { StyleProp, TextStyle } from 'react-native'
import dictionary from '../../assets/data/dictionary.json'
import DictionaryItem from '../DictionaryItem'
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { FlatList } from 'react-native-gesture-handler';
import { Portal } from 'react-native-paper';

interface AnnotatedProps {
    children: React.ReactNode,
    inToki: Boolean,
    style?: StyleProp<TextStyle>
    location?: string
}

export default function AnnotatedText(props: AnnotatedProps) {
    const colorScheme = useColorScheme();
    const [keyWord, setKeyWord] = React.useState('')
    const lines = props.children?.toString().split('\n');
    const tokens = lines?.map((l) => l.split(' '));

    const toggleWord = (word: string) => {
        // Regex is scary, but it works...
        RegExp(/^[(.,:!?'"]/).test(word) ? word = word.substring(1) : word
        RegExp(/[).,:!?'"]/).test(word) ? word = word.slice(0, -1) : word
        RegExp(/[).,:!?'"]/).test(word) ? word = word.slice(0, -1) : word
        setKeyWord(word)
    }

    const findDefinition = (word: string) => {
        word = word.toLowerCase()
        const results = dictionary.words.filter((item) => {
            if (props.inToki) {
                const toki = item.entry.form
                return toki.startsWith(word);
            } else {
                const def = item.translations[0].forms[0]
                return def.includes(word)
            }
        });
        return results
    }

    const generateText = (tokens: string[][]) => (
        tokens.map((t, i) => (
            t.map((w, j) => {
                return (
                    <Text key={i + 1 * j + 1} style={[styles.text, props.style, { textDecorationColor: Colors[colorScheme].tint }]}
                        selectable={true}
                        onPress={() => toggleWord(w)}
                    >
                        {w}
                    </Text>
                )
            })
        ))
    )
    return (
        <View style={[styles.container, props.style]}>
            { tokens ?
                generateText(tokens)
                :
                <Text>No Text Here</Text>
            }
            { !(keyWord === '') &&
                <Portal>
                    <View style={[styles.def, { backgroundColor: Colors[colorScheme].tint, top: props.location }]}>
                        <View style={[styles.defHeader, { backgroundColor: Colors[colorScheme].tint }]}>
                            <Text>Contextual Dictionary {keyWord}</Text>
                            <Ionicons name="close" size={24} color="black" onPress={() => toggleWord('')} />
                        </View>
                        <FlatList
                            data={findDefinition(keyWord)}
                            keyExtractor={(word) => word.entry.id.toString()}
                            renderItem={({ item }) => (
                                <DictionaryItem word={item} />
                            )}
                        />
                    </View>
                </Portal>}
        </View>

    )
}
