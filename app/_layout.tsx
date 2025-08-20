import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false, animation: "slide_from_right", animationTypeForReplace: "push", contentStyle: { backgroundColor: "rgb(1, 1, 1)" }, }}>
        
        <Stack.Screen name="index"/>
        <Stack.Screen name="auth/index"/>
        <Stack.Screen name="auth/profile"/>

        <Stack.Screen name="home/index"/>
        <Stack.Screen name="home/card"/>
        <Stack.Screen name="home/services"/>
        <Stack.Screen name="home/history"/>
        <Stack.Screen name="home/history_details"/>
        <Stack.Screen name="home/support"/>
        <Stack.Screen name="home/profile"/>
        <Stack.Screen name="home/privacy"/>
        <Stack.Screen name="home/terms"/>
        <Stack.Screen name="home/aml"/>
        <Stack.Screen name="home/verification"/>

        <Stack.Screen name="home/topup/index"/>
        <Stack.Screen name="home/topup/coin_detail"/>
        <Stack.Screen name="home/topup/currency_detail"/>
        <Stack.Screen name="home/topup/qr_code"/>


        <Stack.Screen name="home/withdraw/index"/>
        <Stack.Screen name="home/withdraw/coin_detail"/>
        <Stack.Screen name="home/withdraw/currency_detail"/>
        <Stack.Screen name="home/withdraw/success"/>


        <Stack.Screen name="home/card/notfound"/>
        <Stack.Screen name="home/card/single"/>
        <Stack.Screen name="home/card/edit"/>
        <Stack.Screen name="home/card/pin"/>
        <Stack.Screen name="home/card/topup"/>
        <Stack.Screen name="home/card/withdraw"/>

    


        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
