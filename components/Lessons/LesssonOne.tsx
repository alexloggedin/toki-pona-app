import React from 'react'
import styles from './styles'
import { View, Text } from '../Themed'

export default function LesssonOne() {
    return (
        <View style={styles.container}>
            <Text>{lesson}</Text>
        </View>
    )
}

const lesson = `Let's start with the most basic sentence structure in toki pona:

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