import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Touchable } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import 'react-native-reanimated';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  const router = useRouter();
  
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return  <Stack>
  <Stack.Screen name="index" options={{headerShown: false}} />
  <Stack.Screen name="signup" options={{
    title: '',
    headerBackTitle: '',
    headerShadowVisible: false,
    headerStyle: {backgroundColor: Colors.background},
    headerLeft: () => (
      <TouchableOpacity onPress={router.back}>
        <Ionicons name ="arrow-back" size={24} color ={Colors.dark}/>
      </TouchableOpacity>
    )
  }}
  />
</Stack>;
}

const RootLayoutNav =() =>{

  return (
     <GestureHandlerRootView style={{flex: 1}}>
     <StatusBar style="light" />
      <InitialLayout />
     </GestureHandlerRootView>
  );
}

export default RootLayoutNav;
