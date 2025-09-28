import { View, Image, SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native';
import { styles } from './telaBolos.styles';
import { Stack } from 'expo-router';

const produtos = [
  { id: '1', name: 'Metade Cenoura com Cobertura', price: 'R$ 30,00', image: require('../../assets/images/metade_chocolate.png') },
  { id: '2', name: 'Bolo Cenoura com cobertura', price: 'R$ 52,00', image: require('../../assets/images/chocolate.png') },
  { id: '3', name: 'Bolo de Formigueiro', price: 'R$ 34,00', image: require('../../assets/images/formigueiro.png') },
  { id: '4', name: 'Metade Milho', price: 'R$ 23,00', image: require('../../assets/images/metade_milho.png') },
  { id: '5', name: 'Bolo de Milho', price: 'R$ 38,00', image: require('../../assets/images/milho.png') },
  { id: '6', name: 'Bolo Mandioca Romeu e Julieta', price: 'R$ 48,00', image: require('../../assets/images/romeu_julieta.png') },
];

export default function TelaBolos() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView>
        <View style={styles.headerContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.headerImage}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Bolos do Flávio - Águas Claras</Text>
            <Text style={styles.subtitle}>Bolos caseiros • 1.0 km</Text>
            
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>⭐ 4,9 (1.1 mil avaliações)</Text>
              <Text style={styles.separator}>•</Text>
              <Text style={styles.ratingText}>Nível 4 de 5</Text>
            </View>
            
            <View style={styles.deliveryInfoContainer}>
              <Text style={styles.deliveryText}>Entrega</Text>
              <Text style={styles.separator}>⮕</Text>
              <Text style={styles.deliveryText}>Hoje, 35-45 min</Text>
              <Text style={styles.deliveryPrice}>Grátis</Text>
            </View>
          </View>
        </View>

        <Text style={styles.destaquesTitle}>Destaques</Text>
        <View style={styles.gridContainer}>
          {produtos.map((produto) => (
            <TouchableOpacity key={produto.id} style={styles.cardContainer}>
              <Image source={produto.image} style={styles.cardImage} />
              <Text style={styles.cardPrice}>{produto.price}</Text>
              <Text style={styles.cardTitle}>{produto.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}