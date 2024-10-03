import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

interface ProductProps {
  id: number;
  name: string;
  price: string;
  brand: string;
  description: string;
  image: string;
}

export default function Product({
  id,
  name,
  price,
  brand,
  description,
  image,
}: ProductProps) {
  return (
    <View style={styles.productContainer} key={id}>
      <Image source={{ uri: image }} style={styles.productImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>${price}</Text>
        <Text style={styles.productBrand}>{brand}</Text>
        <Text style={styles.productDescription}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  infoContainer: {
    paddingVertical: 5,
  },
  productName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#FFD700',
    fontSize: 16,
    marginVertical: 5,
  },
  productBrand: {
    color: '#999',
    fontSize: 14,
  },
  productDescription: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 5,
  },
});
