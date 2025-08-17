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

  const handlePress = (option) => {
    console.log(`Pressed option: ${option}`);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={()=>router.back()} style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Card *1234</Text>
      </Pressable>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>SECURITY</Text>
        {securityOptions.map((item, index) => (
          <Pressable key={index} style={styles.optionItem} onPress={() =>router.push("/home/card/pin")}>
            <Ionicons name={item.icon} size={24} color="#fff" />
            <Text style={styles.optionLabel}>{item.label}</Text>
          </Pressable>
        ))}

        <Text style={styles.sectionTitle}>CONTACTS</Text>
        {contactOptions.map((item, index) => (
          <Pressable key={index} style={styles.optionItem} onPress={() =>router.push("/home/card/pin")}>
            <Ionicons name={item.icon} size={24} color="#fff" />
            <Text style={styles.optionLabel}>{item.label}</Text>
          </Pressable>
        ))}

        <Text style={styles.sectionTitle}>INFO</Text>
        {infoOptions.map((item, index) => (
          <Pressable key={index} style={styles.optionItem} onPress={() =>router.push("/home/card/pin")}>
            <Ionicons name={item.icon} size={24} color="#fff" />
            <Text style={styles.optionLabel}>{item.label}</Text>
            {item.status && <Text style={styles.statusText}>{item.status}</Text>}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  sectionTitle: {
    color: '#888',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  optionLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
    flex: 1,
  },
  statusText: {
    color: '#00FF7F',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Edit;
