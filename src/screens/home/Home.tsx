import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from './stylesHome';

export default function Home() {
  

  return (
    <ScrollView style={styles.containerScroll} contentContainerStyle={{ padding: 16 }}>
      <Text variant="titleLarge" style={{ marginBottom: 16, color: '#220641', fontSize: 25, fontWeight: 'bold' }}>
        Gerencie seu Negócio. Login feito 2
      </Text>
      
    </ScrollView>
  );
}