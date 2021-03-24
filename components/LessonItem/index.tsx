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
    lessonId: number,
    imageUri: String,
    title: String,
    subtitle: String
}

export default function LessonItem(props: LessonItemProps) {

    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    return (
        <View style={[styles.container,  { backgroundColor: Colors[colorScheme].offset }]}>
            <TouchableOpacity onPress={() => navigation.navigate('Lesson', { LessonId: props.lessonId })} style={styles.content}>
                <View style={[styles.imageContainer, { backgroundColor: Colors[colorScheme].offset, borderColor: Colors[colorScheme].tint }]}>
                    <Image
                        source={require('../../assets/images/toki_pona_logo.png')}
                        style={styles.lessonImage}
                        resizeMode='contain'
                    />
                </View>
                <View style={[styles.titleContainer,  { backgroundColor: Colors[colorScheme].offset }]}>
                    <Text style={styles.title}>
                        {props.title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {props.subtitle}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}