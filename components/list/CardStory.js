import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card, Button } from 'react-native-elements'
import ImageColection from '../../assets/imageCollection'

const CardStory = ({ data, navigation }) => {
    const { image, title, location } = data
    const showDetail = (dt) => {
        navigation.navigate('story-detail', { data: data })
    }
    return (
        <Card>
            <View
                style={{ height: 200, width: '100%' }}
            >
                <Image
                    style={{
                        height: '100%', width: '100%'
                    }}
                    source={ImageColection[image]}
                />

            </View>
            <Text style={{ marginBottom: 10, marginTop: 10, fontSize: 16, fontWeight: 'bold', color: '#333333' }}>
                {title}
            </Text>
            <Text style={{ marginBottom: 10, fontSize: 12 }}>
                {location}
            </Text>
            <Button
                onPress={() => showDetail(data)}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='Baca Cerita' />
        </Card>
    )
}

export default CardStory