import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useColorScheme,
  ScrollView,
} from 'react-native';

export default function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
          Hello, world!
        </Text>
      </View>
      <ScrollView style={styles.card1container} horizontal={true}>
        {data.map(item => {
          return (
            <View>
              <Text key={item} style={styles.card1}>
                {item}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <ScrollView style={styles.card2container}>
        {data.map(item => {
          return (
            <View>
              <Text key={item} style={styles.card2}>
                {item}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  blackText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  card1: {
    fontSize: 20,
    fontWeight: 'bold',
    height: 100,
    width: 100,
    backgroundColor: 'gray',
    margin: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 100,
  },
  card1container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
  },
  card2: {
    fontSize: 20,
    fontWeight: 'bold',
    height: 100,
    width: 400,
    backgroundColor: 'gray',
    margin: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  card2container: {
    margin: 10,
  },
});
