import React from 'react'
import { ImageBackground, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from '../../components/Themed'
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import LessonItem from '../../components/LessonItem';
import styles from './styles'
import {LessonsParamList} from '../../types'
import { useNavigation } from '@react-navigation/native';
// Make import to call in data for flatlist

export default function LessonListScreen() {
    return (
        <View style={[styles.container]}>
            <LessonItem lessonId={1} 
            imageUri={'../../assets/images/toki_pona_logo.png'} 
            title={'Lesson X'} 
            completed={false}/>
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
    completed: false
}