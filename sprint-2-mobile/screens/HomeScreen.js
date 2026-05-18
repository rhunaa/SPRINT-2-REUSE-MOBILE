import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';

import Header from '../components/Header';
import CustomButton from '../components/CustomButton';

export default function HomeScreen({ onStart }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Header />

        <View style={styles.grid}>
          <View style={styles.cardGreen}>
            <Text style={styles.icon}>♻️</Text>
            <Text style={styles.cardTitle}>Doar</Text>
            <Text style={styles.cardText}>
              Dê uma nova vida para produtos que você não usa mais.
            </Text>
          </View>

          <View style={styles.cardYellow}>
            <Text style={styles.icon}>🔄</Text>
            <Text style={styles.cardTitle}>Trocar</Text>
            <Text style={styles.cardText}>
              Encontre pessoas interessadas em trocar itens de forma consciente.
            </Text>
          </View>
        </View>

        <View style={styles.darkCard}>
          <Text style={styles.darkIcon}>🌱</Text>
          <Text style={styles.darkTitle}>Consumo consciente</Text>
          <Text style={styles.darkText}>
            O ReUse ajuda a reduzir o desperdício conectando pessoas e produtos que ainda podem ser utilizados.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Impacto da comunidade</Text>

          <View style={styles.impactCard}>
            <Text style={styles.label}>Produtos reutilizados</Text>
            <Text style={styles.number}>+2.450</Text>
            <Text style={styles.description}>
              Itens que poderiam ser descartados ganharam uma nova utilidade.
            </Text>

            <View style={styles.bars}>
              <View style={[styles.bar, styles.barSmall]} />
              <View style={[styles.bar, styles.barMedium]} />
              <View style={[styles.bar, styles.barLarge]} />
              <View style={[styles.bar, styles.barMedium]} />
            </View>
          </View>
        </View>

        <CustomButton title="Ver produtos" onPress={onStart} />
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

  grid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 14,
  },

  cardGreen: {
    flex: 1,
    minHeight: 155,
    backgroundColor: '#CFEED8',
    borderRadius: 24,
    padding: 18,
    justifyContent: 'space-between',
  },

  cardYellow: {
    flex: 1,
    minHeight: 155,
    backgroundColor: '#FFF1B8',
    borderRadius: 24,
    padding: 18,
    justifyContent: 'space-between',
  },

  icon: {
    fontSize: 24,
    marginBottom: 16,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#263A2A',
    marginBottom: 8,
  },

  cardText: {
    fontSize: 13,
    lineHeight: 19,
    color: '#526156',
  },

  darkCard: {
    backgroundColor: '#263A2A',
    borderRadius: 24,
    padding: 18,
    minHeight: 170,
  },

  darkIcon: {
    fontSize: 24,
    marginBottom: 16,
  },

  darkTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 10,
  },

  darkText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#DDEFE2',
  },

  section: {
    marginTop: 22,
    marginBottom: 22,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#263A2A',
    marginBottom: 12,
  },

  impactCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    padding: 20,
  },

  label: {
    fontSize: 13,
    color: '#7B857E',
    marginBottom: 6,
  },

  number: {
    fontSize: 32,
    fontWeight: '800',
    color: '#263A2A',
  },

  description: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
    color: '#6B756D',
  },

  bars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
    marginTop: 22,
  },

  bar: {
    width: 42,
    borderRadius: 18,
    backgroundColor: '#CFEED8',
  },

  barSmall: {
    height: 46,
  },

  barMedium: {
    height: 72,
  },

  barLarge: {
    height: 96,
  },
});