import React from 'react';
import { View } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { InfoCard } from '../../routes/types';




export default function CardInfoWhite() {
    const data: {
        vendas: InfoCard[];
        orcamento: InfoCard[];
        vendasPerdidas: InfoCard[];
    } = {
        vendas: [{ titulo: 'Vendas Realizadas', resultado: 'R$ 1.250,00 em 20 pedidos' }],
        orcamento: [{ titulo: 'Orçamentos Enviados', resultado: '15 orçamentos em aberto' }],
        vendasPerdidas: [{ titulo: 'Vendas Perdidas', resultado: 'R$ 320,00 em 5 pedidos' }]
    };

    const cards = [...data.vendas, ...data.orcamento, ...data.vendasPerdidas]
    return (
        <View>
            {cards.map((item, index) => (
                <Card key={index} style={styles.cardsDash}>
                    <Card.Content>
                        <Text variant="titleMedium" style={styles.titulo}>{item.titulo}</Text>
                        <Text variant="bodyMedium" style={styles.textoValor}>{item.resultado}</Text>
                    </Card.Content>
                </Card>
            ))}
        </View>
    )
}

export const styles = StyleSheet.create({
    titulo: {
        color: '#220641',
        fontSize: 18
    },
    textoValor: {
        color: '#220641'
    },
    cardsDash: {
    backgroundColor: '#fff',
    marginBottom: 16,
    color: '#220641',
    width: 380
  }
});