import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from '../../components/Themed';
import { TextInput, FlatList, Switch } from 'react-native'
import styles from './styles'
import DictionaryItem from '../../components/DictionaryItem';
import dictionary from '../../assets/data/dictionary.json'
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

export default function DictionaryScreen() {
  const colorScheme = useColorScheme();
  const [search, setSearch] = React.useState('');
  const [filteredDataSource, setFilteredDataSource] = React.useState(dictionary.words.slice(8));
  const [inToki, setInToki] = React.useState(false)

  const toggle = () => {
    setInToki(!inToki)
    searchFilterFunction(search);
  }

  const searchFilterFunction = (text: string) => {
    // Check if searched text is not blank
    if (text) {
      text = text.toLowerCase()
      const newData = dictionary.words.filter(function (item) {
        const toki = item.entry.form
        const def = item.translations[0].forms[0]
        const hasToki = toki.includes(text)
        const hasDef = def.includes(text)
        return (hasDef && !inToki) || hasToki;
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
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={inToki ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggle}
          value={inToki}
        />
      </View>
      <View style={styles.list}>
        <FlatList
          ListHeaderComponent={() => <Text style={{ alignSelf: 'center' }}>Showing results for {inToki ? 'toki pona' : 'english and toki pona'}</Text>}
          data={filteredDataSource}
          keyExtractor={(word) => word.entry.id.toString()}
          renderItem={({ item }) => (
            <DictionaryItem word={item} />
          )}
          ListEmptyComponent={() => <Text style={styles.empty}>No Words Found </Text>}
        />
      </View>
    </View>
  );
}
