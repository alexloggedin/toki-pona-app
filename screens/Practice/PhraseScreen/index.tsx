import React from 'react'
import { KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import AnnotatedText from '../../../components/AnnotatedText'
import { View, Text } from '../../../components/Themed'
import { PracticeParamList, PracticeStackParamList } from '../../../types'
import { ProgressBar } from 'react-native-paper';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

interface PhraseScreenProps {
    route: {
        params: {
            index: number,
            guesses: number[],
            inToki: Boolean[],
            problems: PracticeParamList['PracticePhrases']["exercise"]['problems'] | PracticeParamList['PracticeVocab']['vocab'],
            exit: {
                stack: string,
                screen: string
                params?: {
                    LessonId: number
                }
            }
        }
    }

}

export default function PhraseScreen(props: PhraseScreenProps) {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    const { index, inToki, problems, guesses, exit } = props.route.params;
    const [text, setText] = React.useState('')
    const [correct, setCorrect] = React.useState(false)
    const [isSubmit, setSumbit] = React.useState(false)

    const checkAnswer = () => {
        // if (text.includes('@'))
        //     return true
        // else {
        //     return false
        // }
        return true
    }

    const navigateAway = () => {
        const { stack, screen, params } = exit;
        if (props.route.params.exit.params) {
            navigation.navigate(stack, { screen })
        } else {
            navigation.navigate(stack, { screen, params })
        }
    }

    const renderAnswer = () => {
        const color = correct ? 'green' : 'red'
        const name = correct ? 'checkmark' : 'close'
        const backgroundColor = correct ? 'lightgreen' : '#ffb3b3'
        return (
            <View style={[styles.confirmation, { backgroundColor }]}>
                <Ionicons name={name} size={32} color={color} />
                <Text style={{ color, fontWeight: 'bold', marginHorizontal: 10 }}>
                    {correct ? 'Correct!' : 'Incorrect!'}
                </Text>
            </View>
        )
    }

    const handleSubmit = () => {
        setCorrect(checkAnswer())
        setSumbit(true)
        if (!correct) {
            guesses[index]++
        } else {
            setText('')
            setCorrect(false)
            setSumbit(false)
            if (index === problems.length - 1) {
                navigation.navigate('Results', {
                    guesses: guesses,
                    exit: exit
                })
            } else {
                navigation.navigate('Page', {
                    index: index + 1,
                    guesses: guesses,
                    inToki: inToki,
                    problems: problems,
                    exit: exit
                })
            }
        }

    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, width: '100%' }}>
                <View style={styles.header}>
                    <Ionicons name="close" size={48} color={Colors[colorScheme].text} style={styles.close} onPress={navigateAway} />
                    <View style={styles.bar}>
                        <ProgressBar
                            progress={(index) / (inToki.length)}
                            color={Colors[colorScheme].tint}
                            style={{ height: 10, borderRadius: 20 }} />
                    </View>
                    <View style={styles.numerical}>
                        <Image
                            source={require('../../../assets/images/toki_pona_logo.png')}
                            style={styles.logo}
                            resizeMode='contain'
                        />
                    </View>
                </View>
                <View style={[styles.content, { backgroundColor: Colors[colorScheme].offset }]}>
                    <Text style={styles.title}>Translate This Sentence</Text>
                    <AnnotatedText style={{ fontSize: 28, backgroundColor: Colors[colorScheme].offset }}>{problems[index].toki}</AnnotatedText>
                    <TextInput
                        style={[styles.input, { backgroundColor: Colors[colorScheme].offset, color: Colors[colorScheme].text, borderColor: Colors[colorScheme].tint }]}
                        onChangeText={setText}
                        onSubmitEditing={handleSubmit}
                        value={text}
                        placeholder={inToki[index] ? 'Answer in English' : 'Answer in Toki Pona'}
                        placeholderTextColor='gray'
                        autoCorrect={false}
                        returnKeyType='done'
                    />
                    {isSubmit && renderAnswer()}
                    <Text>{` Index: ${index}\n Length: ${problems[problems.length - 1].toki} \n Guesses: ${guesses[index]}`}</Text>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={handleSubmit} style={[styles.submit, { backgroundColor: Colors[colorScheme].tint }]}>
                        <Text style={[styles.submitText, { color: 'white' }]}>
                            {correct ? 'Continue' : 'Check'}
                        </Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        </View>
    )
}
