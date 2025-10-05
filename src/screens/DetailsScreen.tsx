import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App'; // We will create this type in App.tsx


type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen = ({navigation, route }: DetailsScreenProps) => {
  // Access the params from the route prop
  const { itemId, otherParam } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Other Param: {otherParam}</Text>
      <Button title='Go Back' onPress={()=> navigation.goBack()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
});

export default DetailsScreen;