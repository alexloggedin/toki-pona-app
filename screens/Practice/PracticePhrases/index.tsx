import React from 'react'
import { View, Text } from '../../../components/Themed'
import styles from './styles'
import { PracticeParamList, PracticeStackParamList } from "../../../types";
import { createStackNavigator } from '@react-navigation/stack';
import PhraseScreen from '../PhraseScreen';



const Practice = createStackNavigator<PracticeStackParamList>();

export default function PracticePhrases(props: PracticeParamList['PracticePhrases']) {
    let inToki: Boolean[] = []
    let guesses: number[] = []
    for (let index = 0; index < exercise.problems.length; index++) {
        inToki.push(Math.random() < 0.5);
        guesses.push(0)
    }

    return (
        <Practice.Navigator>
            <Practice.Screen
                name='Page'
                component={() =>
                    <PhraseScreen 
                        index={0}
                        guesses={guesses}
                        inToki={inToki}
                        problem={exercise.problems[0]}
                    />}
                options={{ headerShown: false }}
            />
        </Practice.Navigator>
    )
}

const exercise = JSON.parse(`{
    "type": "t",
    "problems": [
        {
            "english": "They are speaking to their father on a phone.",
            "toki": "ona li toki tawa mama mije ona kepeken ilo toki."
        },
        {
            "english": "I don't like sweet food / Sweet food is bad for me.",
            "toki": "moku suwi li ike tawa mi."
        },
        {
            "english": "My homeland is fighting (against) a neighboring country.",
            "toki": "ma mama mi li utala e ma poka."
        },
        {
            "english": "Your sister is my friend.",
            "toki": "meli sama sina li jan pona mi."
        },
        {
            "english": "A small bug is on your face.",
            "toki": "pipi lili li lon sinpin sina."
        },
        {
            "english": "You broke my car.",
            "toki": "sina pakala e tomo tawa mi."
        },
        {
            "english": "The man feeds ('gives out food to') children.",
            "toki": "(jan) mije li pana e moku tawa jan lili."
        },
        {
            "english": "I dislike this chat room ('talking structure').",
            "toki": "tomo toki ni li ike tawa mi."
        },
        {
            "english": "I fixed the house because of you.",
            "toki": "mi pona e tomo tan sina."
        },
        {
            "english": "They are reading books in the library.",
            "toki": "ona li lukin e lipu lon tomo lipu."
        }
    ]}`)
