import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import btc_img from '../../assets/images/home/btc.png';
import pay_card_img from '../../assets/images/home/pay_card.png';
import profile_img from '../../assets/images/home/profile_img.jpg';
import BottomNavbar from '../../components/BottomNavbar';

const placeholderProfile = 'https://placehold.co/60x60/333333/FFFFFF?text=P';
const placeholderCard = 'https://placehold.co/150x90/00FF7F/000000?text=Card';
const placeholderBTC = 'https://placehold.co/40x40/FF9900/FFFFFF?text=BTC';
const placeholderTON = 'https://placehold.co/40x40/00BFFF/FFFFFF?text=TON';


const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <TouchableOpacity onPress={()=>router.push("/home/profile")} style={styles.header}>
          <View style={styles.profileSection}>
            <Image source={profile_img || { uri: placeholderProfile }} style={styles.profileImage} />
            <View>
              <Text style={styles.greetingText}>Timur</Text>
            </View>
          </View>
          <TouchableOpacity onPress={()=>router.push("/home/history")}><MaterialCommunityIcons name="clock-outline" size={28} color="#00E675" /></TouchableOpacity>
        </TouchableOpacity>

        {/* Balance Section */}
        <View style={styles.balanceSection}>
          <Text style={styles.balanceLabel}>Total balance</Text>
          <Text style={styles.balanceValue}>$1,348</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <Pressable onPress={()=>router.push("/home/topup")} style={[styles.button, styles.topUpButton]}>
            <Ionicons name="add-circle" size={20} color="#000" />
            <Text style={styles.topUpButtonText}>Top-up</Text>
          </Pressable>
          <Pressable onPress={()=>router.push("/home/withdraw")} style={[styles.button, styles.withdrawButton]}>
            <Ionicons name="remove-circle" size={20} color="#fff" />
            <Text style={styles.withdrawButtonText}>Withdraw</Text>
          </Pressable>
        </View>

        {/* Crypto Card Section */}
        <View style={styles.cardContainer}>
          <View style={styles.cardTextContent}>
            <Text style={styles.cardTitle}>Pay crypto like fiat</Text>
            <Text style={styles.cardSubtitle}>Issue your Visa crypto-card in seconds</Text>
          </View>
          <Image source={pay_card_img || { uri: placeholderCard }} style={styles.payCardImage} />
        </View>

        {/* Accounts List */}
        <View style={styles.accountsSection}>
          <Text style={styles.sectionTitle}>FIAT</Text>
          {/* Fiat Accounts */}
          <View style={styles.accountItem}>
            <View style={styles.accountIcon}>
              <Text style={styles.accountIconText}>$</Text>
            </View>
            <View style={styles.accountInfo}>
              <Text style={styles.accountName}>Dollars</Text>
            </View>
            <Text style={styles.accountValue}>10,000 USD</Text>
          </View>
          <View style={styles.accountItem}>
            <View style={styles.accountIcon}>
              <Text style={styles.accountIconText}>€</Text>
            </View>
            <View style={styles.accountInfo}>
              <Text style={styles.accountName}>Euros</Text>
            </View>
            <Text style={styles.accountValue}>10,000 EUR</Text>
          </View>

          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>CRYPTO</Text>
          {/* Crypto Accounts */}
          <Pressable onPress={()=>router.push("/home/chart")} style={styles.accountItem}>
            <Image source={btc_img || { uri: placeholderBTC }} style={styles.cryptoIcon} />
            <View style={styles.accountInfo}>
              <Text style={styles.accountName}>Bitcoin</Text>
              <Text style={styles.cryptoValue}>0.1 BTC</Text>
            </View>
            <Text style={styles.accountValue}>$10,000</Text>
          </Pressable>
          <Pressable onPress={()=>router.push("/home/chart")} style={styles.accountItem}>
            <Image source={btc_img || { uri: placeholderTON }} style={styles.cryptoIcon} />
            <View style={styles.accountInfo}>
              <Text style={styles.accountName}>Toncoin</Text>
              <Text style={styles.cryptoValue}>100 TON</Text>
            </View>
            <Text style={styles.accountValue}>$150</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Bottom Navbar */}
      <BottomNavbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop:50
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greetingText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  balanceSection: {
    marginBottom: 30,
  },
  balanceLabel: {
    color: '#888',
    fontSize: 16,
  },
  balanceValue: {
    color: '#fff',
    fontSize: 42,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 12,
    flex: 1,
  },
  topUpButton: {
    backgroundColor: '#00E675',
    marginRight: 10,
  },
  withdrawButton: {
    backgroundColor: '#1E1E1E',
    marginLeft: 10,
  },
  topUpButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
  },
  withdrawButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
  },
  cardContainer: {
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between",
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    overflow: 'hidden',
  },
  cardTextContent: {
    flex: 1,
    marginRight: 10,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    color: '#888',
    fontSize: 14,
  },
  payCardImage: {
    width: 150,
    height: 90,
    resizeMode: 'contain',
    marginRight:-30
  },
  accountsSection: {
    width: '100%',
  },
  sectionTitle: {
    color: '#888',
    fontSize: 14,
    marginBottom: 10,
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  accountIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountIconText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cryptoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  accountInfo: {
    flex: 1,
    marginLeft: 15,
  },
  accountName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cryptoValue: {
    color: '#888',
    fontSize: 14,
    marginTop: 2,
  },
  accountValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
