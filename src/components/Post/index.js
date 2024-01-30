import React from "react";
import { View, Text } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


const Post = ({post})=> (
    <View>
        <Header user={post.user}/>
        <Body uri={post.imageUri}/>
        <Footer post={post}/>
    </View>
);

export default Post;