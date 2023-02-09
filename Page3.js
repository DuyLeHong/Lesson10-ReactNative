import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

const FlatListBasics = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { key: route.params.data , value: '1'},
                    { key: 'Devin' , value: '2'},
                    { key: 'Dan' , value: '3'},
                    { key: 'Dominic' , value: '4'},
                    { key: 'Jackson' , value: '5'},
                    { key: 'James' , value: '6'},
                    { key: 'Joel' , value: '7'},
                    { key: 'John' , value: '9'},
                    { key: 'Jillian' , value: '10'},
                    { key: 'Jimmy' , value: '11'},
                    { key: 'Julie' , value: '12'},
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item.key} - so thu tu: {item.value}</Text>}
            />
        </View>
    );
};

export default FlatListBasics;