import React from 'react'
import { View, Text } from '../../../components/Themed'
import styles from './styles'
import {PracticeParamList} from '../../../types'

export default function PracticeVocab(props: PracticeParamList["PracticeVocab"]) {
    return (
        <View style={styles.container}>
            <Text>Practice Vocab Here</Text>
        </View>
    )
}
