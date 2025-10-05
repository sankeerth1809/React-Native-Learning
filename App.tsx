
import { StyleSheet,  Text, SafeAreaView, View} from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>3</Text>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',

    flexDirection: 'column', // 'row' or 'column'
    justifyContent: 'space-around', // 'center', 'space-between', etc.
    alignItems: 'center', // 'center', 'flex-start', etc.
  },

  // These are our Flex Items
  box1: {
    width: 80,
    height: 80,
    backgroundColor: '#ff6347', // Tomato
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    width: 80,
    height: 80,
    backgroundColor: '#4682b4', // SteelBlue
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    width: 80,
    height: 80,
    backgroundColor: '#32cd32', // LimeGreen
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;