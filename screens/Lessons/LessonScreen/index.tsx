import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import LessonText from '../../../components/LessonText'
import { View, Text } from '../../../components/Themed'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import VocabTable from '../../../components/VocabTable'
import styles from './styles'
import YoutubePlayer from 'react-native-youtube-iframe'
import Data from '../../../assets/data/lessons.json'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

interface LessonScreenProps {
    route: {
        params: {
            LessonId: number
        }
    }
}

export default function LessonScreen(props: LessonScreenProps) {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    const ref = React.useRef(null);
    const [playing, setPlaying] = React.useState(false);
    const id = props.route.params.LessonId
    const { title, subtitle, video_id, vocab, lesson } = Data["lessons"][id]


    const onStateChange = React.useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const nextPage = () => {
        navigation.navigate('Lesson', { LessonId: id + 1 })
        ref.current.scrollTo({ x: 0, y: 0, animated: true })
    }
    const lastPage = () => {
        navigation.navigate('Lesson', { LessonId: id - 1 })
        ref.current.scrollTo({ x: 0, y: 0, animated: true })
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ width: "100%" }}
                showsVerticalScrollIndicator={false}
                ref={ref}
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={[styles.subtitle, { color: Colors[colorScheme].tint }]}>{subtitle}</Text>
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
                <LessonText text={lesson} />
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => lastPage()}>
                        <View style={[styles.link, { backgroundColor: Colors[colorScheme].tint }]}>
                            <Ionicons name="chevron-back-outline" size={16} color="black" />
                            <Text style={styles.linkText}>Prev Lesson</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => nextPage()}>
                        <View style={[styles.link, { backgroundColor: Colors[colorScheme].tint }]}>
                            <Text style={styles.linkText}>Next Lesson</Text>
                            <Ionicons name="chevron-forward-outline" size={16} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
