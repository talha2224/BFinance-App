import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import apple_logo from '../../assets/images/auth/apple_logo.png';

// Placeholder image since I cannot access local assets
const placeholderApple = 'https://placehold.co/40x40/000000/FFFFFF?text=🍎';

const History = ({ navigation }) => {
  
  const navigateToDetails = () => {
    console.log('Navigating to history details...');
    router.push("/home/history_details")
  };

  const historyData = {
    today: [
      { id: '1', company: 'APPLE.COM/BILL', time: '19:20', card: 'Card *1234', amount: '10.32' },
      { id: '2', company: 'APPLE.COM/BILL', time: '19:20', card: 'Card *1234', amount: '10.32' },
    ],
    yesterday: [
      { id: '3', company: 'APPLE.COM/BILL', time: '19:20', card: 'Card *1234', amount: '10.32' },
      { id: '4', company: 'APPLE.COM/BILL', time: '19:20', card: 'Card *1234', amount: '10.32' },
      { id: '5', company: 'APPLE.COM/BILL', time: '19:20', card: 'Card *1234', amount: '10.32' },
      { id: '6', company: 'APPLE.COM/BILL', time: '19:20', card: 'Card *1234', amount: '10.32' },
    ],
    lastWeek: [
      { id: '7', company: 'APPLE.COM/BILL', time: '19:20', card: 'Card *1234', amount: '10.32' },
      { id: '8', company: 'APPLE.COM/BILL', time: '19:20', card: 'Card *1234', amount: '10.32' },
    ],
  };

  const renderHistoryItem = (item) => (
    <Pressable key={item.id} style={styles.historyItem} onPress={navigateToDetails}>
      <Image source={apple_logo || { uri: placeholderApple }} style={styles.companyLogo} />
      <View style={styles.itemInfo}>
        <Text style={styles.companyName}>{item.company}</Text>
        <Text style={styles.transactionDetails}>
          {item.time} - {item.card}
        </Text>
      </View>
      <Text style={styles.itemAmount}>${item.amount}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Pressable onPress={()=>router.back()} style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>History</Text>
      </Pressable>
      <ScrollView contentContainerStyle={styles.historyList}>
        <Text style={styles.sectionTitle}>TODAY</Text>
        {historyData.today.map(renderHistoryItem)}

        <Text style={styles.sectionTitle}>YESTERDAY</Text>
        {historyData.yesterday.map(renderHistoryItem)}

        <Text style={styles.sectionTitle}>LAST WEEK</Text>
        {historyData.lastWeek.map(renderHistoryItem)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    paddingTop:50
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
  historyList: {
    paddingBottom: 20,
  },
  sectionTitle: {
    color: '#888',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  companyLogo: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
  },
  companyName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionDetails: {
    color: '#888',
    fontSize: 14,
    marginTop: 2,
  },
  itemAmount: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default History;
