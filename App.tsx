import React, { useState } from 'react';
import { StyleSheet,  Text, SafeAreaView, TextInput, Button } from 'react-native';


const App = () => {
  const [name, setName] = useState ("");
  return (
    <SafeAreaView>
      <Text style={styles.label}>Enter your name</Text>
      <TextInput
        style = {styles.input}
        placeholder = "Sank..."
        value={name} // whenever the stte is updated this field should also change
        onChangeText={(e) => setName(e)}  // or onChangeText={setName}
      />
      <Text>Hai {name}</Text>
      <Button title="Clear" onPress={() => setName("")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
});

export default App;