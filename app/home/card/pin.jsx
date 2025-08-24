import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Pin = () => {
  const [pin, setPin] = useState('');
  const [pin2, setPin2] = useState('');
  const [step, setStep] = useState(1);

  const handlePress = (digit) => {
    if (step === 1) {
      if (pin.length < 4) {
        setPin(pin + digit);
      }
    } else if (step === 2) {
      if (pin2.length < 4) {
        setPin2(pin2 + digit);
      }
    }
  };

  const handleDelete = () => {
    if (step === 1) {
      setPin(pin.slice(0, -1));
    } else if (step === 2) {
      setPin2(pin2.slice(0, -1));
    }
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (pin.length === 4) {
        setStep(2);
      }
    } else if (step === 2) {
      if (pin2.length === 4 && pin === pin2) {
        setStep(3);
      } else {
        // Handle mismatch
        setPin('');
        setPin2('');
        setStep(1);
        console.log("PINs do not match. Please try again.");
      }
    }
  };

  const renderPinDots = (currentPin) => {
    return Array.from({ length: 4 }).map((_, index) => (
      <View
        key={index}
        style={[
          styles.pinDot,
          index < currentPin.length && styles.pinDotFilled,
        ]}
      />
    ));
  };

  const renderKeypad = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <View style={styles.keypadContainer}>
        <View style={styles.keypadRow}>
          {numbers.slice(0, 3).map((num) => (
            <Pressable key={num} style={styles.keypadButton} onPress={() => handlePress(String(num))}>
              <Text style={styles.keypadText}>{num}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.keypadRow}>
          {numbers.slice(3, 6).map((num) => (
            <Pressable key={num} style={styles.keypadButton} onPress={() => handlePress(String(num))}>
              <Text style={styles.keypadText}>{num}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.keypadRow}>
          {numbers.slice(6, 9).map((num) => (
            <Pressable key={num} style={styles.keypadButton} onPress={() => handlePress(String(num))}>
              <Text style={styles.keypadText}>{num}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.keypadRow}>
          <View style={styles.keypadButtonPlaceholder} />
          <Pressable style={styles.keypadButton} onPress={() => handlePress('0')}>
            <Text style={styles.keypadText}>0</Text>
          </Pressable>
          <Pressable style={styles.keypadButton} onPress={handleDelete}>
            <Ionicons name="backspace-outline" size={24} color="#00E675" />
          </Pressable>
        </View>
      </View>
    );
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Text style={styles.instructionText}>Enter new PIN code</Text>
            <View style={styles.pinDotsContainer}>{renderPinDots(pin)}</View>
            {renderKeypad()}
            <Pressable
              style={[
                styles.continueButton,
                pin.length === 4 ? null : styles.continueButtonDisabled,
              ]}
              onPress={handleNextStep}
              disabled={pin.length !== 4}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </Pressable>
          </>
        );
      case 2:
        return (
          <>
            <Text style={styles.instructionText}>Re-enter new PIN code</Text>
            <View style={styles.pinDotsContainer}>{renderPinDots(pin2)}</View>
            {renderKeypad()}
            <Pressable
              style={[
                styles.continueButton,
                pin2.length === 4 ? null : styles.continueButtonDisabled,
              ]}
              onPress={handleNextStep}
              disabled={pin2.length !== 4}
            >
              <Text style={styles.continueButtonText}>Confirm</Text>
            </Pressable>
          </>
        );
      case 3:
        return (
          <View style={styles.successContainer}>
            <Ionicons name="checkmark-circle-outline" size={100} color="#00E675" />
            <Text style={styles.successTitle}>Success!</Text>
            <Text style={styles.successSubtitle}>PIN code has been set successfully.</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={()=>router.back()} style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>PIN code setup</Text>
      </Pressable>
      <View style={styles.content}>
        {renderContent()}
      </View>
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
    fontSize: 20,
    fontWeight: 'semibold',
    marginLeft: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructionText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pinDotsContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  pinDot: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderWidth: 1,
    borderColor: '#888',
    marginHorizontal: 10,
  },
  pinDotFilled: {
    backgroundColor: '#00E675',
    borderColor: '#00E675',
  },
  keypadContainer: {
    width: '100%',
    maxWidth: 300,
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  keypadButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#0F0F0F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keypadButtonPlaceholder: {
    width: 70,
    height: 70,
  },
  keypadText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#00E675',
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
    marginTop: 20,
  },
  continueButtonDisabled: {
    backgroundColor: '#333',
  },
  continueButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successContainer: {
    alignItems: 'center',
  },
  successTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  successSubtitle: {
    color: '#AAAAAA',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Pin;
