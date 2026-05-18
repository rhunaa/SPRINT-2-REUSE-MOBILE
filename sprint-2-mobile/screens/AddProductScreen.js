import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

import CustomButton from '../components/CustomButton';

export default function AddProductScreen({ onBack, onSave }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraOpen, setCameraOpen] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  async function openCamera() {
    if (!permission?.granted) {
      const result = await requestPermission();

      if (!result.granted) {
        Alert.alert('Permissão necessária', 'Permita o acesso à câmera para tirar foto do produto.');
        return;
      }
    }

    setCameraOpen(true);
  }

  async function takePicture() {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setImage(photo.uri);
      setCameraOpen(false);
    }
  }

  async function uploadImage() {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permissão necessária', 'Permita o acesso à galeria para enviar uma imagem do produto.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  async function saveProduct() {
    if (!name || !category || !description) {
      Alert.alert('Atenção', 'Preencha nome, categoria e descrição.');
      return;
    }

    const newProduct = {
      id: Date.now().toString(),
      name,
      category,
      description,
      image,
    };

    const data = await AsyncStorage.getItem('@reuse_products');
    const products = data ? JSON.parse(data) : [];

    const updatedProducts = [newProduct, ...products];

    await AsyncStorage.setItem('@reuse_products', JSON.stringify(updatedProducts));

    Alert.alert('Produto salvo', 'O produto foi cadastrado com sucesso!');
    onSave();
  }

  if (cameraOpen) {
    return (
      <View style={styles.cameraContainer}>
        <CameraView
          style={styles.camera}
          ref={(ref) => setCameraRef(ref)}
          facing="back"
        />

        <View style={styles.cameraActions}>
          <CustomButton title="Tirar foto" onPress={takePicture} />

          <Text style={styles.cancelCamera} onPress={() => setCameraOpen(false)}>
            Cancelar
          </Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.back} onPress={onBack}>← Voltar</Text>

        <Text style={styles.title}>Cadastrar produto</Text>
        <Text style={styles.subtitle}>
          Adicione um item para doação ou troca.
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do produto"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Categoria"
            value={category}
            onChangeText={setCategory}
          />

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Descrição"
            value={description}
            onChangeText={setDescription}
            multiline
          />

          {image && (
            <Image source={{ uri: image }} style={styles.preview} />
          )}

          <CustomButton title="Tirar foto do produto" onPress={openCamera} />

          <CustomButton title="Fazer upload da imagem" onPress={uploadImage} />

          <CustomButton title="Salvar produto" onPress={saveProduct} />
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

  form: {
    gap: 14,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    fontSize: 15,
    color: '#1F2D22',
  },

  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },

  preview: {
    width: '100%',
    height: 220,
    borderRadius: 22,
  },

  cameraContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },

  camera: {
    flex: 1,
  },

  cameraActions: {
    padding: 22,
    backgroundColor: '#F3FAF4',
  },

  cancelCamera: {
    textAlign: 'center',
    marginTop: 16,
    color: '#1F5D35',
    fontWeight: '700',
  },
});