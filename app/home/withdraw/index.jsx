import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import btc_img from '../../../assets/images/home/btc.png';
import eth_img from '../../../assets/images/home/eth.png';
import ton_img from '../../../assets/images/home/ton.png';


const Topup = () => {
  const currencies = [
    { type: 'crypto', name: 'Bitcoin', symbol: 'BTC', img: btc_img},
    { type: 'crypto', name: 'Ethereum', symbol: 'ETH', img: eth_img },
    { type: 'crypto', name: 'The Open Network', symbol: 'TON', img: ton_img },
    { type: 'crypto', name: 'Bitcoin', symbol: 'BTC', img: btc_img},
    { type: 'crypto', name: 'Ethereum', symbol: 'ETH', img: eth_img},
    { type: 'crypto', name: 'The Open Network', symbol: 'TON',img:ton_img},
  ];

  return (
    <View style={styles.container}>
      <Pressable onPress={()=>router.back()} style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Withdrawal</Text>
      </Pressable>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Text style={styles.sectionTitle}>CRYPTO</Text>
        {currencies
          .filter(c => c.type === 'crypto')
          .map((item, index) => (
            <Pressable onPress={()=>router.push("/home/withdraw/coin_detail")} key={index} style={styles.currencyItem}>
              <Image source={item.img} style={styles.cryptoIcon} />
              <View style={styles.textContainer}>
                <Text style={styles.currencyName}>{item.name}</Text>
                <Text style={styles.currencySymbol}>{item.symbol}</Text>
              </View>
            </Pressable>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  sectionTitle: {
    color: '#888',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  currencyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 15,
  },
  currencyName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  currencySymbol: {
    color: '#888',
    fontSize: 14,
  },
  cryptoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Topup;
