import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import btc_img from '../../assets/images/home/btc.png';
import chart_img from '../../assets/images/home/chart.png';
const Chart = () => {
  const transactions = [
    { type: 'topup', time: '19:20', amount: '+0.0002 BTC', icon: 'arrow-up-right' },
    { type: 'withdrawal', time: '18:09', amount: '-0.0092 BTC', icon: 'arrow-down-left' },
    { type: 'topup', time: '17:30', amount: '+0.0015 BTC', icon: 'arrow-up-right' },
  ];
  return (
    <View style={styles.container}>
      <Pressable onPress={()=>router.back()} style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Image source={btc_img} style={styles.headerIcon} />
        <Text style={styles.headerTitle}>Bitcoin</Text>
      </Pressable>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceMainText}>0.002932 BTC</Text>
          <Text style={styles.balanceSubText}>238,98$</Text>
        </View>

        <Image source={chart_img} style={styles.chartImage} />

        <View style={styles.actionsContainer}>
          <Pressable style={styles.actionButton} onPress={() => router.push("/home/topup")}>
            <Ionicons name="add-circle-outline" size={24} color="#fff" />
            <Text style={styles.actionText}>Topup</Text>
          </Pressable>
          <Pressable style={styles.actionButton} onPress={() => router.push("/home/withdraw")}>
            <Ionicons name="swap-horizontal-outline" size={24} color="#fff" />
            <Text style={styles.actionText}>Withdraw</Text>
          </Pressable>
        </View>

        <Text style={styles.historyTitle}>TODAY</Text>
        {transactions.map((item, index) => (
          <View key={index} style={styles.transactionItem}>
            <Feather name={item.icon} size={24} color="#fff" />
            <View style={styles.transactionTextContainer}>
              <Text style={styles.transactionType}>{item.type === 'topup' ? 'Account topup' : 'Withdrawal'}</Text>
              <Text style={styles.transactionTime}>{item.time}</Text>
            </View>
            <Text
              style={[
                styles.transactionAmount,
                { color: item.amount.startsWith('+') ? '#00FF7F' : '#FF6347' },
              ]}
            >
              {item.amount}
            </Text>
          </View>
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
  headerIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    marginLeft: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  balanceContainer: {
    marginBottom: 20,
  },
  balanceMainText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  balanceSubText: {
    color: '#888',
    fontSize: 16,
  },
  chartImage: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  historyTitle: {
    color: '#888',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  transactionTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  transactionType: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionTime: {
    color: '#888',
    fontSize: 12,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Chart;
