import React from 'react'
import { View, Text } from '../Themed'
import styles from './styles'
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

export default function VocabTable() {
    const colorScheme = useColorScheme();
    return (
        <View style={styles.container}>
            <Text>Vocab</Text>
            <View style={[styles.table, {borderColor: Colors[colorScheme].tint}]}>
                <View style={[styles.tableRow,{borderColor: Colors[colorScheme].tint}]}>
                    <Text style={[styles.ColOne, {fontWeight: 'bold', borderColor: Colors[colorScheme].tint}]}>
                        Word
                    </Text>
                    <Text style={[styles.ColTwo, {fontWeight: 'bold',borderColor: Colors[colorScheme].tint}]}>
                        Definition
                    </Text>
                </View>
            </View>
        </View>
    )
}

const vocab = [
        {
            term: "mi",
            translations: [	"I", "me", "us"]
        }
    ]
