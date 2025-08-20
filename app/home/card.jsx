import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import card1_img from '../../assets/images/home/card1.png';
import card2_img from '../../assets/images/home/card2.png';
import card3_img from '../../assets/images/home/card3.png';
import BottomNavbar from '../../components/BottomNavbar';

const placeholderCard1 = 'https://placehold.co/80x50/00FF7F/000000?text=Card1';
const placeholderCard2 = 'https://placehold.co/80x50/333333/FFFFFF?text=Card2';
const placeholderCard3 = 'https://placehold.co/80x50/333333/FFFFFF?text=Card3';

const Card = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={()=>router.push("/home/card/issuance")} style={styles.header}>
        <Text style={styles.headerTitle}>Cards</Text>
        <Ionicons name="add-circle-outline" size={28} color="#fff" />
      </Pressable>
      <ScrollView contentContainerStyle={styles.cardList}>
        {/* Card 1 */}
        <Pressable onPress={() => router.push({ pathname: "/home/card/single", params: { index: 1 } })} style={styles.cardItem}>
          <Image source={card1_img || { uri: placeholderCard1 }} style={styles.cardImage} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>BFinance Card</Text>
            <Text style={styles.cardDetails}>Visa *1973</Text>
          </View>
          <Text style={styles.cardBalance}>1330.92 USD</Text>
        </Pressable>
        {/* Card 2 */}
        <Pressable onPress={() => router.push({ pathname: "/home/card/single", params: { index: 1 } })} style={styles.cardItem}>
          <Image source={card2_img || { uri: placeholderCard2 }} style={styles.cardImage} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>BFinance Card</Text>
            <Text style={styles.cardDetails}>Visa *1973</Text>
          </View>
          <Text style={styles.cardBalance}>1330.92 USD</Text>
        </Pressable>
        {/* Card 3 */}
        <Pressable onPress={() => router.push({ pathname: "/home/card/single", params: { index: 3 } })} style={styles.cardItem}>
          <Image source={card3_img || { uri: placeholderCard3 }} style={styles.cardImage} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>BFinance Card</Text>
            <Text style={styles.cardDetails}>Visa *1973</Text>
          </View>
          <Text style={styles.cardBalance}>1330.92 USD</Text>
        </Pressable>
      </ScrollView>
      <BottomNavbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    paddingTop: 50
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardList: {
    paddingBottom: 80, // Space for the bottom navbar
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  cardImage: {
    width: 80,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  cardInfo: {
    flex: 1,
    marginLeft: 15,
  },
  cardName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDetails: {
    color: '#888',
    fontSize: 14,
    marginTop: 2,
  },
  cardBalance: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card;
