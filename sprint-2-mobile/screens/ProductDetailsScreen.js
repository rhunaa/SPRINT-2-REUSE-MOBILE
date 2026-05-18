import React from 'react';
import { SafeAreaView, ScrollView, Text, Image, View, StyleSheet } from 'react-native';

export default function ProductDetailsScreen({ product, onBack }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.back} onPress={onBack}>← Voltar</Text>

        {product?.image ? (
          <Image source={{ uri: product.image }} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.placeholderText}>Sem imagem</Text>
          </View>
        )}

        <Text style={styles.title}>{product?.name}</Text>

        <View style={styles.tag}>
          <Text style={styles.tagText}>{product?.category}</Text>
        </View>

        <Text style={styles.sectionTitle}>Descrição</Text>

        <Text style={styles.description}>{product?.description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3FAF4',
  },

  container: {
    padding: 22,
    paddingBottom: 40,
  },

  back: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1F5D35',
    marginBottom: 18,
  },

  image: {
    width: '100%',
    height: 260,
    borderRadius: 28,
    marginBottom: 22,
  },

  imagePlaceholder: {
    width: '100%',
    height: 260,
    borderRadius: 28,
    backgroundColor: '#D8F2DD',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },

  placeholderText: {
    color: '#1F5D35',
    fontWeight: '800',
  },

  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#1F2D22',
    marginBottom: 12,
  },

  tag: {
    alignSelf: 'flex-start',
    backgroundColor: '#CFEED8',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginBottom: 24,
  },

  tagText: {
    color: '#1F5D35',
    fontWeight: '800',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1F2D22',
    marginBottom: 8,
  },

  description: {
    fontSize: 15,
    lineHeight: 23,
    color: '#68736B',
  },
});