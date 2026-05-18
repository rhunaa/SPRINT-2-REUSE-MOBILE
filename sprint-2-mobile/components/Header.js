import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>R</Text>
        </View>

        <Text style={styles.appName}>ReUse</Text>

        <View style={styles.menu}>
          <Text style={styles.menuText}>•••</Text>
        </View>
      </View>

      <Text style={styles.title}>Olá!</Text>

      <Text style={styles.subtitle}>
        Reutilize, doe e troque produtos de forma simples e sustentável.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 26,
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },

  logo: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#263A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoText: {
    color: '#FFFFFF',
    fontWeight: '800',
  },

  appName: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '700',
    color: '#263A2A',
  },

  menu: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuText: {
    color: '#263A2A',
    fontWeight: '700',
  },

  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#1F2D22',
  },

  subtitle: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: '#6B756D',
  },
});