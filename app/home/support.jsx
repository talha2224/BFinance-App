import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const Support = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Support</Text>
      </Pressable>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Chat Section */}
        <Text style={styles.sectionTitle}>CHAT</Text>
        <Pressable style={styles.chatItem}>
          <View style={styles.iconWrapper}>
            <FontAwesome name="send-o" size={20} color="#fff" />
          </View>
          <Text style={styles.chatText}>Telegram</Text>
        </Pressable>

        <Pressable style={styles.chatItem}>
          <View style={styles.iconWrapper}>
            <Ionicons name="logo-whatsapp" size={20} color="#fff" />
          </View>
          <Text style={styles.chatText}>Whatsapp</Text>
        </Pressable>

        {/* Phone Section */}
        <Text style={styles.sectionTitle}>PHONE</Text>
        <Pressable style={styles.phoneItem}>
          <View style={styles.iconWrapper}>
            <Ionicons name="call-outline" size={20} color="#fff" />
          </View>
          <View style={styles.phoneInfo}>
            <Text style={styles.phoneNumber}>+1 701 800 0012</Text>
            <Text style={styles.phoneCountry}>United States</Text>
          </View>
        </Pressable>

        <Pressable style={styles.phoneItem}>
          <View style={styles.iconWrapper}>
            <Ionicons name="call-outline" size={20} color="#fff" />
          </View>
          <View style={styles.phoneInfo}>
            <Text style={styles.phoneNumber}>+44 7700 107074</Text>
            <Text style={styles.phoneCountry}>United Kingdom</Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20,
  },
  content: {
    paddingBottom: 20,
  },
  sectionTitle: {
    color: '#AAAAAA',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 10,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F0F0F',
    padding: 20,
    borderRadius: 16,
    marginBottom: 10,
  },
  chatText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  phoneItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F0F0F',
    padding: 20,
    borderRadius: 16,
    marginBottom: 10,
  },
  phoneInfo: {
    marginLeft: 15,
  },
  phoneNumber: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  phoneCountry: {
    color: '#AAAAAA',
    fontSize: 14,
    marginTop: 2,
  },
  iconWrapper: {
    backgroundColor: '#000',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});

export default Support;
