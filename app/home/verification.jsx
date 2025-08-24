import { Ionicons } from '@expo/vector-icons'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import * as ImagePicker from 'expo-image-picker'
import { router } from 'expo-router'
import { useState } from 'react'
import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, View, } from 'react-native'

const Verification = () => {
  const [status, setStatus] = useState('initial')
  const [photoUri, setPhotoUri] = useState(null)
  const [message, setMessage] = useState('')

  // 🖼️ New Gallery Picker
  const handlePickFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (status !== 'granted') {
      setMessage('Permission to access gallery is required.')
      return
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    })

    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri)
      setStatus('preview')
    }
  }

  const handleConfirmPhoto = () => {
    setStatus('processing')
    setTimeout(() => {
      setStatus('success')
    }, 3000)
  }

  const renderContent = () => {
    if (message) {
      return (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      )
    }

    if (status === 'preview' && photoUri) {
      return (
        <View style={styles.centerContainer}>
          <Image
            source={{ uri: photoUri }}
            style={{ width: 250, height: 400, borderRadius: 16 }}
          />
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Pressable style={styles.startButton} onPress={handlePickFromGallery}>
              <Text style={styles.startButtonText}>Retake</Text>
            </Pressable>
            <Pressable
              style={[styles.startButton, { marginLeft: 10 }]}
              onPress={handleConfirmPhoto}
            >
              <Text style={styles.startButtonText}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      )
    }

    if (status === 'processing') {
      return (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#00FF7F" style={{ marginBottom: 20 }} />
          <Text style={styles.centerText}>We are checking your information</Text>
        </View>
      )
    }

    if (status === 'success') {
      return (
        <View style={styles.centerContainer}>
          <Ionicons name="checkmark-circle-outline" size={100} color="#00FF7F" />
          <Text style={styles.centerText}>Success!</Text>
          <Text style={styles.successSubtitle}>
            You have successfully confirmed your identity
          </Text>
        </View>
      )
    }

    return (
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Basic</Text>
          <Text style={styles.sectionSubtitle}>Full access to the application</Text>
          <View style={styles.listItem}>
            <SimpleLineIcons name="book-open" size={16} color="#00FF7F" />
            <Text style={styles.listItemText}>Photo of your ID</Text>
          </View>
          <View style={styles.listItem}>
            <Ionicons name="checkmark-circle-outline" size={20} color="#00FF7F" />
            <Text style={styles.listItemText}>Liveness check</Text>
          </View>

          {/* Camera Option */}
          <Pressable style={styles.startButton} onPress={handlePickFromGallery}>
            <Text style={styles.startButtonText}>Start</Text>
          </Pressable>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Advanced</Text>
          <Text style={styles.sectionSubtitle}>Increased limits</Text>
          <View style={styles.listItem}>
            <Ionicons name="location" size={20} color="#00FF7F" />
            <Text style={[styles.listItemText, { color: '#888' }]}>Proof of address</Text>
          </View>
        </View>
      </ScrollView>
    )
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Identity verification</Text>
      </Pressable>
      {renderContent()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20, paddingTop: 60 },
  header: { flexDirection: 'row', alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: 20 },
  scrollContent: { paddingBottom: 20, marginTop: 20 },
  sectionCard: {
    backgroundColor: '#0F0F0F',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  sectionTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  sectionSubtitle: { color: '#AAAAAA', fontSize: 14, marginBottom: 15 },
  listItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  listItemText: { color: '#fff', fontSize: 16, marginLeft: 10 },
  startButton: {
    backgroundColor: '#222222',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 102,
    alignItems: 'center',
  },
  startButtonText: { color: '#fff', fontSize: 15, fontWeight: 'semibold' },
  centerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  centerText: { color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
  successSubtitle: { color: '#AAAAAA', fontSize: 16, marginTop: 10, textAlign: 'center' },
  messageContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  messageText: { color: 'red', fontSize: 16, textAlign: 'center' },
})

export default Verification
