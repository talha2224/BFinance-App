import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Sign up</Text>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="First name"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Last name"
          placeholderTextColor="#888"
        />
        <View style={styles.termsContainer}>
          <Ionicons name="checkbox-outline" size={24} color="#00E675" />
          <Text style={styles.termsText}>
            I agree to the <Text style={styles.linkText}>Terms of Use</Text>, <Text style={styles.linkText}>Privacy Policy</Text>, <Text style={styles.linkText}>AML Policy</Text>, and the collection and processing of my personal data.
          </Text>
        </View>
        <TouchableOpacity onPress={()=>router.push("home")} style={styles.continueButton}>
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
    paddingTop:70
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
  input: {
    width: '100%',
    backgroundColor: '#222',
    color: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 30,
    paddingHorizontal: 5,
  },
  termsText: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 10,
  },
  linkText: {
    color: '#00E675',
    textDecorationLine: 'underline',
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

export default Profile;
