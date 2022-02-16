import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import CardStory from '../../components/list/CardStory'

const fakeData = require('../../fake_backend/story.json');

const StoryList = ({ route, navigation }) => {
    const { category } = route.params;
    const [data, setData] = useState([])

    useEffect(() => {
        setData(fakeData[category].content)
    }, [])

    return (
        <ScrollView>
            {
                data.map((v, i) => (<CardStory data={v} navigation={navigation} />))
            }
        </ScrollView>
    )
}

export default StoryList