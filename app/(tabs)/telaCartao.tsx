import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './telaCartao.styles';
import { Stack } from 'expo-router'; 

export default function TelaCartao() {
  return (
    <View style={styles.container}>
     
      <Stack.Screen options={{ headerShown: false }} />

      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>

      <Image
        source={require('../../assets/images/cartao_mercado.png')}
        style={styles.image}
      />

  
      <Text style={styles.title}>
        Peça seu Cartão de Crédito Mercado Pago e aproveite essas vantagens exclusivas:🛒✨
      </Text>

     
      <View style={styles.benefitsContainer}>
        <Text style={styles.benefitText}>
          - Parcele suas compras em até 18x sem juros no Mercado Livre
        </Text>
        <Text style={styles.benefitText}>
          - <Text>Anuidade Grátis</Text>
        </Text>
        <Text style={styles.benefitText}>
          - <Text style={styles.boldText}>Segurança e controle:</Text> acompanhe seus gastos pelo App, garantindo controle de todas suas transações.
        </Text>
      </View>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Peça já</Text>
      </TouchableOpacity>
    </View>
  );
}