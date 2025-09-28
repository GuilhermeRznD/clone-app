import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './telaPerfil.styles';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const menuItems = [
  { id: '1', icon: '💬', title: 'Conversas', subtitle: 'Meu histórico de conversas', badge: { type: 'red', value: '2' } },
  { id: '2', icon: '🔔', title: 'Notificações', subtitle: 'Minha central de notificações', badge: { type: 'red', value: '3' } },
  { id: '3', icon: '📝', title: 'Dados da conta', subtitle: 'Minhas informações da conta', badge: { type: 'yellow', value: '!' } },
  { id: '4', icon: '💳', title: 'Pagamentos', subtitle: 'Meus saldos e cartões', badge: { type: 'red', value: 'NOVO!' } },
  { id: '5', icon: '❤️', title: 'Clube iFood', subtitle: 'Meus benefícios exclusivos' },
  { id: '6', icon: '🎟️', title: 'Cupons', subtitle: 'Meus cupons de desconto' },
  { id: '7', icon: '👥', title: 'Comunidade iFood', subtitle: 'Junte-se a nós', badge: { type: 'red', value: 'NOVO!' } },
  { id: '8', icon: '🛵', title: 'Código de entrega', subtitle: null },
];

export default function TelaPerfil() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView>
        {/* -- Cabeçalho -- */}
        <View style={styles.headerContainer}>
          <Image source={require('../../assets/images/avatar.png')} style={styles.avatar} />
          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>Diego Rodrigues</Text>
            <Text style={styles.userPhone}>Adicionar telefone de acesso</Text>
          </View>
        </View>

        {/* --- CARD "ENTREGA MAIS SEGURA" --- */}
        <TouchableOpacity style={styles.promoBanner}>
          <View style={styles.promoIconContainer}>
            <Text>🛍️</Text>
          </View>
          <View style={styles.promoTextContainer}>
            <Text style={styles.promoTitle}>Entrega mais segura!</Text>
            <Text style={styles.promoSubtitle}>Agora dá pra alterar o código de entrega.</Text>
          </View>
          <View style={[styles.badgeContainer, styles.redBadge]}>
            <Text style={styles.badgeText}>NOVO!</Text>
          </View>
          <Text style={styles.menuItemChevron}>&gt;</Text>
        </TouchableOpacity>

        {/* --- LISTA DE OPÇÕES DO MENU --- */}
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <Text style={styles.menuItemIcon}>{item.icon}</Text>
              <View style={styles.menuItemTextContainer}>
                <Text style={styles.menuItemTitle}>{item.title}</Text>
                {item.subtitle && <Text style={styles.menuItemSubtitle}>{item.subtitle}</Text>}
              </View>
              {item.badge && (
                <View style={[styles.badgeContainer, item.badge.type === 'red' ? styles.redBadge : styles.yellowBadge]}>
                  <Text style={styles.badgeText}>{item.badge.value}</Text>
                </View>
              )}
              <Text style={styles.menuItemChevron}>&gt;</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}