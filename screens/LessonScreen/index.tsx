import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import LessonText from '../../components/LessonText'
import { View, Text } from '../../components/Themed'
import { Alert } from 'react-native'
import VocabTable from '../../components/VocabTable'
import styles from './styles'
import YoutubePlayer from 'react-native-youtube-iframe'
import Data from '../../assets/data/lessons.json'

interface LessonScreenProps{
    route:{
        params:{
            LessonId: number
        }
    }
}

export default function LessonScreen(props: LessonScreenProps) {
    const [playing, setPlaying] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);
    const id = props.route.params.LessonId
    const {title, subtitle ,video_id, vocab, lesson} = Data["lessons"][id]

    const onStateChange = React.useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView style={{width: "100%"}} showsVerticalScrollIndicator={false}>
                {/* Render Video
                Show Vocab Table
                Show Lesson
                Link to exercise
            */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                <View style={styles.video}>
                    <YoutubePlayer
                        height={300}
                        width={400}
                        play={playing}
                        videoId={video_id}
                        onChangeState={onStateChange}
                    />
                </View>
                <VocabTable vocab={vocab} />
                <LessonText text={lesson}/>
            </ScrollView>
        </View>
    )
}
