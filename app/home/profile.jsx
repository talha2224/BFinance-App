import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import profile_img from '../../assets/images/home/profile_img.jpg';

// Placeholder image since I cannot access local assets
const placeholderProfile = 'https://placehold.co/100x100/333333/FFFFFF?text=P';

const Profile = () => {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={{ backgroundColor: "#0F0F0F", padding: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                <View style={styles.header}>
                    <Pressable onPress={() => router.back()}><Ionicons name="chevron-back" size={24} color="#fff" /></Pressable>
                    <Pressable onPress={() => router.push("/")}>
                        <Ionicons name="log-out-outline" size={24} color="#EC594E" />
                    </Pressable>
                </View>
                {/* Profile Info */}
                <View style={styles.profileInfoContainer}>
                    <Image source={profile_img || { uri: placeholderProfile }} style={styles.profileImage} />
                    <Text style={styles.profileName}>Timur</Text>
                    <Text style={styles.profileEmail}>user@example.com</Text>
                    <View style={styles.verifiedTag}>
                        <Text style={styles.verifiedText}>Verified</Text>
                    </View>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>

                {/* General Section */}
                <Text style={styles.sectionTitle}>GENERAL</Text>
                <Pressable onPress={() => router.push("/home/verification")} style={styles.optionItem}>
                    <View style={{ width: 40, height: 40, backgroundColor: "#000", borderRadius: 100, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name="eye-outline" size={20} color="#fff" />
                    </View>
                    <Text style={styles.optionText}>Identity verification</Text>
                </Pressable>

                {/* BFinance Section */}
                <Text style={styles.sectionTitle}>BFINANCE</Text>
                <Pressable onPress={() => router.push("/home/support")} style={styles.optionItem}>
                    <View style={{ width: 40, height: 40, backgroundColor: "#000", borderRadius: 100, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name="help-circle-outline" size={20} color="#fff" />
                    </View>
                    <Text style={styles.optionText}>Support</Text>
                </Pressable>

                {/* Legal Section */}
                <Text style={styles.sectionTitle}>LEGAL</Text>
                <Pressable onPress={() => router.push("/home/privacy")} style={styles.optionItem}>
                    <View style={{ width: 40, height: 40, backgroundColor: "#000", borderRadius: 100, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name="document-text-outline" size={20} color="#fff" />
                    </View>
                    <Text style={styles.optionText}>Privacy Policy</Text>
                </Pressable>
                <Pressable onPress={() => router.push("/home/terms")} style={styles.optionItem}>
                    <View style={{ width: 40, height: 40, backgroundColor: "#000", borderRadius: 100, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name="document-text-outline" size={20} color="#fff" />
                    </View>
                    <Text style={styles.optionText}>Terms of Use</Text>
                </Pressable>
                <Pressable onPress={() => router.push("/home/aml")} style={styles.optionItem}>
                    <View style={{ width: 40, height: 40, backgroundColor: "#000", borderRadius: 100, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name="document-text-outline" size={20} color="#fff" />
                    </View>
                    <Text style={styles.optionText}>AML Policy</Text>
                </Pressable>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        paddingTop: 20
    },
    scrollContent: {
        paddingBottom: 20,
        paddingHorizontal: 20
    },
    profileInfoContainer: {
        alignItems: 'center',
        marginBottom: 30
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileEmail: {
        color: '#AAAAAA',
        fontSize: 16,
        marginBottom: 10,
    },
    verifiedTag: {
        backgroundColor: '#00E675',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
    },
    verifiedText: {
        color: '#000',
        fontSize: 12,
        fontWeight: 'bold',
    },
    sectionTitle: {
        color: '#AAAAAA',
        fontSize: 13,
        fontWeight: '400',
        marginTop: 20,
        marginBottom: 10,
    },
    optionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0F0F0F',
        paddingHorizontal: 15,
        borderRadius: 16,
        marginBottom: 10,
        height:68
    },
    optionText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 15,
    },
});

export default Profile;
