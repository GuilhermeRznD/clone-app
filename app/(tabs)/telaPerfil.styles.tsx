import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: { width: 60, height: 60, borderRadius: 30, marginRight: 15 },
  userInfoContainer: { flexDirection: 'column' },
  userName: { fontSize: 18, fontWeight: 'bold' },
  userPhone: { fontSize: 14, color: '#888' },
  
  // --- card entrega + segura ---
  promoBanner: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  promoIconContainer: {
    backgroundColor: '#fceeee',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  promoTextContainer: { flex: 1 },
  promoTitle: { fontWeight: 'bold', fontSize: 14 },
  promoSubtitle: { fontSize: 12, color: '#666' },

  menuContainer: { width: '100%' },
  menuItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemIcon: { fontSize: 20, marginRight: 15 },
  menuItemTextContainer: { flex: 1 },
  menuItemTitle: { fontSize: 16, color: '#333' },
  menuItemSubtitle: { fontSize: 12, color: '#888' },
  menuItemChevron: { fontSize: 18, color: '#888', marginLeft: 10 },
  
  badgeContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginLeft: 'auto',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  redBadge: { backgroundColor: 'red' },
  yellowBadge: { backgroundColor: 'orange' },
});