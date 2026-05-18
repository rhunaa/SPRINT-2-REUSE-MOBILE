import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1F2D22',
    paddingVertical: 17,
    borderRadius: 28,
    alignItems: 'center',
    marginTop: 10,
  },

  text: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});