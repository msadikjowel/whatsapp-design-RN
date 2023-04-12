import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Head from './components/Head';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Head />
        <Contacts />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
