import React, { useCallback, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ProductCard from '../components/ProductCard';
import CustomButton from '../components/CustomButton';

export default function ProductListScreen({ onBack, onAdd, onDetails }) {
  const [products, setProducts] = useState([]);

  const loadProducts = useCallback(async () => {
    const data = await AsyncStorage.getItem('@reuse_products');
    const savedProducts = data ? JSON.parse(data) : [];
    setProducts(savedProducts);
  }, []);

  React.useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.back} onPress={onBack}>← Voltar</Text>

        <Text style={styles.title}>Produtos disponíveis</Text>
        <Text style={styles.subtitle}>
          Itens cadastrados para doação ou troca.
        </Text>

        <CustomButton title="Cadastrar produto" onPress={onAdd} />

        <View style={styles.list}>
          {products.length === 0 ? (
            <Text style={styles.empty}>Nenhum produto cadastrado ainda.</Text>
          ) : (
            products.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onPress={() => onDetails(item)}
              />
            ))
          )}
        </View>
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

  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#1F2D22',
  },

  subtitle: {
    marginTop: 8,
    marginBottom: 20,
    fontSize: 15,
    color: '#68736B',
  },

  list: {
    marginTop: 22,
    gap: 14,
  },

  empty: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    color: '#68736B',
    textAlign: 'center',
  },
});