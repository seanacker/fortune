import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';

const FormScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [favoriteNumber, setFavoriteNumber] = useState('');
    return (
        <View>
            <Text style={styles.label}>Enter your name:</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Your name"
                />
                      <Text style={styles.label}>Enter your favorite number:</Text>
      <TextInput
        style={styles.input}
        value={favoriteNumber}
        onChangeText={setFavoriteNumber}
        placeholder="Favorite number"
        keyboardType="numeric"
      />
                      <Button
        title="Next"
        onPress={() => navigation.navigate('Results')}
      />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
    },
    label: {
      fontSize: 18,
      marginBottom: 8,
    },
    input: {
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10,
      marginBottom: 20,
      borderRadius: 5,
    },
  });

  export default FormScreen;
