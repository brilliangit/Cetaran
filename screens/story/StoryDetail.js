import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Switch } from 'react-native-elements';
import ImageColection from '../../assets/imageCollection'

const StoryDetail = ({ route }) => {
    const { story_id, story_en, image, title } = route.params.data
    const [checked, setChecked] = React.useState(false);
    return (
        <ScrollView>
            <View style={{
                marginBottom: 16, display: 'flex', flexDirection: 'row', padding: 10,
                justifyContent: 'flex-end', alignItems: 'center', backgroundColor: '#ccc'
            }}>
                <Text style={{ marginRight: 16 }}>{checked ? 'Language' : 'Bahasa'}</Text>
                <Switch
                    value={checked}
                    onValueChange={(value) => setChecked(value)}
                />
                <Text style={{ marginLeft: 16 }}>ID/EN</Text>
            </View>
            <View style={{
                backgroundColor: '#FFF',
                display: 'flex', flex: 1
            }}>
                <View style={{ maxHeight: 200, padding: 16 }}>
                    <Image
                        style={{
                            height: '100%', width: '100%'
                        }}
                        source={ImageColection[image]}
                    />
                </View>
                <View style={{ maxHeight: 200, padding: 16 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 24, textAlign: 'center', marginBottom: 16, letterSpacing: 1.6 }}>{title}</Text>
                    <Text style={{ fontSize: 12, marginBottom: 16, lineHeight: 16 }}>{checked ? story_en : story_id}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default StoryDetail