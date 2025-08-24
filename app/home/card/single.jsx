import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import apple_logo from '../../../assets/images/card/apple.png';
import card_img from '../../../assets/images/card/card.png';
import card_green_img from '../../../assets/images/card/card_3.png';
import shadow_img from '../../../assets/images/card/shadow.png';

const Single = () => {
    const { index } = useLocalSearchParams();
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

            {/* SHADOW */}
            {
                index == 3 && (
                    <Pressable onPress={() => router.back()} style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 }}>
                        <Image source={shadow_img} />
                    </Pressable>
                )
            }

            <ScrollView contentContainerStyle={styles.scrollContent}>

                <Image source={index == 3 ? card_green_img : card_img} style={styles.cardImage} />

                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceTitle}>Card's balance</Text>
                    <Text style={styles.balanceAmount}>100$</Text>
                    <View style={styles.actionButtonsContainer}>
                        <Pressable style={styles.balanceActionButton} onPress={() => router.push("/home/card/topup")}>
                            <Text style={styles.balanceActionButtonText}>Topup</Text>
                        </Pressable>
                        <Pressable style={[styles.balanceActionButton, { backgroundColor: "transparent" }]} onPress={() => router.push("/home/card/withdraw")}>
                            <Text style={{ color: "#fff", fontSize: 15, fontWeight: "semibold" }}>Withdraw</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.cardActions}>
                    <Pressable style={styles.cardActionItem} onPress={() => router.push("/home/card/edit")}>
                        <View style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 100, backgroundColor: "#000" }}>
                            <Ionicons name="eye-outline" size={20} color="#fff" />
                        </View>
                        <Text style={styles.cardActionText}>Show</Text>
                    </Pressable>
                    <Pressable style={styles.cardActionItem} onPress={() => router.push("/home/card/edit")}>
                        <View style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 100, backgroundColor: "#000" }}>
                            <Ionicons name="snow-outline" size={20} color="#fff" />
                        </View>
                        <Text style={styles.cardActionText}>Freeze</Text>
                    </Pressable>
                    <Pressable style={styles.cardActionItem} onPress={() => router.push("/home/card/edit")}>
                        <View style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 100, backgroundColor: "#000" }}>
                            <Ionicons name="settings-outline" size={20} color="#fff" />
                        </View>
                        <Text style={styles.cardActionText}>Settings</Text>
                    </Pressable>
                </View>

                <Text style={styles.historyTitle}>TODAY</Text>
                {transactions.map((item, index) => (
                    <View key={index} style={styles.transactionItem}>
                        <View style={{ width: 40, height: 40, backgroundColor: "#161616", borderRadius: 100, justifyContent: "center", alignItems: "center" }}>
                            <Image source={apple_logo} style={styles.transactionIcon} />
                        </View>
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
        fontSize: 20,
        fontWeight: 'semibold',
        marginLeft: 20,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    cardImage: {
        width: '96%',
        height: 250,
        resizeMode: 'contain',
        borderRadius: 16,
        marginBottom: 0,
    },
    balanceContainer: {
        backgroundColor: '#0F0F0F',
        padding: 20,
        borderRadius: 16,
        marginBottom: 20,
    },
    balanceTitle: {
        color: '#AAAAAA',
        fontSize: 14,
        marginBottom: 5,
    },
    balanceAmount: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'semibold',
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
        borderRadius: 16,
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
        backgroundColor: '#0F0F0F',
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
        color: '#AAAAAA',
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 10,
    },
    transactionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0F0F0F',
        padding: 15,
        borderRadius: 16,
        marginBottom: 10,
    },
    transactionIcon: {
        width: 20,
        height: 20,
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
        color: '#AAAAAA',
        fontSize: 12,
    },
    transactionAmount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Single;
