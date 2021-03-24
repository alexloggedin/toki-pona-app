import React from 'react'
import styles from './styles'
import { View, Text } from '../Themed'
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

interface LessonTextProps {
    text: String[]
}

export default function LessonText(props: LessonTextProps) {
    const colorScheme = useColorScheme();
    const generateText = (text: String[]) => {
        return (text.map((line, i) => {
            let textBox = {
                flexDirection: 'row',
                alignContent: 'center',
                width: '95%',
                marginHorizontal: 10,
                marginVertical: 5
            }
            let spacer = {
                paddingHorizontal: 0,
                marginRight: 0,
                backgroundColor: Colors[colorScheme].tint
            }
            let textStyle = {
                fontStyle: 'normal',
                fontSize: 18,
                backgroundColor: Colors[colorScheme].background,
                justifyContent: 'center'
            }
            switch (line[0]) {
                case '>':
                    line = line.substring(1)
                    spacer.paddingHorizontal = 2
                    spacer.marginRight = 10
                    textStyle.fontStyle = 'italic'
                    textStyle.fontSize = 16
                    textStyle.backgroundColor = Colors[colorScheme].offset
                    textStyle.padding = 4
                    break;
                case '#':
                    line = line.substring(2)
                    spacer.display = 'hidden'
                    textStyle.fontWeight = 'bold'
                    textStyle.padding = 10
                    textStyle.borderRadius = 50
                    textStyle.overflow = 'hidden'
                    textStyle.fontSize = 20
                    textStyle.justifyContent = 'center'
                    textStyle.flex = 1,
                    textStyle.textAlign = 'center'
                    textStyle.color = 'black'
                    textStyle.backgroundColor = Colors[colorScheme].tint
                    break;
                case '*':
                    line = line.substring(1)
                    spacer.paddingHorizontal = 2
                    spacer.marginRight = 10
                    textStyle.fontStyle = 'italic'
                    textStyle.fontSize = 16
                    break;
                default:
                    break;
            }
            return (
                <View key={i} style={textBox}>
                    <View style={spacer}>
                    </View>
                    <Text key={i} style={textStyle}>
                        {line}
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