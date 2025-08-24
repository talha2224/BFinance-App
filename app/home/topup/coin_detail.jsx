import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import btc_img from '../../../assets/images/home/btc.png';
import eth_img from '../../../assets/images/home/eth.png';
import ton_img from '../../../assets/images/home/ton.png';


const Coin_detail = () => {
    const networks = [
        { name: 'Bitcoin', symbol: 'BTC', img: btc_img },
        { name: 'Ethereum', symbol: 'ETH', img: eth_img },
        { name: 'The Open Network', symbol: 'TON', img: ton_img },
    ];

    return (
        <View style={styles.container}>
            <Pressable onPress={()=>router.back()} style={styles.header}>
                <Ionicons name="chevron-back" size={24} color="#fff" />
                <Text style={styles.headerTitle}>USDT</Text>
            </Pressable>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.sectionTitle}>SELECT NETWORK</Text>
                {networks.map((item, index) => (
                    <Pressable onPress={()=>router.push("/home/topup/currency_detail")} key={index} style={styles.networkItem}>
                        <Image source={item.img} style={styles.networkIcon} />
                        <View style={styles.textContainer}>
                            <Text style={styles.networkName}>{item.name}</Text>
                            <Text style={styles.networkSymbol}>{item.symbol}</Text>
                        </View>
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
        marginBottom: 30,
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
    sectionTitle: {
        color: '#AAAAAA',
        fontSize: 13,
        fontWeight: '400',
        marginTop: 20,
        marginBottom: 10,
    },
    networkItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0F0F0F',
        padding: 15,
        borderRadius: 16,
        marginBottom: 10,
    },
    textContainer: {
        marginLeft: 15,
    },
    networkName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    networkSymbol: {
        color: '#AAAAAA',
        fontSize: 14,
    },
    networkIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});

export default Coin_detail;
