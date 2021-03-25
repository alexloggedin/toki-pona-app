import React from 'react'
import { KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import AnnotatedText from '../../../components/AnnotatedText'
import { View, Text } from '../../../components/Themed'
import { PracticeStackParamList } from '../../../types'
import { ProgressBar } from 'react-native-paper';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import styles from './styles'

export default function PhraseScreen(props: PracticeStackParamList['Page']) {
    const colorScheme = useColorScheme();
    const { index, inToki, problem, guesses } = props;
    const [text, setText] = React.useState('')
    const [correct, setCorrect] = React.useState(false)
    console.log('Phrase:\n', JSON.stringify(props, null, 4))

    const checkAnswer = () => {
        if (text.includes('@'))
            return true
        else {
            return false
        }
    }

    const handleSubmit = () => {
        guesses[index]++
        setCorrect(checkAnswer())

    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={styles.header}>
                    <Ionicons name="close" size={24} color="black" style={styles.close} />
                    <ProgressBar progress={(index + 1) / (inToki.length)} color={Colors[colorScheme].tint} style={styles.bar} />
                    <Text style={styles.numerical}>
                        {index + 1} / {inToki.length}
                    </Text>
                </View>
                <View style={styles.prompt}>
                    <AnnotatedText style={{ fontSize: 28 }}>{problem.toki}</AnnotatedText>
                </View>
                <View style={styles.answerBox}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setText}
                        value={text}
                        placeholder={inToki[index] ? 'Answer in English' : 'Answer in Toki Pona'}
                        placeholderTextColor='gray'
                        autoCorrect={false}
                        returnKeyType='done'
                    />
                    <TouchableOpacity>
                        <Text>
                            Submit Answer
                        </Text>
                    </TouchableOpacity>
                    <View>
                        <Text>
                            {correct ? 'Correct' : 'Incorrect'}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text>
                        Next Question
                        </Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>
    )
}
