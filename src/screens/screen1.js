import React, {PureComponent} from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    ScrollView,
    Image,
} from 'react-native'
import {
    Divider
} from 'react-native-elements'
import Svg, { Path } from 'react-native-svg'

export default class FirstScreen extends PureComponent{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <ScrollView>
                <View>
                    <View style={styles.container}>
                        <Text style={{fontSize:26, marginVertical:10}}>Welcome to DigitalHire</Text>
                        <Text style={{fontSize:16, marginVertical:10}}>Get started with</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <TouchableOpacity style={styles.signWithGoogleButton}>
                                <Svg width="18" height="18">
                                    <Path 
                                    d="M3.989,6.017,3.363,8.356,1.073,8.4A9.016,9.016,0,0,1,1.006,0h0L3.046.374,3.939,2.4a5.371,5.371,0,0,0,.05,3.616Z" 
                                    transform="translate(0 4.861)" 
                                    fill="#fbbb00"/>
                                    <Path 
                                    d="M8.645,0A9.01,9.01,0,0,1,8.8,1.681a9.017,9.017,0,0,1-.2,1.879A9,9,0,0,1,5.437,8.7h0L2.868,8.568,2.5,6.3A5.364,5.364,0,0,0,4.813,3.56H0V0H8.645Z" 
                                    transform="translate(9.198 7.319)" 
                                    fill="#518ef8"/>
                                    <Path 
                                    d="M13.561,5.14h0A8.962,8.962,0,0,1,7.927,7.122,9,9,0,0,1,0,2.387L2.917,0A5.351,5.351,0,0,0,7.927,3.472a5.321,5.321,0,0,0,2.7-.732Z" 
                                    transform="translate(1.073 10.878)" 
                                    fill="#28b446"/>
                                    <Path 
                                    d="M13.738,2.072,10.823,4.459a5.352,5.352,0,0,0-7.89,2.8L0,4.861H0A9,9,0,0,1,13.738,2.072Z" 
                                    transform="translate(1.006)" 
                                    fill="#f14336"/>
                                </Svg>
                            </TouchableOpacity >
                            <TouchableOpacity style={styles.signWithLinkedinButton}>
                                <Svg width="20" height="20">
                                    <Path 
                                    d="M4,13H0V0H4Z" 
                                    transform="translate(0 7)" 
                                    fill="#fff"/>
                                    <Path 
                                    d="M2.487,5H2.453A2.39,2.39,0,0,1,0,2.5,2.4,2.4,0,0,1,2.513,0,2.4,2.4,0,0,1,5,2.5,2.4,2.4,0,0,1,2.487,5Z" 
                                    fill="#fff"/>
                                    <Path 
                                    d="M13,14H8.744V6.52c0-1.792-.619-3.016-2.159-3.016A2.339,2.339,0,0,0,4.4,5.128a3.055,3.055,0,0,0-.147,1.08V14H0V.32H4.256v1.9A4.29,4.29,0,0,1,8.094,0C10.887,0,13,1.9,13,6.008V14Z" 
                                    transform="translate(7 6)" 
                                    fill="#fff"/>
                                </Svg>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginVertical:20}}>
                            <Text style={{fontSize:13, color:'#929292', textAlign:'center'}}>or</Text>
                            <Divider></Divider>
                        </View>
                        <View style={styles.loginForm}>
                            <Text style={styles.loginLabel}>Company Name</Text>
                            <TextInput style={styles.loginInput} placeholder="e.g., Stark Manufacturing"/>
                            <Text style={styles.loginLabel}>Full Name</Text>
                            <TextInput style={styles.loginInput} placeholder="e.g., Tony Stark"/>
                            <Text style={styles.loginLabel}>Email Address</Text>
                            <TextInput style={styles.loginInput} placeholder="e.g., tony@stark.com"/>
                            <Text style={styles.loginLabel}>Password</Text>
                            <TextInput style={styles.loginInput} placeholder="e.g., **********"/>
                            <TouchableOpacity style={styles.loginButton}>
                                <Text style={styles.loginButtonText}>Login</Text>
                            </TouchableOpacity>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:13, marginBottom:40}}>By creating an account, you agree to our </Text>
                                <TouchableOpacity>
                                    <Text style={{fontSize:13, marginBottom:40, color:"#3bb75e"}}>Terms.</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Divider></Divider>
                    <View style={{backgroundColor:"#ffffff", flexDirection:'row', justifyContent:"center", alignContent:"center"}}>
                        <Text style={{color:"#9890ab", fontSize:13, textAlign:"center", paddingVertical: 25}}>Already have an account? </Text>
                        <TouchableOpacity>
                            <Text style={{color:"#3bb75e", fontSize:13, textAlign:"center", paddingVertical: 25}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 60,
        paddingHorizontal: 30,
        backgroundColor: "#ffffff",
        flex:1
    },
    loginLabel:{
        fontSize: 14,
        marginVertical: 10
    },
    loginInput:{
        borderRadius: 1,
        marginVertical: 10,
        backgroundColor: "#f1f2f2",
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    loginButton:{
        marginVertical: 20,
        paddingVertical: 15,
        backgroundColor: "#00ba52",
        borderRadius: 1
    },
    loginButtonText:{
        fontSize: 14,
        color: "#ffffff",
        textAlign:'center'
    },
    signWithGoogleButton:{
        borderWidth: 1,
        borderColor: '#f0f0f0',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 2,
        width: "45%",
        marginVertical: 15,
        alignItems:'center'
    },
    signWithLinkedinButton:{
        borderWidth: 1,
        justifyContent: 'center',
        padding: 20,
        borderRadius: 2,
        width: "45%",
        marginVertical: 15,
        borderColor: '#0077b7',
        backgroundColor: '#0077b7',
        alignItems:'center'
    }
})