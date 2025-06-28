import { Text, View } from 'react-native';
import { styles } from './stylesDashboard'
import GraficosBarras from '../../components/graficos/GraficoBarras';
import CardInfoWhite from '../../components/cards/CardInfoWhite';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gráfico de Vendas</Text>
      <GraficosBarras/>
      <CardInfoWhite/>
    </View>
  );
}

