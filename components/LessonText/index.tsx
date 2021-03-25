import React from 'react'
import styles from './styles'
import { View, Text } from '../Themed'
import { StyleSheet } from 'react-native'
import Markdown from 'react-native-markdown-display'
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

interface LessonTextProps {
    text: String
}

export default function LessonText(props: LessonTextProps) {
    const colorScheme = useColorScheme();

    const MDstyle = StyleSheet.create({
        body: {
            backgroundColor: Colors[colorScheme].background
        },
        heading2: {
            marginVertical: 10,
            backgroundColor: Colors[colorScheme].tint,
            justifyContent: 'center',
            fontWeight: 'normal',
            padding: 5,
            borderRadius: 50
        },
        heading4: {
            marginVertical: 2,
            fontWeight: 'bold',
            padding: 5,
            borderRadius: 50
        },
        blockquote: {
            backgroundColor: Colors[colorScheme].offset,
            borderLeftColor: Colors[colorScheme].tint,
            borderRadius: 5,
            marginVertical: 5,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        bullet_list_icon: {
            color: Colors[colorScheme].tint,
            fontSize: 20,
            fontWeight: 'bold'
        },
        text: {
            color: Colors[colorScheme].text
        },
        strong: {
            fontWeight: 'bold',
            color: Colors[colorScheme].tint
        }
    })

    return (
        <View style={styles.container}>
            <Markdown style={MDstyle}>
                {props.text}
            </Markdown>
        </View>
    )
}