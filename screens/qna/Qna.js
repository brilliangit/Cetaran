import React from 'react'
import { Text, View } from 'react-native'
import { CheckBox } from 'react-native-elements';

export default function Qna() {
    return (
        <View style={{ padding: 16 }}>
            <View>
                <Text style={{ marginBottom: 16, fontWeight: 'bold' }}>1. Malin kundang dikutuk ibunya menjadi?</Text>
                <Text style={{ marginLeft: 16 }}>A. Batu</Text>
                <Text style={{ marginLeft: 16 }}>B. Kayu</Text>
                <Text style={{ marginLeft: 16 }}>C. Kera</Text>
                <Text style={{ marginLeft: 16 }}>D. Ikan</Text>
                <Text style={{ marginLeft: 16, marginBottom: 16 }}>E. Kerbau</Text>
            </View>
            <View>
                <Text style={{ marginBottom: 16, fontWeight: 'bold' }}>2. Cerita Malin Kundang berasal dari?</Text>
                <Text style={{ marginLeft: 16 }}>A. Sumatra Barat</Text>
                <Text style={{ marginLeft: 16 }}>B. Sumatra Utara</Text>
                <Text style={{ marginLeft: 16 }}>C. Sumatra Selatan</Text>
                <Text style={{ marginLeft: 16 }}>D. Aceh</Text>
                <Text style={{ marginLeft: 16, marginBottom: 16 }}>E. Sulawesi</Text>
            </View>
            <View>
                <Text style={{ marginBottom: 16, fontWeight: 'bold' }}>3. Siapakah nama Ibu Timun Mas?</Text>
                <Text style={{ marginLeft: 16 }}>A. Mbok Sarni</Text>
                <Text style={{ marginLeft: 16 }}>B. Mbok Rondo</Text>
                <Text style={{ marginLeft: 16 }}>C. Mbok Darni</Text>
                <Text style={{ marginLeft: 16 }}>D. Mbok Tejo</Text>
                <Text style={{ marginLeft: 16, marginBottom: 16 }}>E. Mbok Surti</Text>
            </View>
            <View>
                <Text style={{ marginBottom: 16, fontWeight: 'bold' }}>4. Siapakah musuh Timun Mas?</Text>
                <Text style={{ marginLeft: 16 }}>A. Raja</Text>
                <Text style={{ marginLeft: 16 }}>B. Patih Kerajaan</Text>
                <Text style={{ marginLeft: 16 }}>C. Pertapa</Text>
                <Text style={{ marginLeft: 16 }}>D. Buto Ijo</Text>
                <Text style={{ marginLeft: 16, marginBottom: 16 }}>E. Harimau</Text>
            </View>

        </View>
    )
}
