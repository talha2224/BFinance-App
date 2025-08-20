import { router } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import notfound_img from '../../../assets/images/card/empty.png';
import BottomNavbar from '../../../components/BottomNavbar';

const Notfound = () => {
    const handleIssueCard = () => {
        router.push("/home/card/issuance")
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Cards</Text>
            </View>
            <View style={styles.content}>
                <Image source={notfound_img} />
                <Text style={styles.title}>Nothing here :(</Text>
                <Text style={styles.subtitle}>Issue your card and start paying with crypto today</Text>
                <Pressable style={styles.issueButton} onPress={handleIssueCard}>
                    <Text style={styles.issueButtonText}>Issue card now</Text>
                </Pressable>
            </View>
            <BottomNavbar />
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
        alignItems: 'flex-start',
        marginBottom: 40,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    subtitle: {
        color: '#888',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
    },
    issueButton: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        borderRadius:30,
        alignItems: 'center',
        width: '60%',
    },
    issueButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Notfound;
