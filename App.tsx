import React from 'react';
import { StyleSheet, ScrollView, View, Text, SafeAreaView, Image, Button, Alert, TouchableOpacity } from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={styles.image}
        />
        <Text style={styles.title}>Hello, Sankeerth!</Text>
        <Text style={styles.paragraph}>
          This is a basic card layout built with core components.
        </Text>
      </View>

      <Button title='Press Me' color="#f10e0eff" onPress={()=> Alert.alert('Pressed')}/>

      <TouchableOpacity
      style = {styles.customButton}
      onPress={()=>Alert.alert('Custom Button Pressed')}>
        <Text style={styles.paragraph}>Presss Meh Haaaard</Text>
      </TouchableOpacity>

      <View style={styles.fillerBox}/>
      <View style={styles.fillerBox}/>
      <View style={styles.fillerBox}/>
      <View style={styles.fillerBox}/>
    </View>
    </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  content: {
    padding: 20,
    alignItems: 'center', // Center items horizontally
  },
  fillerBox: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
    marginTop: 20,
    borderRadius: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom:20,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
  },
   customButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default App;