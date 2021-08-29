import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

//Importando a api
import api from '../services/api';

class Bitcoin extends Component {
    constructor(){
        super();

        //Criando as variaveis de estado
        this.state = {
            vbitcoin: 0
        }

        //Fazendo o bind do metodo que consulta o bitcoin
        this.consultaPrecoBitcoin = this.consultaPrecoBitcoin.bind(this);
    }
  
    //Manipulando o componentDidMount
    async componentDidMount(){
        const response =  await api.get('ticker');
        let valor= response.data.BRL['buy'];

        this.setState({vbitcoin:valor
        });
    }


    //Metodo para consultar o preco do bitcoin quando clicamos no botao
    async consultaPrecoBitcoin(){
        const response =  await api.get('ticker');
        let valor= response.data.BRL['buy'];

        this.setState({vbitcoin:valor
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/bitcoin.png')} 
                       style={{width:450, height:169}}
                       resizeMode='center'
                />

                <Text style={styles.textoBitcoin}>R$ {this.state.vbitcoin}</Text>

                <TouchableOpacity style={styles.botao} onPress={this.consultaPrecoBitcoin}>
                    <Text style={styles.textoBotao}>Atualizar</Text>
                </TouchableOpacity>



            </View>
        );
    }
}

export default Bitcoin;

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor:'#FFF',
      alignItems: 'center',
      justifyContent: 'center'
  },

  textoBitcoin:{
      fontSize:32,
      color:'#363636'
  },

  botao:{
      backgroundColor: '#FFA500',
      marginTop:50,
      width:300,
      alignItems:'center',
      justifyContent: 'center',
      borderRadius:10
  },

  textoBotao:{
      fontSize:32,
      color:'#FFF'
  }
});