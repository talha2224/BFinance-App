import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import BottomNavbar from '../../components/BottomNavbar';

const Services = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Services</Text>
      </View>
      <ScrollView contentContainerStyle={styles.serviceList}>
        {/* eSIM Service */}
        <Pressable style={styles.serviceItem}>
          <View style={styles.iconBackground}>
            <Ionicons name="cellular-outline" size={20} color="#fff" />
          </View>
          <View style={styles.serviceInfo}>
            <View style={styles.titleContainer}>
              <Text style={styles.serviceTitle}>eSIM</Text>
              <View style={styles.soonTag}>
                <Text style={styles.soonText}>soon</Text>
              </View>
            </View>
            <Text style={styles.serviceDescription}>Stay connected wherever you are</Text>
          </View>
        </Pressable>

        {/* Flights Service */}
        <Pressable style={styles.serviceItem}>
          <View style={styles.iconBackground}>
            <Ionicons name="airplane-outline" size={20} color="#fff" />
          </View>
          <View style={styles.serviceInfo}>
            <View style={styles.titleContainer}>
              <Text style={styles.serviceTitle}>Flights</Text>
              <View style={styles.soonTag}>
                <Text style={styles.soonText}>soon</Text>
              </View>
            </View>
            <Text style={styles.serviceDescription}>Buy airline tickets directly in the app</Text>
          </View>
        </Pressable>

        {/* Stays Service */}
        <Pressable style={styles.serviceItem}>
          <View style={styles.iconBackground}>
            <Ionicons name="bed-outline" size={20} color="#fff" />
          </View>
          <View style={styles.serviceInfo}>
            <View style={styles.titleContainer}>
              <Text style={styles.serviceTitle}>Stays</Text>
              <View style={styles.soonTag}>
                <Text style={styles.soonText}>soon</Text>
              </View>
            </View>
            <Text style={styles.serviceDescription}>Book accommodations worldwide</Text>
          </View>
        </Pressable>

        {/* Airport Lounges Service */}
        <Pressable style={styles.serviceItem}>
          <View style={styles.iconBackground}>
            <Ionicons name="bag-handle-outline" size={20} color="#fff" />
          </View>
          <View style={styles.serviceInfo}>
            <View style={styles.titleContainer}>
              <Text style={styles.serviceTitle}>Airport Lounges</Text>
              <View style={styles.soonTag}>
                <Text style={styles.soonText}>soon</Text>
              </View>
            </View>
            <Text style={styles.serviceDescription}>Comfortable airport lounges</Text>
          </View>
        </Pressable>
      </ScrollView>
      <BottomNavbar />
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
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'semibold',
  },
  serviceList: {
    width: '100%',
    paddingBottom: 80, // Space for the bottom navbar
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F0F0F',
    padding:10,
    paddingHorizontal:10,
    borderRadius: 16,
    marginBottom: 15,
    height:68
  },
  iconBackground: {
    backgroundColor: '#000',
    width:40,
    height:40,
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 800,
    marginRight: 15,
  },
  serviceInfo: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  serviceTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'medium',
    marginRight: 8,
  },
  soonTag: {
    backgroundColor: '#00FF7F',
    borderRadius: 100,
    width:48,
    height:18,
    justifyContent:"center",
    alignItems:"center"
  },
  soonText: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  serviceDescription: {
    color: '#AAAAAA',
    fontSize: 14,
  },
});

export default Services;
