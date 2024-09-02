import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const dummyData = [
    { id: '1', value: 'Item 1' },
    { id: '2', value: 'Item 2' },
    { id: '3', value: 'Item 3' },
    { id: '4', value: 'Item 4' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  item: {
    fontSize: 18,
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
  },
});
