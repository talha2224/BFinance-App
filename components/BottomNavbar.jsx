import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import { router } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const BottomNavbar = () => {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const tabs = [
    { link: "home/index", name: 'Home', icon: <Ionicons name="home-outline" size={24} color="#A2ACB0" />, activeIcon: <Ionicons name="home-outline" size={24} color="#00E675" /> },
    { link: "home/card", name: 'Card', icon: <Ionicons name="card-outline" size={24} color="#A2ACB0" />, activeIcon: <Ionicons name="card-outline" size={24} color="#00E675" /> },
    { link: "home/services", name: 'Services', icon: <MaterialCommunityIcons name="view-dashboard-outline" size={24} color="#A2ACB0" />, activeIcon: <MaterialCommunityIcons name="view-dashboard-outline" size={24} color="#00E675" /> },
  ];


  return (
    <View style={[styles.navContainer, { paddingBottom: insets.bottom }]}>
      <View style={styles.navBar}>
        {tabs.map((tab) => (
          <TouchableOpacity key={tab.name} style={styles.navItem} onPress={() => router.push(tab?.link === "home/index" ? "home" : tab?.link)}>
            {tab?.link === route?.name ? tab.activeIcon : tab.icon}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: '#0F0F0F',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 14
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
});

export default BottomNavbar;