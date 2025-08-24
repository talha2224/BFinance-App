import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const Currency_detail = () => {
  const details = [
    { label: 'USD', subLabel: 'Currency' },
    { label: 'BFinance Technologies LTD', subLabel: 'Name' },
    { label: '8314031210', subLabel: 'Account number' },
    { label: 'Checking', subLabel: 'Account type' },
    { label: 'CMFGUS33', subLabel: 'SWIFT/BIC' },
    { label: 'Community Federal Savings Bank', subLabel: 'Bank address' },
    { label: '#IS93BBS7K3', subLabel: 'Reference' },
  ];

  const handleCopy = (text) => {
    router.push("/home/topup/qr_code")
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={()=>router.back()} style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Dollars</Text>
      </Pressable>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {details.map((item, index) => (
          <Pressable key={index} style={styles.detailItem} onPress={() => handleCopy(item.label)}>
            <Text style={styles.detailLabel}>{item.label}</Text>
            <Text style={styles.detailSubLabel}>{item.subLabel}</Text>
          </Pressable>
        ))}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Click on item to copy</Text>
      </View>
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
    fontSize: 20,
    fontWeight: 'semibold',
    marginLeft: 20,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  detailItem: {
    backgroundColor: '#0F0F0F',
    padding: 15,
    borderRadius: 16,
    marginBottom: 10,
  },
  detailLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailSubLabel: {
    color: '#AAAAAA',
    fontSize: 14,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 10,
    marginTop:10
  },
  footerText: {
    color: '#AAAAAA',
    fontSize: 14,
  },
});

export default Currency_detail;
