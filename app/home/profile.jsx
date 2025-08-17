import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import profile_img from '../../assets/images/home/profile_img.jpg';

// Placeholder image since I cannot access local assets
const placeholderProfile = 'https://placehold.co/100x100/333333/FFFFFF?text=P';

const Profile = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable onPress={()=>router.back()}><Ionicons name="chevron-back" size={24} color="#fff" /></Pressable>
                <Pressable onPress={()=>router.push("/")}>
                    <Ionicons name="log-out-outline" size={24} color="#EC594E" />
                </Pressable>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Profile Info */}
                <View style={styles.profileInfoContainer}>
                    <Image source={profile_img || { uri: placeholderProfile }} style={styles.profileImage} />
                    <Text style={styles.profileName}>Timur</Text>
                    <Text style={styles.profileEmail}>user@example.com</Text>
                    <View style={styles.verifiedTag}>
                        <Text style={styles.verifiedText}>Verified</Text>
                    </View>
                </View>

                {/* General Section */}
                <Text style={styles.sectionTitle}>GENERAL</Text>
                <Pressable onPress={()=>router.push("/home/verification")} style={styles.optionItem}>
                    <Ionicons name="eye-outline" size={24} color="#fff" />
                    <Text style={styles.optionText}>Identity verification</Text>
                </Pressable>

                {/* BFinance Section */}
                <Text style={styles.sectionTitle}>BFINANCE</Text>
                <Pressable onPress={()=>router.push("/home/support")} style={styles.optionItem}>
                    <Ionicons name="help-circle-outline" size={24} color="#fff" />
                    <Text style={styles.optionText}>Support</Text>
                </Pressable>

                {/* Legal Section */}
                <Text style={styles.sectionTitle}>LEGAL</Text>
                <Pressable onPress={()=>router.push("/home/privacy")} style={styles.optionItem}>
                    <Ionicons name="document-text-outline" size={24} color="#fff" />
                    <Text style={styles.optionText}>Privacy Policy</Text>
                </Pressable>
                <Pressable onPress={()=>router.push("/home/terms")} style={styles.optionItem}>
                    <Ionicons name="document-text-outline" size={24} color="#fff" />
                    <Text style={styles.optionText}>Terms of Use</Text>
                </Pressable>
                <Pressable onPress={()=>router.push("/home/aml")} style={styles.optionItem}>
                    <Ionicons name="document-text-outline" size={24} color="#fff" />
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
        padding: 20,
        paddingTop: 50
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    scrollContent: {
        paddingBottom: 20,
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
        fontSize: 24,
        fontWeight: 'bold',
    },
    profileEmail: {
        color: '#888',
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
        padding: 20,
        borderRadius: 12,
        marginBottom: 10,
    },
    optionText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 15,
    },
});

export default Profile;
