import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import apple_logo from '../../../assets/images/auth/apple_logo.png';
import card_img from '../../../assets/images/card/card.png';

const Single = () => {
    
    const transactions = [
        { type: 'debit', label: 'APPLE.COM/BILL', time: '19:20', amount: '-100', },
        { type: 'credit', label: 'APPLE.COM/BILL', time: '19:20', amount: '$10.32' },
    ];

    return (
        <View style={styles.container}>
            <Pressable onPress={() => router.back()} style={styles.header}>
                <Ionicons name="chevron-back" size={24} color="#fff" />
                <Text style={styles.headerTitle}>Card *1234</Text>
            </Pressable>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Image source={card_img} style={styles.cardImage} />

                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceTitle}>Card's balance</Text>
                    <Text style={styles.balanceAmount}>100$</Text>
                    <View style={styles.actionButtonsContainer}>
                        <Pressable style={styles.balanceActionButton} onPress={() => router.push("/home/card/topup")}>
                            <Text style={styles.balanceActionButtonText}>Topup</Text>
                        </Pressable>
                        <Pressable style={[styles.balanceActionButton,{backgroundColor:"transparent"}]} onPress={() => router.push("/home/card/withdraw")}>
                            <Text style={{color:"#fff"}}>Withdraw</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.cardActions}>
                    <Pressable style={styles.cardActionItem} onPress={() => router.push("/home/card/edit")}>
                        <Ionicons name="eye-outline" size={24} color="#fff" />
                        <Text style={styles.cardActionText}>Show</Text>
                    </Pressable>
                    <Pressable style={styles.cardActionItem} onPress={() => router.push("/home/card/edit")}>
                        <Ionicons name="snow-outline" size={24} color="#fff" />
                        <Text style={styles.cardActionText}>Freeze</Text>
                    </Pressable>
                    <Pressable style={styles.cardActionItem} onPress={() => router.push("/home/card/edit")}>
                        <Ionicons name="settings-outline" size={24} color="#fff" />
                        <Text style={styles.cardActionText}>Settings</Text>
                    </Pressable>
                </View>

                <Text style={styles.historyTitle}>TODAY</Text>
                {transactions.map((item, index) => (
                    <View key={index} style={styles.transactionItem}>
                        <Image source={apple_logo} style={styles.transactionIcon} />
                        <View style={styles.transactionTextContainer}>
                            <Text style={styles.transactionLabel}>{item.label}</Text>
                            <Text style={styles.transactionTime}>{item.time}</Text>
                        </View>
                        <Text
                            style={[
                                styles.transactionAmount,
                                { color: item.type === 'debit' ? '#FF6347' : '#00FF7F' },
                            ]}
                        >
                            {item.amount}
                        </Text>
                    </View>
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
    cardImage: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
        borderRadius: 12,
        marginBottom: 20,
    },
    balanceContainer: {
        backgroundColor: '#1E1E1E',
        padding: 20,
        borderRadius: 12,
        marginBottom: 20,
    },
    balanceTitle: {
        color: '#888',
        fontSize: 14,
        marginBottom: 5,
    },
    balanceAmount: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    balanceActionButton: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 12,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    balanceActionButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        backgroundColor: '#1E1E1E',
        paddingVertical: 10,
        borderRadius: 10
    },
    cardActionItem: {
        alignItems: 'center',
    },
    cardActionText: {
        color: '#fff',
        fontSize: 14,
        marginTop: 5,
    },
    historyTitle: {
        color: '#888',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    transactionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        padding: 15,
        borderRadius: 12,
        marginBottom: 10,
    },
    transactionIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    transactionTextContainer: {
        flex: 1,
        marginLeft: 15,
    },
    transactionLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    transactionTime: {
        color: '#888',
        fontSize: 12,
    },
    transactionAmount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Single;
