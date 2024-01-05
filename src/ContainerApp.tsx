import { DARK_THEME, LIGHT_THEME } from '@constants/theme';
import toastConfig from '@constants/toast';
import '@i18n';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { persistor, store } from '@redux/store';
import { navigationRef } from '@routes/utils';
import appConfig from '@theme';
import { NativeBaseProvider } from 'native-base';
import React, { ReactElement, Suspense, useCallback, useEffect } from 'react';
import { Text, useColorScheme } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'src/App';
import { TamaguiProvider } from 'tamagui';

function ContainerApp(): ReactElement {
  const colorScheme = useColorScheme() ?? LIGHT_THEME;

  const hideBootSplash = useCallback(async () => {
    await RNBootSplash.hide({ fade: true });
  }, []);

  useEffect(() => {
    hideBootSplash();
  }, [hideBootSplash]);
  console.log('ContainerApp', store);
  return (
    <Suspense fallback="Loading...">
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <TamaguiProvider config={appConfig} defaultTheme={colorScheme}>
              <NavigationContainer ref={navigationRef}>
                <NativeBaseProvider>
                  <App />
                </NativeBaseProvider>
              </NavigationContainer>

              <Toast config={toastConfig} />
            </TamaguiProvider>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  );
}

export default ContainerApp;
