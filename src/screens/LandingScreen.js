import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';


const LandingScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Fortune Teller</Text>
            <Button title="Get Started" onPress={() => navigation.navigate('Form')}/>
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

  export default LandingScreen;
