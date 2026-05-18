import React, { useState } from 'react';

import HomeScreen from './screens/HomeScreen';
import ProductListScreen from './screens/ProductListScreen';
import AddProductScreen from './screens/AddProductScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  function goToDetails(product) {
    setSelectedProduct(product);
    setScreen('details');
  }

  if (screen === 'list') {
    return (
      <ProductListScreen
        onBack={() => setScreen('home')}
        onAdd={() => setScreen('add')}
        onDetails={goToDetails}
      />
    );
  }

  if (screen === 'add') {
    return (
      <AddProductScreen
        onBack={() => setScreen('list')}
        onSave={() => setScreen('list')}
      />
    );
  }

  if (screen === 'details') {
    return (
      <ProductDetailsScreen
        product={selectedProduct}
        onBack={() => setScreen('list')}
      />
    );
  }

  return <HomeScreen onStart={() => setScreen('list')} />;
}