const a = `To define subjects and adjectives more clearly, you can add extra words as
adjectives. In toki pona, an adjective that modifies a noun stands after the
noun in question. This is unlike English, where adjectives go before nouns, but
similar to French. So, for example:

> jan wawa -- strong person

Many of the nouns covered before can also function as adjectives. For example,
the pronouns "mi", "sina" and "ona" can serve as possessives.

> mama mi -- my parent

> soweli sina -- your animal

> moku ona -- his/her/their food 

In addition, adjectives can function as nouns:

> wawa sina -- your strength

> suli ona -- his/her/their greatness/size

> %info%
> Of note is the phrase "jan pona", which literally means "good person", but is
> widely (and officially) accepted to also mean "friend".

Several adjectives can be added at once:

> soweli lili suwi -- cute pet ("little animal")

Here are some example sentences that demonstrate this:

> mama mi li pona. - My parents are good.

> kili suwi li moku pona. - Sweet fruits are good food.

> jan utala li wawa. - The warrior ("fighting person") is strong.

> jan lili mi li suwi. - My children ("young people") are cute.

> soweli lili li wawa ala. - Little animals are not strong.

> %warning%
> It is worth noting that the particle "li" is only removed if the subject is
> just the word "mi" or "sina". If it has any adjectives added to it, then the
> particle is used.`

t = a.split('\n')

console.log('[')
for (const l of t) {
    console.log(`"${l}",`)
}
console.log(']')