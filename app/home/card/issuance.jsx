import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import apple_logo from '../../../assets/images/auth/apple_logo.png';
import google_logo from '../../../assets/images/auth/google_logo.png';
import card_img from '../../../assets/images/card/card_2.png';


const Issuance = () => {
  const cardOptions = [
    {
      title: 'BFinance Lite',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: card_img,
      platforms: [apple_logo,google_logo],
    },
    {
      title: 'BFinance Card',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: card_img,
      platforms: [apple_logo,google_logo],
    },
  ];

  const handleIssueCard = () => {
    router.push("/home/card/single_issuance")
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Card issuance</Text>
      </Pressable>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {cardOptions.map((card, index) => (
          <Pressable onPress={handleIssueCard} key={index} style={styles.cardContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardDescription}>{card.description}</Text>
              <View style={styles.platformLogos}>
                {card.platforms.map((logo, logoIndex) => (
                  <Image key={logoIndex} source={logo} style={styles.platformLogo} />
                ))}
              </View>
            </View>
            <Image source={card_img} style={styles.cardImage} />
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
    marginBottom: 20,
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
  cardContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDescription: {
    color: '#888',
    fontSize: 14,
    marginBottom: 15,
  },
  platformLogos: {
    flexDirection: 'row',
  },
  platformLogo: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 10,
  },
  cardImage: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 8,
  },
});

export default Issuance;
