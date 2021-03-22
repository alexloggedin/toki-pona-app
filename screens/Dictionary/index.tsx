import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from '../../components/Themed';
import { TextInput, FlatList } from 'react-native'
import styles from './styles'
import DictionaryItem from '../../components/DictionaryItem';
import dictionary from '../../assets/data/dictionary.json'

export default function DictionaryScreen() {
  const [search, setSearch] = React.useState('');
  const [filteredDataSource, setFilteredDataSource] = React.useState(dictionary.words);
  const [includePhrases, setIncludePhrases] = React.useState(true)

  const searchFilterFunction = (text: string) => {
    // Check if searched text is not blank
    if (text) {
      text = text.toLowerCase()
      const newData = dictionary.words.filter(function (item) {
        const toki = item.entry.form
        const def = item.translations[0].forms[0]
        const hasToki = toki.includes(text)
        const hasDef = def.includes(text)
        return hasDef || hasToki;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(dictionary.words);
      setSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={30} />
        <TextInput
          style={styles.input}
          onChangeText={searchFilterFunction}
          value={search}
          placeholder='Search'
          placeholderTextColor='gray'
          autoCorrect={false}
          returnKeyType='search'
        />
      </View>
      <View style={styles.list}>
      <FlatList 
        data={filteredDataSource}
        keyExtractor={(word) => word.entry.id.toString()}
        renderItem={({ item }) => (
          <DictionaryItem word={item} />
        )}
        ListEmptyComponent={() => <Text style={styles.empty}>No Words Found :(</Text>}
      />
      </View>
    </View>
  );
}
