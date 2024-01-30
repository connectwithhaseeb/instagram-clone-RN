import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        marginLeft:8,
        marginBottom:10,
    },
    iconsContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:10,
    },
    leftIcons:{
        flexDirection:"row",
        width:100,
        justifyContent:'space-between',
        marginLeft:4,
    },
    rightIcons:{
        marginRight:16,
    },
    nameAndCaption:{
        flexDirection:"row",
    },
    name:{
        fontSize: 16,
        fontWeight:'600',
        color:'#000'
    },
    caption:{
        marginLeft:8,
        fontSize: 14,
        color:'#000',
        alignSelf:'center'
    },
});

export default styles;