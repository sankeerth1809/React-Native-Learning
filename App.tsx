
import { StyleSheet,  Text, SafeAreaView, View, FlatList} from 'react-native';


const App = () => {
  const DATA = [
     { id: '1', title: 'First Item' },
     { id: '2', title: 'Second Item' },
     { id: '3', title: 'Third Item' },
     { id: '4', title: 'Fourth Item' },
     { id: '5', title: 'Fifth Item' },
     { id: '6', title: 'Sixth Item' },
     { id: '7', title: 'Seventh Item' },
     { id: '8', title: 'Eighth Item' },
     { id: '9', title: 'Ninth Item' },
     { id: '10', title: 'Tenth Item' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {DATA.map((item)=>(
        <View key={item.id}>
          <Text>{item.title}</Text>
        </View>
      ))}


      <FlatList
        data={DATA}
       
        renderItem={({item}:any)=> 
          <View style={styles.item}>
          <Text style={styles.title}>{item.id}</Text>
          <Text style={styles.title}>{item.title}</Text>
          </View>}
        keyExtractor={(item)=> item.id}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    marginLeft: 8
  },
});

export default App;