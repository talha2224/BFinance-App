import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const Withdraw = () => {
  const [amount, setAmount] = useState('');
  const [fee, setFee] = useState(0);

  const handleAmountChange = (text) => {
    setAmount(text);
    // Assuming a 1% fee
    const calculatedFee = parseFloat(text) * 0.01;
    if (!isNaN(calculatedFee)) {
      setFee(calculatedFee.toFixed(2));
    } else {
      setFee(0);
    }
  };

  const handleContinue = () => {
    router.push("/home/card/withdraw_amount")
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Withdraw from card</Text>
      </Pressable>

      <View style={styles.feeContainer}>
        <Text style={styles.feeText}>1%</Text>
        <Text style={styles.feeSubText}>Withdrawal fee</Text>
        <Text style={styles.feeAmount}>{fee}$</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="0.00$"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={amount}
          onChangeText={handleAmountChange}
        />
        <Pressable
          style={[
            styles.continueButton,
            amount.length === 0 ? styles.continueButtonDisabled : null,
          ]}
          onPress={handleContinue}
          disabled={amount.length === 0}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
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
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'semibold',
    marginLeft: 20,
  },
  feeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0F0F0F',
    padding: 15,
    borderRadius: 16,
    marginBottom: 20,
  },
  feeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  feeSubText: {
    color: '#AAAAAA',
    fontSize: 14,
    marginLeft: 10,
    flex: 1,
  },
  feeAmount: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
  },
  inputLabel: {
    color: '#AAAAAA',
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#0F0F0F',
    color: '#fff',
    padding: 15,
    borderRadius: 16,
    fontSize: 16,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: 'center',
  },
  continueButtonDisabled: {
    backgroundColor: '#888',
  },
  continueButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Withdraw;
