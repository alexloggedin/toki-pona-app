import React from 'react'
import { ImageBackground, Image, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from '../../components/Themed'
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import LessonItem from '../../components/LessonItem';
import styles from './styles'
import { LessonsParamList } from '../../types'
import { useNavigation } from '@react-navigation/native';
import Data from '../../assets/data/lessons.json'

export default function LessonListScreen() {
    const [data, setData] = React.useState(Data.lessons)
    return (
        <View style={[styles.container]}>
            <FlatList
                data={data}
                keyExtractor={(item) => (item.id)}
                renderItem={(item) => (
                <LessonItem
                    title={item.item.title}
                    lessonId={item.item.id}
                    imageUri={item.item.icon_uri}
                    completed={item.item.completed}
                    
                />)}
            />
        </View>
    )
}

interface LessonItemProps {
    lessonId: number, 
    imageUri: String, 
    title: String, 
    completed: Boolean
}