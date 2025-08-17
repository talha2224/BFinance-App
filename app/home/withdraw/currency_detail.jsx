import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import btc_img from '../../../assets/images/home/btc.png';

const Currency_detail = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('100');

  const handleContinue = () => {
    router.push("/home/withdraw/success")
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={()=>router.back()} style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Image
          source={btc_img}
          style={styles.headerIcon}
        />
        <Text style={styles.headerTitle}>Bitcoin (Bitcoin)</Text>
      </Pressable>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>WALLET ADDRESS</Text>
          <TextInput
            style={styles.input}
            placeholder="TKVqxc3..."
            placeholderTextColor="#888"
            value={walletAddress}
            onChangeText={setWalletAddress}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>AMOUNT</Text>
          <TextInput
            style={styles.input}
            placeholder="100"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
        </View>
      </View>

      <Pressable style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </Pressable>
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
    marginBottom: 40,
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
  formContainer: {
    flex: 1,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    color: '#888',
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#1E1E1E',
    color: '#fff',
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  continueButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Currency_detail;
