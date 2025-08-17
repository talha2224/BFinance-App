import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const Topup = () => {
  const [amount, setAmount] = useState('');
  const [fee, setFee] = useState(0);

  const handleAmountChange = (text) => {
    setAmount(text);
    const calculatedFee = parseFloat(text) * 0.02;
    if (!isNaN(calculatedFee)) {
      setFee(calculatedFee.toFixed(2));
    } else {
      setFee(0);
    }
  };

  const handleContinue = () => {
    router.push("/home/card/topup_amount")
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Card topup</Text>
      </Pressable>

      <View style={styles.feeContainer}>
        <Text style={styles.feeText}>2%</Text>
        <Text style={styles.feeSubText}>Topup fee</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  feeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },
  feeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  feeSubText: {
    color: '#888',
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
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 12,
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

export default Topup;
