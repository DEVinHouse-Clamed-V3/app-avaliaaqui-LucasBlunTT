import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

interface RouteParams {
  id?: number; // ID opcional
}

export default function Avaliation() {
  const route = useRoute();
  const params = route.params as RouteParams; // Faça o cast para RouteParams
  const id = params?.id; // Use optional chaining para evitar o erro

  return (
    <View style={styles.container}>
      {id ? (
        <Text>Avaliando o produto com ID: {id}</Text>
      ) : (
        <Text>Selecione um produto para avaliar</Text>
      )}
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
