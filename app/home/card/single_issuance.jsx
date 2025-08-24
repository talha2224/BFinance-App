import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import apple_logo from '../../../assets/images/auth/apple_logo.png';
import card_img from '../../../assets/images/card/card_2.png';
import google_logo from '../../../assets/images/card/google.png';


const Single_issuance = () => {
    const cardDetails = {
        title: 'BFinance Card',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: card_img,
        platforms: [apple_logo, google_logo],
        terms: [
            { label: 'Card topup fee', value: '2%' },
            { label: 'Transaction fee', value: '0.5$' },
            { label: 'ATM fee', value: '1$ + 2%' },
        ],
    };

    const handleIssueCard = () => {
        router.push("/home/card/issuance_payment")
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={() => router.back()} style={styles.header}>
                <Ionicons name="chevron-back" size={24} color="#fff" />
                <Text style={styles.headerTitle}>Card issuance</Text>
            </Pressable>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.cardContainer}>
                    <Image source={card_img} style={styles.cardImage} />
                </View>
                <Text style={styles.cardTitle}>{cardDetails.title}</Text>
                <Text style={styles.cardDescription}>{cardDetails.description}</Text>
                <View style={styles.platformLogos}>
                    {cardDetails.platforms.map((logo, index) => (
                        <View key={index} style={{backgroundColor:"#0f0f0f",borderRadius:100,width:41,height:41,justifyContent:"center",alignItems:"center",marginRight:10}}>
                            <Image source={logo} style={styles.platformLogo} />
                        </View>
                    ))}
                </View>

                <Text style={styles.sectionTitle}>Terms & Conditions</Text>
                {cardDetails.terms.map((term, index) => (
                    <View key={index} style={styles.termItem}>
                        <Text style={styles.termLabel}>{term.label}</Text>
                        <Text style={styles.termValue}>{term.value}</Text>
                    </View>
                ))}
            </ScrollView>

            <Pressable style={styles.issueButton} onPress={handleIssueCard}>
                <Text style={styles.issueButtonText}>Issue card for 20$</Text>
            </Pressable>
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
        fontWeight: 'semibold',
        marginLeft: 20,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    cardContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    cardImage: {
        width: 200,
        height: 300,
        resizeMode: 'contain',
        borderRadius: 16,
    },
    cardTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    cardDescription: {
        color: '#AAAAAA',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
    },
    platformLogos: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    platformLogo: {
        width: 20,
        height: 20,
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    termItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#0F0F0F',
        padding: 15,
        borderRadius: 16,
        marginBottom: 10,
    },
    termLabel: {
        color: '#fff',
        fontSize: 16,
    },
    termValue: {
        color: '#AAAAAA',
        fontSize: 16,
    },
    issueButton: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    issueButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Single_issuance;
