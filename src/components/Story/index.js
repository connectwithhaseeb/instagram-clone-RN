import React from 'react';
import {View, Text} from 'react-native';
import ProfilePic from '../ProfilePic';
import styles from './styles';

const Story = ({uri, name})=>(
    <View>
        <ProfilePic uri={uri}/>
        <Text style= {styles.name}>{name}</Text>
    </View>
);

export default Story;