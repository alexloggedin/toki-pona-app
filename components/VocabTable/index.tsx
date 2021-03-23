import React from 'react'
import { View, Text } from '../Themed'
import styles from './styles'
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

interface VocabTableProps {
    vocab:
        {
            term: String,
            translations: String[]
        }[]
}

export default function VocabTable(props: VocabTableProps) {
    const colorScheme = useColorScheme();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vocabulary</Text>
            <View style={[styles.table, { borderColor: Colors[colorScheme].tint }]}>
                <View style={[styles.tableRow, { borderColor: Colors[colorScheme].tint }]}>
                    <Text style={[styles.ColOne, { fontWeight: 'bold', borderColor: Colors[colorScheme].tint }]}>
                        Word
                    </Text>
                    <Text style={[styles.ColTwo, { fontWeight: 'bold', borderColor: Colors[colorScheme].tint }]}>
                        Definition
                    </Text>
                </View>
                {
                    props.vocab.map((item, index) => (
                        <View style={[styles.tableRow, { borderColor: Colors[colorScheme].tint }]} key={index}>
                            <Text style={[styles.ColOne, { borderColor: Colors[colorScheme].tint }]}>
                                {item.term}
                            </Text>
                            <Text style={[styles.ColTwo, { borderColor: Colors[colorScheme].tint }]}>
                                {item.translations}
                            </Text>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}