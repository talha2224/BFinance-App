import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const Edit = () => {
  const securityOptions = [
    { label: 'Change PIN code', icon: 'trash-bin-outline' },
  ];
  const contactOptions = [
    { label: 'Change email', icon: 'mail-outline' },
    { label: 'Change phone', icon: 'call-outline' },
  ];
  const infoOptions = [
    { label: 'Change Label', icon: 'pencil-outline' },
    { label: 'Limits & Restrictions', icon: 'filter-outline', status: 'soon' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Pressable onPress={() => router.back()} style={styles.header}>
        <Ionicons name="chevron-back" size={20} color="#fff" />
        <Text style={styles.headerTitle}>Card *1234</Text>
      </Pressable>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Security Section */}
        <Text style={styles.sectionTitle}>SECURITY</Text>
        {securityOptions.map((item, index) => (
          <Pressable
            key={index}
            style={styles.optionItem}
            onPress={() => router.push('/home/card/pin')}
          >
            <View style={styles.iconWrapper}>
              <Ionicons name={item.icon} size={20} color="#fff" />
            </View>
            <Text style={styles.optionLabel}>{item.label}</Text>
          </Pressable>
        ))}

        {/* Contacts Section */}
        <Text style={styles.sectionTitle}>CONTACTS</Text>
        {contactOptions.map((item, index) => (
          <Pressable
            key={index}
            style={styles.optionItem}
            onPress={() => router.push('/home/card/pin')}
          >
            <View style={styles.iconWrapper}>
              <Ionicons name={item.icon} size={20} color="#fff" />
            </View>
            <Text style={styles.optionLabel}>{item.label}</Text>
          </Pressable>
        ))}

        {/* Info Section */}
        <Text style={styles.sectionTitle}>INFO</Text>
        {infoOptions.map((item, index) => (
          <Pressable
            key={index}
            style={styles.optionItem}
            onPress={() => router.push('/home/card/pin')}
          >
            <View style={styles.iconWrapper}>
              <Ionicons name={item.icon} size={20} color="#fff" />
            </View>
            <Text style={styles.optionLabel}>{item.label}</Text>
            {item.status && (
              <View style={{backgroundColor:"#00FF7F",borderRadius:100,width:48,height:18,justifyContent:"center",alignItems:"center",marginLeft:15}}>
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            )}
          </Pressable>
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
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  sectionTitle: {
    color: '#AAAAAA',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F0F0F',
    paddingHorizontal: 15,
    height:58,
    borderRadius: 16,
    marginBottom: 10,
  },
  iconWrapper: {
    backgroundColor: '#000',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  optionLabel: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'medium',
    marginLeft: 15,
  },
  statusText: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Edit;
