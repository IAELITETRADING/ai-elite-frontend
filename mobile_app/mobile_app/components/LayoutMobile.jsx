import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TopNav from './TopNav';
import Footer from './Footer';

const LayoutMobile = ({ children }) => {
  return (
    <>
      <TopNav />
      <ScrollView contentContainerStyle={styles.body}>
        {children}
      </ScrollView>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f2f6ff',
  },
});

export default LayoutMobile;
