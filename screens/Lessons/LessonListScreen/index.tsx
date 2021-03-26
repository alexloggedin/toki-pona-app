import React from 'react'
import { ImageBackground, Image, FlatList } from 'react-native'
import { View, Text } from '../../../components/Themed'
import LessonItem from '../../../components/LessonItem';
import styles from './styles'
import Data from '../../../assets/data/lessons.json'

export default function LessonListScreen() {
    const [data, setData] = React.useState(Data.lessons)
    return (
        <View style={[styles.container]}>
            <FlatList
                data={data}
                ListHeaderComponent={<Text>Lessons</Text>}
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