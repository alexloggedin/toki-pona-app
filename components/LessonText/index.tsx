import React from 'react'
import styles from './styles'
import { View, Text } from '../Themed'
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

interface LessonTextProps{
    text: String
}

export default function LessonText(props: LessonTextProps) {
    const colorScheme = useColorScheme();

    const generateText = (text: String) => {

        const lines: JSX.Element[] = text.split('\n').map((e, i) => {
            let spacer = {
                paddingHorizontal: 0,
                marginRight: 0,
                backgroundColor: Colors[colorScheme].tint
            }
            let textStyle = {
                fontStyle: 'normal',
                fontSize: 20
            }

            if (e[0] === '>') {
                e = e.substring(1)
                spacer.paddingHorizontal=2
                spacer.marginRight=10
                textStyle.fontStyle = 'italic'
                textStyle.fontSize = 16
                
            }

            return (
                <View style={styles.textBox}>
                    <View style={spacer}>
                    </View>
                    <Text key={i} style={textStyle}>
                            {e}
                        </Text>
                </View>
            )
        });
        return lines
    }

    return (
        <View style={styles.container}>
            {generateText(props.text)}
        </View>
    )
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