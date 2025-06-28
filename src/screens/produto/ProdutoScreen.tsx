import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { styles } from './stylesProduto';
import ListaProdutos from './ListaProduto';

export default function CadastroProduto() {
  const [nomePro, setNomePro] = useState('');
  const [descricao, setDescPro] = useState('');
  const [preco, setPrecoPro] = useState<number | null>(null);
  const [qtd, setQtdPro] = useState('');
  const [categoria, setCategoriaPro] = useState('');
  const [imagem, setImagemPro] = useState('');
  const [status, setStatusPro] = useState('');
  const [grupo, setGrupoPro] = useState('');



  return (
    <ScrollView style={styles.containerScroll} contentContainerStyle={{ padding: 16 }}>
      <View style={styles.container}>
         <Text style={styles.title}>Cadastro de produto 👋</Text>
        <Text style={styles.subtitle}>Digite o produto</Text>

        <TextInput
          label="Digite o produto"
          value={nomePro}
          onChangeText={setNomePro}
          style={styles.input}
        />
        <Text style={styles.subtitle}>Digite o valor de venda</Text>
        <TextInput
          label="Preço do produto"
          value={preco?.toString() || ''}
          onChangeText={(text) => setPrecoPro(Number(text))}
          style={styles.input}
          keyboardType="numeric"
        />


        <Button
          mode="contained"
          style={styles.button}
        >
          <Text>Salvar</Text>
        </Button>
      </View>
      <ListaProdutos/>
    </ScrollView>
  );
}