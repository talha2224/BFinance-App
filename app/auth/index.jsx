import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const EmailConfirmation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Email confirmation</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.instructionText}>
          We have just sent a confirmation code to 
          <Text style={styles.emailText}> john@example.com</Text>. Enter it in the field below.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Confirmation code"
          placeholderTextColor="#888"
          keyboardType="number-pad"
        />
        <TouchableOpacity onPress={()=>router.push("auth/profile")} style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    paddingTop:70,
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
    width: '100%',
    alignItems: 'center',
  },
  instructionText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 30,
    lineHeight: 24,
  },
  emailText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  input: {
    width: '100%',
    backgroundColor: '#222',
    color: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  continueButton: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EmailConfirmation;
