import React from 'react'
import { View } from 'react-native'

import { ListItem, Avatar } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'
import LinearGradient from 'react-native-linear-gradient'

const list = [
    {
        name: 'Cerita dasar',
        category: 'basic'
    },
    {
        name: 'Cerita menengah',
        category: 'medium'
    },
    {
        name: 'Latihan soal',
        category: 'qna'
    },
]

const ListWithimage = (props) => {
    const { navigation } = props

    const showDetail = (i) => {
        if (i !== 'qna') navigation.navigate('story-list', { category: i });
        else navigation.navigate('qna');
    }
    return (
        <View>
            {
                list.map((l, i) => (
                    <ListItem
                        onPress={() => showDetail(l.category)}
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
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </View>
    )
}

export default ListWithimage