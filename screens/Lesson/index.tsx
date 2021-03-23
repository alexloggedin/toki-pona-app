import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import LessonText from '../../components/LessonText'
import { View, Text } from '../../components/Themed'
import { Alert } from 'react-native'
import VocabTable from '../../components/VocabTable'
import styles from './styles'
import YoutubePlayer from 'react-native-youtube-iframe'

interface LessonScreenProps{
    LessonId: Number
}

export default function LessonScreen(props: LessonScreenProps) {
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
                <LessonText text={lesson}/>
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

const lesson =
    `Let's start with the most basic sentence structure in toki pona:

> [noun] li [noun / adjective].

In English, this would mean:

> [Noun] is (a) [noun].

or 

> [Noun] is [adjective].

For example:

> ona li suli. - (He/she/it/they) is (big/great/important).

As you can see, a single word can have multiple related meanings. In practical
usage, both "ona" and "suli" will be more clear based on context.

> kili li pona. - (Fruit/vegetable/mushroom)(s) (is/are) good.

And in this case, it doesn't make a lot of sense to use any meaning of "pona"
other than "good".

There is an exception to the rule. If the subject is "mi" or "sina", then it is
not necessary to add the word "li". So, instead of

> sina li suli. - You are important.

it's

> sina suli. - You are important.`