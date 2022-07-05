import { StyleSheet,Platform,StatusBar } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    headingContainer: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 30
    },
    cameraStyle: {
        flex: 0.65
    },
    frameContainer: {
        flex: 0.2,
        paddingLeft: RFValue(20),
        paddingRight: RFValue(20),
        paddingTop: RFValue(10),
        backgroundColor: 'cyan',
    },
    filterImageContainer: {
        height: RFPercentage(8),
        width: RFPercentage(15),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e4e7f8',
        borderRadius: 30,
        marginTop: 10,
    },
    cateogaryContainer: {
        flex: 0.4,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: RFValue(10),
    },
    cateogaryBox: {
        alignItems: 'center',
        flex: 0.2,
        borderRadius: 30,
        backgroundColor: 'white',
        // width: "100%",
        padding: RFValue(3),
        margin: 1,
        borderWidth: 1,
        height:RFValue(30),
        width:RFPercentage(6),
        flexWrap:"wrap",
        alignContent:'center'
    },
    cateogaryBoxSelected: {
        alignItems: 'center',
        flex: 0.2,
        borderRadius: 30,
        backgroundColor: 'white',
        // width: "100%",
        padding: RFValue(3),
        margin: 1,
        borderWidth: 1,
        height:RFValue(30),
        width:RFPercentage(9),
        flexWrap:"wrap",
        alignContent:'center'
    },
    textOne:{
        fontSize:RFValue(30),
        fontWeight:'bold',
        color:"yellow",
        fontStyle:"italic",
        textShadowColor:"black",
        textShadowOffset:{width:-3,height:3,},
        textShadowRadius:1,
    },
    textTwo:{
        fontSize:RFValue(30),
        fontWeight:'bold',
        color:"white",
        fontStyle:"italic",
        textShadowColor:"black",
        textShadowOffset:{width:-3,height:3,},
        textShadowRadius:1,
    },
    subHeadOne:{
        fontSize:RFValue(20),
        color:"yellow",
        fontStyle:"italic",
        textShadowColor:"black",
        textShadowOffset:{width:-3,height:3,},
        textShadowRadius:1,
    },
    subHeadTwo:{
        fontSize:RFValue(20),
        color:"white",
        fontStyle:"italic",
        textShadowColor:"black",
        textShadowOffset:{width:-3,height:3,},
        textShadowRadius:1,
    },
    bodyContainer:{
        flex:0.6,
        backgroundColor:"cyan",
        padding:RFValue(20),
        borderRadius:RFValue(15),
        marginTop:RFPercentage(2)
    },
})
