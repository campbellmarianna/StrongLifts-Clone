/* right in your home screen
 your going to add a screen with a status bar */

import React from 'react';
// import PropTypes from 'prop-types';
import { StatusBar, SafeAreaView } from 'react-native';

import { Container } from '../components/Container';

function Home() {
  return (
    <Container>
      <SafeAreaView style={{ flex: 4, backgroundColor: 'red' }}>
        <StatusBar translucent={false} barStyle="dark-content" />
      </SafeAreaView>
    </Container>
  );
}

export default Home;
