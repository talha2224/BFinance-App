import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import card_img from '../../../assets/images/card/card_2.png';
import sucess_img from '../../../assets/images/card/sucess.png';
import btc_img from '../../../assets/images/home/btc.png';

const placeholderImages = {
    btc: 'https://cdn.iconscout.com/icon/free/png-256/bitcoin-3-555891.png',
    cash: 'https://cdn.iconscout.com/icon/free/png-256/cash-1549460-1311545.png',
};

const Issuance_payment = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const cardDetails = {
        image: card_img,
        amount: '100 USD',
    };

    const paymentOptions = {
        fiat: [{ currency: 'Dollars', value: '1 USD', icon: placeholderImages.cash, amount: '100 USD' }],
        crypto: [
            { currency: 'Bitcoin', amount: '0.1 BTC', value: '0.00001 BTC', icon: placeholderImages.btc },
            { currency: 'Bitcoin', amount: '0.1 BTC', value: '0.00001 BTC', icon: placeholderImages.btc },
            { currency: 'Bitcoin', amount: '0.1 BTC', value: '0.00001 BTC', icon: placeholderImages.btc },
        ],
    };

    const handlePay = () => {
        // This function would handle the payment logic and then set isSuccess to true
        setIsSuccess(true);
        console.log('Payment initiated...');
    };

    if (isSuccess) {
        return (
            <View style={styles.container}>
                <Pressable onPress={() => router.back()} style={styles.header}>
                    <Ionicons name="chevron-back" size={24} color="#fff" />
                    <Text style={styles.headerTitle}>Card issuance</Text>
                </Pressable>
                <View style={styles.successContainer}>
                    <Image source={sucess_img} style={{ width: 100, height: 100 }} />
                    <Text style={styles.successTitle}>Success!</Text>
                    <Text style={styles.successSubtitle}>The request for card issuance has been accepted. It will be issued very soon</Text>
                </View>

            </View>
        );
    }

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

                <View style={styles.paymentSection}>
                    <View style={styles.paymentHeader}>
                        <Text style={styles.paymentTitle}>Payment</Text>
                        <Text style={styles.paymentAmount}>{cardDetails.amount}</Text>
                    </View>
                    <Pressable style={styles.closeIcon}>
                        <Ionicons name="close" size={24} color="#fff" />
                    </Pressable>
                </View>

                <Text style={styles.sectionTitle}>FIAT</Text>
                {paymentOptions.fiat.map((item, index) => (
                    <Pressable key={index} style={styles.optionItem}>
                        <View style={styles.iconContainer}>
                            <FontAwesome name={"dollar"} size={24} color="#fff" />
                        </View>
                        <View style={styles.optionTextContainer}>
                            <Text style={styles.optionLabel}>{item.currency}</Text>
                            <Text style={styles.optionAmount}>{item.amount}</Text>
                        </View>
                        <Text style={styles.optionValue}>{item.value}</Text>
                    </Pressable>
                ))}

                <Text style={styles.sectionTitle}>CRYPTO</Text>
                {paymentOptions.crypto.map((item, index) => (
                    <Pressable key={index} style={styles.optionItem}>
                        <Image source={btc_img} style={styles.optionIcon} />
                        <View style={styles.optionTextContainer}>
                            <Text style={styles.optionLabel}>{item.currency}</Text>
                            <Text style={styles.optionAmount}>{item.amount}</Text>
                        </View>
                        <Text style={styles.optionValue}>{item.value}</Text>
                    </Pressable>
                ))}
            </ScrollView>

            <Pressable style={styles.payButton} onPress={handlePay}>
                <Text style={styles.payButtonText}>Pay</Text>
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
        marginBottom: 40,
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
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    cardImage: {
        width: 200,
        height: 300,
        resizeMode: 'contain',
        borderRadius: 12,
    },
    paymentSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        padding: 15,
        borderRadius: 12,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    paymentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paymentTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    paymentAmount: {
        color: '#888',
        fontSize: 14,
        marginLeft: 10,
    },
    closeIcon: {
        padding: 5,
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
    optionIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    optionTextContainer: {
        flex: 1,
        marginLeft: 15,
    },
    optionLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    optionAmount: {
        color: '#888',
        fontSize: 12,
    },
    optionValue: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    payButton: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 20,
    },
    payButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    successContainer: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    successTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    successSubtitle: {
        color: '#888',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Issuance_payment;
