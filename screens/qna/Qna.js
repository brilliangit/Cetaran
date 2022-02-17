import React from 'react'
import { Text, View } from 'react-native'
import { Button, Image } from 'react-native-elements';
import ImageColection from '../../assets/imageCollection'

export default function Qna() {
    return (
        <View style={{
            display: 'flex', flex: 1, flexDirection: 'column', backgroundColor: '#ccc', justifyContent: 'space-between'
        }}>
            <View style={{ maxHeight: 200, padding: 16, backgroundColor: '#fff', marginBottom: 16 }}>
                <Image
                    style={{
                        height: '100%', width: '100%'
                    }}
                    source={ImageColection['legendabatumenangis']}
                />
            </View>
            <View style={{ padding: 16, marginBottom: 16, backgroundColor: '#fff', flex: 1 }}>
                <Text style={{ marginBottom: 16, fontWeight: 'bold' }}>1. Malin kundang dikutuk ibunya menjadi?</Text>
                <Text style={{ marginLeft: 16 }}>A. Batu</Text>
                <Text style={{ marginLeft: 16 }}>B. Kayu</Text>
                <Text style={{ marginLeft: 16 }}>C. Kera</Text>
                <Text style={{ marginLeft: 16 }}>D. Ikan</Text>
                <Text style={{ marginLeft: 16, marginBottom: 16 }}>E. Kerbau</Text>
            </View>
            <View style={{ maxHeight: 100, padding: 16, width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#fff', alignItems: 'flex-end' }}>
                <Button
                    title="Pref"
                    buttonStyle={{
                        borderColor: 'rgba(78, 116, 289, 1)',
                    }}
                    type="outline"
                    titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                    containerStyle={{
                        width: 100
                    }}
                />
                <Button
                    title="Next"
                    buttonStyle={{
                        borderColor: 'rgba(78, 116, 289, 1)',
                    }}
                    type="outline"
                    titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                    containerStyle={{
                        width: 100
                    }}
                />

            </View>
        </View>
    )
}
