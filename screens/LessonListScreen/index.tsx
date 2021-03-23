import React from 'react'
import { ImageBackground, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from '../../components/Themed'
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import LessonScreen from '../Lesson';
import styles from './styles'

export default function LessonListScreen() {
    return (
        <View style={[styles.container]}>
            <LessonScreen />
        </View>
    )
}


function LessonItem() {
    const colorScheme = useColorScheme();
    return (
        <View style={styles.lessonContainer}>
            <TouchableOpacity onPress={() => console.warn('Pressed')}>
                <View style={[styles.imageContainer, { backgroundColor: Colors[colorScheme].offset }]}>
                    <Image
                        source={require('../../assets/images/toki_pona_logo.png')}
                        style={styles.lessonImage}
                        resizeMode='contain'
                    />
                </View>
            </TouchableOpacity>
            <Text style={styles.lessonTitle}>Lesson 1</Text>
        </View>
    )
}

const lessonData = {
    id: -1,
    title: "Lesson X",
    subtitle: "X and X",
    toki_title: "A li A",
    video_id: "",
    icon_uri: "",
    vocab: [
        {
            "term": "",
            "translations": []
        }
    ],
    exercise: [
        {
            "question": "",
            "answer": ""
        }
    ],
    "completed": "false"
}