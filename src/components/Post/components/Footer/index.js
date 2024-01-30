import React, { useState, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import FAIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import styles from "./styles";

const Footer = ({post})=> {

    const [isLiked, setIsLiked]= useState(false);
    const [likesCount, setLikesCount]= useState(0);

    useEffect(()=>{
        setLikesCount(post.likesCount);
    },[])

    const onLikePressed=()=>{
        setIsLiked(!isLiked);
        const amount = isLiked?-1:1;
        setLikesCount(likesCount+amount);
       
    }

    return (
        <View style={styles.container}>
            <View style = {styles.iconsContainer}>
                <View style ={styles.leftIcons}>
                    <TouchableWithoutFeedback onPress={onLikePressed}>
                    { isLiked?
                        <FAIcon name="heart" size={25} color="red" /> :
                        <FAIcon name="heart-o" size={25} color="#545454" />}
                    </TouchableWithoutFeedback>
                 <IonIcon name="chatbubble-outline" size={24} color="#545454" />
                 <FeatherIcon name="send" size={25} color="#545454" />
            </View>
            <View style ={styles.rightIcons}>
                <FAIcon name="bookmark-o" size={25} color="#545454" />
            </View>
        </View>
        <Text style = {styles.name}>{likesCount} Likes</Text>
        <View style={styles.nameAndCaption}>
            <Text  style = {styles.name}>{post.user.name}</Text>
            <Text  style = {styles.caption}>{post.caption}</Text>
        </View>
        <Text>{post.postedAt}</Text>
    </View>
    );
}


export default Footer;