import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import ProfilePic from "../../../ProfilePic";
import styles from './styles';

const Header = ({user})=> (
    <View style={styles.container}>
        <View style = {styles.left}>
            <ProfilePic uri={user.image} size={40}/>
            <Text style={styles.name}>{user.name}</Text>
        </View>
        <View style = {styles.right}>
            <Icon name="dots-three-vertical" size={16} color="#000" />
        </View>
    </View>
);

export default Header