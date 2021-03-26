import React from 'react'
import { KeyboardAvoidingView, Platform, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from '../../../components/Themed'
import { ProgressBar } from 'react-native-paper';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';
import { PracticeStackParamList } from '../../../types'
import styles from '../PhraseScreen/styles'
import { default as res } from './styles'

interface PracticeResultsProps {
    route: {
        params: {
            guesses: number[],
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

export default function PracticeResults(props: PracticeResultsProps) {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    const { guesses, exit } = props.route.params;

    const calculateCorrect = () => {
        let count = 0;
        guesses.forEach(e => {
            e == 1 ? count++ : count         
        });
        return count
    }

    const navigateAway = (i: number) => {
        const { stack, screen, params } = exit;
        if (props.route.params.exit.params) {
            navigation.navigate(stack, { screen })
        } else {
            navigation.navigate(stack, { screen, params: params?.LessonId+i })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, width: '100%' }}>
                    <View style={styles.header}>
                        <Ionicons name="close" size={48} color={Colors[colorScheme].text} style={styles.close} onPress={() => navigateAway(0)} />
                        <View style={styles.bar}>
                            <ProgressBar
                                progress={1}
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
                        <Text style={styles.title}>Results</Text>
                        <View style={[res.result, { borderColor: Colors[colorScheme].tint }]}>
                            <Text style={[res.ratio]}>{calculateCorrect()} / {guesses.length}</Text>
                            <Text style={[res.percent]}>{calculateCorrect() / guesses.length * 100}%</Text>
                        </View>
                        <Text style={res.caption}> Correct On The 1st Try</Text>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity onPress={() => navigateAway(1)} style={[styles.submit, { backgroundColor: Colors[colorScheme].tint }]}>
                            <Text style={[styles.submitText, { color: 'white' }]}>
                                {exit.params ? 'Next Lesson' : 'Exit'}
                        </Text>
                        </TouchableOpacity>
                    </View>

                </KeyboardAvoidingView>
            </View>
        </View>
    )
}
