import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Flex = ({ navigation, route }) => {
    return (
        <View
            style={[
                styles.container,
                {
                    // Try setting `flexDirection` to `"row"`.
                    flexDirection: 'column',
                },
            ]}>
            <View style={{ flex: 1, backgroundColor: 'red' }} />
            <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
            <View style={{ flex: 3, backgroundColor: 'green' }} >

                <Text>Du lieu tu Page1: {route.params.itemId} - {route.params.name}
                </Text>

                <TouchableOpacity onPress={() => {
                    //navigation.pop(1);

                    route.params.onGoBack({ name: 'CP17306', passMon: true });
                    navigation.goBack();
                }}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Quay lai</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('Page4', {data: 'CP17306'});
                }}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Go to Page3</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    button: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Flex;