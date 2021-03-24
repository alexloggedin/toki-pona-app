import React from 'react'
import styles from './styles'
import { View, Text } from '../Themed'
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

interface LessonTextProps{
    text: String[]
}

export default function LessonText(props: LessonTextProps) {
    const colorScheme = useColorScheme();
    const generateText = (text: String[]) => {

        return (text.map((e, i) => {
            let spacer = {
                paddingHorizontal: 0,
                marginRight: 0,
                backgroundColor: Colors[colorScheme].tint
            }
            let textStyle = {
                fontStyle: 'normal',
                fontSize: 20,
                backgroundColor: Colors[colorScheme].background
            }

            if (e[0] === '>') {
                e = e.substring(1)
                spacer.paddingHorizontal=2
                spacer.marginRight=10
                textStyle.fontStyle = 'italic'
                textStyle.fontSize = 16
            }

            return (
                <View key={i} style={styles.textBox}>
                    <View style={spacer}>
                    </View>
                    <Text key={i} style={textStyle}>
                            {e}
                        </Text>
                </View>
            )
        }))
    }

    return (
        <View style={styles.container}>
            {generateText(props.text)}
        </View>
    )
}