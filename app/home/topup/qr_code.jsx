import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import qr_code_img from '../../../assets/images/home/qr_code.png';

const Qr_code = () => {
  const address = 'UQCj5nBQIRMMfgUuHtuep7AZ5Id64RjShCsDLLYw1vDPALYW';
  const handleCopyAddress = () => {
    console.log(`Copied address: ${address}`);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={()=>router.back()} style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>USDT (The Open Network)</Text>
      </Pressable>
      <View style={styles.qrCodeContainer}>
        <Image source={qr_code_img} style={styles.qrCodeImage} />
        <Text style={styles.addressText}>{address}</Text>
        <Pressable onPress={handleCopyAddress}>
          <Text style={styles.copyText}>Copy address</Text>
        </Pressable>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Send only TON on The Open Network, otherwise you risk losing your funds.
        </Text>
        <Text style={styles.infoText}>
          Minimum deposit amount - 0.1 TON
        </Text>
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
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'semibold',
    marginLeft: 20,
  },
  qrCodeContainer: {
    backgroundColor: '#0F0F0F',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    width: '100%',
    maxWidth: 350,
  },
  qrCodeImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  addressText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  copyText: {
    color: '#2990FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  infoText: {
    color: '#AAAAAA',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Qr_code;
