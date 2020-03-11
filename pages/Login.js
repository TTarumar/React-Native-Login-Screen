import React ,{Component}from 'react';
import { StyleSheet, Text, View ,ScrollView,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import Logincomp from "../components/Logincomp";



export default class Login extends Component{
    render() {
        return (
             <View style={styles.container}>
                <View style={styles.back}/>
                <KeyboardAvoidingView behavior={"position"}>
                <Text style={styles.yazi}>Tarumar</Text>
                <Text style={styles.yazi2}>Muazzam Bir Şirket...</Text>
                <ScrollView style={styles.login}>
                    <Text style={styles.hsg}>Hoşgeldiniz</Text>
                    <Text style={styles.grs}> Lütfen Giriş Yapınız</Text>
                    <Logincomp/>

                </ScrollView>
            </KeyboardAvoidingView>
                 <Text style={styles.hesapSorgu}>Hesabınız yok mu?</Text>
                 <TouchableOpacity>
                     <Text style={styles.hesapSorgu}>Üye Ol</Text>

                 </TouchableOpacity>
            </View>

        );

    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCF6F5FF',
        paddingVertical:50
    },
    back:{
        position:'absolute',
        top:0,
        left:0,
        backgroundColor:'#2BAE66FF',
        height:350,
        width:'100%',
        borderBottomLeftRadius:90,
        borderBottomRightRadius:90

    },
    yazi:{
        fontSize:40,
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',

    },
    yazi2:{
        fontSize:15,
        color:'#f2f2f2',
        textAlign:'center',
    },
    login:{
        marginHorizontal:40,
        marginVertical:50,
        backgroundColor:'#FCF6F5FF',
        padding:20,
        borderRadius:8,
        shadowColor:'black',
        shadowOpacity:3,
        shadowRadius:3,
        shadowOffset:{
            width: 0,
            height: 2
        },
        elevation:50

    },
    hsg:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    },
    grs:{
        textAlign:'center',
        fontSize:12,
        color:'#808080',
        fontWeight:'bold'
    },
    hesapSorgu:{
        textAlign:'center',
        color:'#808080',
        fontSize:17,


    }

});
