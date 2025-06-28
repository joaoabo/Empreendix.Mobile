import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

// Tipagem do produto
type Produto = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem?: string;
};

// Lista mockada (você pode substituir por dados reais)
const produtos: Produto[] = [
  {
    id: '1',
    nome: 'Bolo de Chocolate',
    descricao: 'Bolo fofinho com cobertura cremosa.',
    preco: 20.5,
  },
  {
    id: '2',
    nome: 'Pão de Queijo',
    descricao: 'Delicioso pão de queijo mineiro.',
    preco: 5.0,
  },
];

const ListaProdutos: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos Cadastrados</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title title={item.nome} />
            <Card.Content>
              <Text style={styles.descricao}>{item.descricao}</Text>
              <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

export default ListaProdutos;

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 12,
    borderRadius: 12,
  },
  descricao: {
    marginBottom: 4,
  },
  preco: {
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});
