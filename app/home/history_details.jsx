import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import emirates_img from '../../assets/images/home/emirates.png';
const placeholderEmirates = 'https://placehold.co/80x80/FF0000/FFFFFF?text=E';

const History_details = () => {

  const handleBackPress = () => {
    router.back()
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleBackPress}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </Pressable>
        <Text style={styles.headerTitle}>Transaction</Text>
      </View>

      <View style={styles.content}>
        <Image source={emirates_img || { uri: placeholderEmirates }} style={styles.companyLogo} />
        <Text style={styles.companyName}>ALIEXPRESS.COM</Text>
        <Text style={styles.transactionAmount}>-1239 USD</Text>
        <Text style={styles.transactionStatus}>Success</Text>

        <View style={styles.infoBox}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Billed amount</Text>
            <Text style={styles.infoValue}>10 USD</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Fee</Text>
            <Text style={styles.infoValue}>0.5$</Text>
          </View>
        </View>

        <View style={styles.infoBox}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Transaction ID</Text>
            <Text style={styles.infoValue}>tid_enJsnLL837</Text>
          </View>
        </View>

        <Pressable onPress={()=>router.push("/home/support")} style={styles.supportButton}>
          <Text style={styles.supportButtonText}>Contact support</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    paddingTop:60
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  content: {
    alignItems: 'center',
  },
  companyLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 15,
  },
  companyName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  transactionAmount: {
    color: '#FF0000', // Assuming a red color for negative
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  transactionStatus: {
    color: '#00FF7F', // Assuming a green color for success
    fontSize: 14,
    marginBottom: 30,
  },
  infoBox: {
    width: '100%',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoLabel: {
    color: '#888',
    fontSize: 16,
  },
  infoValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  supportButton: {
    width: '100%',
    backgroundColor: '#ffff',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  supportButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default History_details;
