// App.js
import React, { useEffect } from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
  return (
    <StripeProvider
      publishableKey="your-publishable-key"
      merchantIdentifier="your-merchant-identifier"
    >
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </StripeProvider>   
  );
};

export default App;
