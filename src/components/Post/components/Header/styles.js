import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginTop: 8,
        justifyContent:'space-between',
        alignItems:'center',
    },
    left:{
        flexDirection:"row",
    },
    right:{
        marginRight:12,
    },
    name:{
        fontSize: 16,
        fontWeight:'600',
        color:'#000',
        alignSelf:'center'
    }
});

export default styles;