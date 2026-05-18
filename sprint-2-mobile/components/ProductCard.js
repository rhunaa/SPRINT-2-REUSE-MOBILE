import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {product.image ? (
        <Image source={{ uri: product.image }} style={styles.image} />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>♻</Text>
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {product.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 12,
    flexDirection: 'row',
    gap: 12,
  },

  image: {
    width: 88,
    height: 88,
    borderRadius: 18,
  },

  imagePlaceholder: {
    width: 88,
    height: 88,
    borderRadius: 18,
    backgroundColor: '#CFEED8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  placeholderText: {
    fontSize: 24,
    color: '#1F5D35',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  name: {
    fontSize: 17,
    fontWeight: '900',
    color: '#1F2D22',
  },

  category: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1F5D35',
    marginTop: 4,
  },

  description: {
    fontSize: 13,
    lineHeight: 18,
    color: '#68736B',
    marginTop: 6,
  },
});