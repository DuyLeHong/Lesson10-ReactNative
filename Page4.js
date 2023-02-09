import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

export default class Page4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true,
        };
    }

    async getMovies() {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            this.setState({ data: json.movies });
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { data, isLoading } = this.state;

        return (
            <View style={{ flex: 1, padding: 24 }}>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <Text style={this.styles.item}>
                                So thu tu: {item.id}, {item.title}, {item.releaseYear}
                            </Text>
                        )}
                    />
                )}
            </View>
        );
    }

    styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 22,
        },
        item: {
            padding: 10,
            fontSize: 28,
            height: 44,
        },
    });
}