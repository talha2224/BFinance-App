import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const Terms = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={()=>router.back()} style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Terms Of Use</Text>
      </Pressable>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionHeading}>1. Introduction</Text>
        <Text style={styles.paragraph}>
          BITBIX LTD (a private limited company registered in the United Kingdom under the number 14955756 and at 20 Wenlock Road, London, United Kingdom) and BFTech LLC (a limited liability company registered in the United States of America under the number 3362518 and located at 1007 N ORANGE ST. 4TH FLOOR STE, 1382, Wilmington, Delaware), (collectively referred to as "we", "us", or "our") are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy outlines how we collect, use, share, and safeguard your information when you use our services, including our crypto-bank application on Telegram ("the App") and our informational website, bnance.app ("the Site").
        </Text>
        <Text style={styles.paragraph}>
          By accessing or using our Site and App, you agree to the terms outlined in this Privacy Policy. If you do not agree with these terms, please do not use our services.
        </Text>

        <Text style={styles.sectionHeading}>2. Data Collection</Text>
        <Text style={styles.paragraph}>
          We collect various types of personal data from you to provide and improve our services. The data we collect includes:
        </Text>
        <Text style={styles.listItem}>
          - Telegram Data: This includes your Telegram ID, name, username, and profile photo. This data is essential for the operation of the App and for verifying your identity within the App environment.
        </Text>
        <Text style={styles.listItem}>
          - Legal Information: We may collect your legal name, date of birth, address, and any documents necessary for identity verification and compliance with legal obligations. These documents could include, but are not limited to, copies of your passport, driver's license, or other forms of government-issued identification.
        </Text>

        <Text style={styles.sectionHeading}>3. Methods of Data Collection</Text>
        <Text style={styles.paragraph}>
          We collect data through the following methods:
        </Text>
        <Text style={styles.listItem}>
          ● Direct Input: Data you provide directly through forms or documents when you use the App.
        </Text>
        <Text style={styles.listItem}>
          ● Third-Party Service Providers: We use third-party service providers, such as Sumsub, to facilitate the collection of legal documents.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    paddingTop:70
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
  content: {
    paddingBottom: 20,
  },
  sectionHeading: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15,
  },
  paragraph: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 10,
  },
  listItem: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 5,
  },
});

export default Terms;
