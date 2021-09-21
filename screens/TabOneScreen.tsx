import * as React from 'react';

import {View, StyleSheet, FlatList} from "react-native";
import ChatRoomItem from "../components/ChatRoomItem/Index";

import chatRoomData from "../assets/dummy-data/ChatRooms";

const chatRoom1 = chatRoomData[0]
const chatRoom2 = chatRoomData[1]

export default function TabOneScreen() {
    return (
        <View style={styles.page}>
            <FlatList
                data={chatRoomData}
                renderItem={({item}) => <ChatRoomItem chatRoom={item} /> }
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    },
})
