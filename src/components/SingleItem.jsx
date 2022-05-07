import React from 'react'
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import items from '../data/items';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: '#e6e6fa',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  title: {
    color: '#09f',
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 20
  },
  tag: {
    backgroundColor: '#09f',
    color: '#fff',
    width: 90,
    borderRadius: 10,
    padding: 2,
    textAlign: 'center',
    margin: 2,


  },
  author: {
    color: '#6b6f77',
  },

  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 200,
  },
  commentsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 50,
  }
});

const SingleItem = () => {
  return (
    <FlatList
      data={items}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item }) => (
        <View key={items.id} style={styles.container}>
          <Image style={styles.image} source={{ uri: item.picture }} />
          <View>
            <Text style={styles.title}>{item.about.substring(0, 20)}</Text>
            <Text> by {item.author}</Text>
            <View style={styles.tagsContainer}>
              {item.tags.map(tag => (
                <Text style={styles.tag}>{tag}</Text>
              ))}
            </View>
            <View style={styles.commentsContainer}>
              <Icon size={24} color="black" name="comments" />
              <Text>{item.comments.length} Comments</Text>
            </View>
          </View>
        </View>
      )}
    />
  )
}

export default SingleItem