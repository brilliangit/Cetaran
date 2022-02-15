import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
]

const CardStory = () => {
    return (
        <Card>
            <View
                style={{ height: 200, width: '100%' }}
            >
                <Image
                    style={{
                        height: '100%', width: '100%'
                    }}
                    source={require('../../assets/img/content/keongmas.png')}
                />

            </View>
            <Text style={{ marginBottom: 10 }}>
                Malin Kundang
            </Text>
            <Text style={{ marginBottom: 10 }}>
                dfhgdksjglfdgdfjm dfhgkfddfjg dfgkldfsgjfdklsgnfd...
            </Text>
            <Button
                // icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='Baca Cerita' />
        </Card>
    )
}

export default CardStory