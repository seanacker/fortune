import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';


const ResultScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Real love waits for you. Its closer then you think!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
  });

  export default ResultScreen;
