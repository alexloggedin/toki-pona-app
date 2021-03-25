import React from 'react'
import { View, Text } from '../../../components/Themed'
import {TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

export default function PracticeMenu() {
    const navigation = useNavigation();
    // Generate List of random exercises based on input
    // Either link to vocab or translate practice

    return (
        <View style={styles.container}>
            <Text>Create A Practice Here</Text>
        </View>
    )
}