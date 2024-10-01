import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>IMDb</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#121212',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    backgroundColor: '#E2B616',
    color: '#121212',
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontWeight: 'bold',
  },
});
