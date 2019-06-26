import React, { Component } from "react";
import { View, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card, CardItem, Text, Toast, Root } from 'native-base';
import Moment from 'react-moment';
import Star from 'react-native-star-view';

export const urlPoster = 'https://image.tmdb.org/t/p/w500/'
const api_key = '7c74275931a77950a117248957624363'
const page = '1'
const language = 'en-US'
export const urlDBMovie = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${language}&page=${page}`


export default class Home extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      dataList: [],
      id: 0,
      showToast: false

    }
  }

  componentDidMount() {
    return fetch(urlDBMovie)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataList: responseJson.results,
          id: responseJson.results.id
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }



  render() {

    return (
      <Root>
        <View style={styles.container}>
          <FlatList
            data={this.state.dataList}
            renderItem={({ item }) =>
              <Card>
                <TouchableOpacity onPress={() => Toast.show({
                  text: "Ini toast!",
                })}>
                  <CardItem style={styles.item} >
                    <Image style={styles.poster} source={{ uri: urlPoster + item.poster_path }}></Image>
                    <View style={styles.infoFilm}>
                      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                      <Text numberOfLines={3}>{item.overview}</Text>
                      <Star style={styles.starStyle} score={item.vote_average} totalScore={10} />
                      <Moment element={Text} style={styles.textReleaseDate} format="D MMM YYYY">
                        {item.release_date}
                      </Moment>
                    </View>
                  </CardItem>
                </TouchableOpacity>

              </Card>
            }
            keyExtractor={({ id }, index) => index.toString()}
          />
        </View>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
  },

  item: {
    flexDirection: 'row',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  poster: {
    width: 120,
    height: '100%'
  },
  textReleaseDate: {
    color: '#BDBDBD',
    fontFamily: 'Roboto-BoldItalic'

  },

  infoFilm: {
    marginLeft: 10,
    flex: 1,
    height: 150,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  overview: {
    position: 'absolute',
    top: 50
  },
  starStyle: {
    width: 100,
    height: 20,
  }
});

