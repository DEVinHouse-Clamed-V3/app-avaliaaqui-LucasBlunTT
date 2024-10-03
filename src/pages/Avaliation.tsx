import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

export default function Avaliation() {
  const route = useRoute();
  const { id } = route.params as { id: number }; // Ajuste o tipo conforme necessário

  return (
    <View style={styles.container}>
      <Text>Avaliando o produto com ID: {id}</Text>
      {/* Aqui você pode implementar a lógica de avaliação */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
