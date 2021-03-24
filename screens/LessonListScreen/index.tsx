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
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => (item.id.toString())}
                renderItem={({item}) => (
                <LessonItem
                    title={item.title}
                    subtitle={item.subtitle}
                    lessonId={item.id}
                    imageUri={item.icon_uri}
                />)}
            />
        </View>
    )
}