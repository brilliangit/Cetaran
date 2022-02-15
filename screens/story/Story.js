import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import ListWithimage from '../../components/list/ListWithimage'
import { Image } from 'react-native-elements'
const BASE_URI = 'https://source.unsplash.com/random?sig=';
function Story({ navigation }) {

    return (
        <View style={styles.container}>
            <View
                style={{ height: 200, width: '100%' }}
            >
                <Image
                    source={require('../../assets/img/Logo.png')}
                    containerStyle={styles.item}
                    PlaceholderContent={<ActivityIndicator />}
                />

            </View>

            <ListWithimage navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ccc'
    },
    list: {
        width: '100%',
        backgroundColor: '#000',
    },
    item: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,

    },
});

export default Story