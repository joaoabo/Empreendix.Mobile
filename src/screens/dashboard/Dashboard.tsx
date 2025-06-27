import { Text, View } from 'react-native';
import { styles } from './stylesDashboard'
import GraficosBarras from '../../components/graficos/GraficoBarras';
import CardInfo from '../../components/cards/CardInfo';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text>Teste!</Text>
      <GraficosBarras/>
      <CardInfo/>
    </View>
  );
}