import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import LesssonOne from '../../components/Lessons/LesssonOne'
import { View, Text } from '../../components/Themed'
import { Button } from 'react-native'
import VocabTable from '../../components/VocabTable'
import styles from './styles'
import YoutubePlayer from 'react-native-youtube-iframe'

export default function LessonScreen() {
    const [playing, setPlaying] = React.useState(false);
    const [hidden, setHidden] = React.useState(false)

    const onStateChange = React.useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Render Video
                Show Vocab Table
                Show Lesson
                Link to exercise
            */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Title</Text>
                    <Text style={styles.subtitle}>subtitle</Text>
                </View>
                <View style={styles.video}>
                    <YoutubePlayer
                        height={300}
                        width={400}
                        play={playing}
                        videoId={"4L-dvvng4Zc"}
                        onChangeState={onStateChange}
                    />
                </View>
                <VocabTable />
                <LesssonOne />
            </ScrollView>
        </View>
    )
}

const lessonData = {
    id: -1,
    title: "Lesson X",
    subtitle: "X and X",
    toki_title: "A li A",
    video_id: "",
    icon_uri: "",
    vocab: [
        {
            "term": "",
            "translations": []
        }
    ],
    exercise: [
        {
            "question": "",
            "answer": ""
        }
    ],
    "completed": "false"
}