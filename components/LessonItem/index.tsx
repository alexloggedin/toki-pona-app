import { NavigationProp } from '@react-navigation/core';
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from '../../components/Themed'
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import useColorScheme from '../../hooks/useColorScheme';
import styles from './styles'

interface LessonItemProps {
    lessonId: Number, 
    imageUri: String, 
    title: String, 
    completed: Boolean
}

export default function LessonItem(props: LessonItemProps) {

    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    return (
        <View style={styles.lessonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Lesson', {LessonId: props.lessonId})}>
                <View style={[styles.imageContainer, { backgroundColor: Colors[colorScheme].offset }]}>
                    <Image
                        source={require('../../assets/images/toki_pona_logo.png')}
                        style={styles.lessonImage}
                        resizeMode='contain'
                    />
                </View>
            </TouchableOpacity>
            <Text style={styles.lessonTitle}>{props.title}</Text>
        </View>
    )
}