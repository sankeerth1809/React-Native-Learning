import React, { useState } from 'react';
import { StyleSheet,  Text, SafeAreaView, View, Button } from 'react-native';



const GreetingCard = (props: any) => {
  return(
    <View style={styles.content}>
    <Text>Hello {props.name}</Text>
    <Text>Welcome as a {props.role}</Text>
    </View>
  )
}

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setCount(0);
  }

  return(
    <View>
      <Text>Counter {count}</Text>
      <Button title='Increment' onPress={()=> {setCount(count+1)}}/>
      <Button title='Reset' onPress={handleReset}/>
      <Button title='Decrement' onPress={()=> {setCount(count-1)}}/>
    </View>
  )
}

const App = () => {
  return (
    <SafeAreaView style={styles.container}>

    <GreetingCard name="Sankeerth" role = "Netive developer"/>
    <GreetingCard name="Roshna" role = "Angular developer"/>

    <Counter/>
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