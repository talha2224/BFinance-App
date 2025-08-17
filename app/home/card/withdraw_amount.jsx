import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import btc_img from '../../../assets/images/home/btc.png'; // Placeholder for asset

const Withdraw_amount = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const paymentOptions = {
        fiat: [{ currency: 'Dollars', amount: '100 USD', value: '1 USD', icon: 'cash-outline' }],
        crypto: [
            { currency: 'Bitcoin', amount: '0.1 BTC', value: '0.00001 BTC', icon: btc_img },
            { currency: 'Bitcoin', amount: '0.1 BTC', value: '0.00001 BTC', icon: btc_img },
            { currency: 'Bitcoin', amount: '0.1 BTC', value: '0.00001 BTC', icon: btc_img },
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
                <Pressable onPress={() => router.push("/home/card/single")} style={styles.header}>
                    <Ionicons name="chevron-back" size={24} color="#fff" />
                    <Text style={styles.headerTitle}>Card topup</Text>
                </Pressable>
                <View style={styles.successContainer}>
                    <Ionicons name="checkmark-circle-outline" size={100} color="#00FF7F" />
                    <Text style={styles.successTitle}>Success!</Text>
                    <Text style={styles.successSubtitle}>Withdraw accepted for processing</Text>
                </View>

            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={() => router.back()} style={styles.header}>
                <Ionicons name="chevron-back" size={24} color="#fff" />
                <Text style={styles.headerTitle}>Withdraw from card</Text>
            </Pressable>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.feeContainer}>
                    <Text style={styles.feeText}>2%</Text>
                    <Text style={styles.feeSubText}>Withdrawal fee</Text>
                    <Text style={styles.feeAmount}>0.00$</Text>
                </View>

                <View style={styles.paymentSection}>
                    <View style={styles.paymentHeader}>
                        <Text style={styles.paymentTitle}>Payment</Text>
                        <Text style={styles.paymentAmount}>100 USD</Text>
                    </View>
                    <Pressable style={styles.closeIcon}>
                        <Ionicons name="close" size={24} color="#fff" />
                    </Pressable>
                </View>

                <Text style={styles.sectionTitle}>FIAT</Text>
                {paymentOptions.fiat.map((item, index) => (
                    <Pressable key={index} style={styles.optionItem}>
                        <Ionicons name={item.icon} size={24} color="#fff" />
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
                        <Image source={item.icon} style={styles.optionIcon} />
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
    feeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1E1E1E',
        padding: 15,
        borderRadius: 12,
        marginBottom: 20,
    },
    feeText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    feeSubText: {
        color: '#888',
        fontSize: 14,
        marginLeft: 10,
        flex: 1,
    },
    feeAmount: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
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

export default Withdraw_amount;
