import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  infoContainer: {
    position: 'absolute',
    bottom: -120, 
    width: '90%',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
  },
  separator: {
    marginHorizontal: 8,
    color: '#666',
  },
  deliveryInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  deliveryText: {
    fontSize: 14,
    color: '#333',
  },
  deliveryPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
  },
  destaquesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginTop: 140, 
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  cardContainer: {
    width: '32%',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 14,
    marginTop: 4,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
});