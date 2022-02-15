import React from 'react'
import { StyleSheet, View } from 'react-native'

import { ListItem, Avatar, Icon } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'
import LinearGradient from 'react-native-linear-gradient'

const list = [
    {
        name: 'Cerita dasar',
        subtitle: 'Vice President',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    },
    {
        name: 'Cerita menengah',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Latihan soal',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
]

const ListWithimage = (props) => {
    const { listData, navigation } = props

    const showDetail = (i) => {
        navigation.navigate('story-list', {
            itemId: 86,
            otherParam: 'anything you want here' + i,
        });
    }
    return (
        <View>
            {
                list.map((l, i) => (
                    <ListItem
                        onPress={() => showDetail(i)}
                        Component={TouchableScale}
                        friction={90}
                        tension={100}
                        activeScale={0.95}
                        linearGradientProps={{
                            colors: ['#FF9800', '#F44336'],
                            start: { x: 1, y: 0 },
                            end: { x: 0.2, y: 0 },
                        }}
                        ViewComponent={LinearGradient}
                    >
                        <Avatar rounded source={require('../../assets/img/Logo.png')} />
                        <ListItem.Content>
                            <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
                                {l.name}
                            </ListItem.Title>
                            <ListItem.Subtitle style={{ color: 'white' }}>
                                {l.subtitle}
                            </ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </View>
    )
}

export default ListWithimage

const styles = StyleSheet.create({

})