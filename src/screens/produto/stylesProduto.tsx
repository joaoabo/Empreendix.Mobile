import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerScroll: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: { color: '#220641', fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { color: '#220641', fontSize: 16, marginBottom: 24 },
  input: { marginBottom: 24, backgroundColor: '#f5f5f5', width: '100%', textDecorationColor: '#220641' },
  button: { paddingVertical: 6 },
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