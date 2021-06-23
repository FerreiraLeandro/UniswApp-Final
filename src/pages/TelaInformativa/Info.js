import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { PlayerScreen } from './screens/Player';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';


export default function MyBackButton(){
    const navigation = useNavigation();
  return (
    <View style={style.geral}>

    <Icon name="arrow-back" style={{marginTop:-80, marginBottom:80,}} size={40} color="#fff"
    onPress={() => {
        navigation.navigate("OrdersPage");
      }}
    />
        

      <Text style={style.titulo}> O que são criptomoedas</Text>
      <Text style={style.texto}>
        Criptomoeda é o nome genérico para moedas digitais descentralizadas,
        criadas em uma rede blockchain a partir de sistemas avançados de
        criptografia que protegem as transações, suas informações e os dados de
        quem transaciona.
      </Text>

      <Text style={style.titulo}> A Moeda Uniswap </Text>

      <Text style={style.texto}>
        Uniswap é um protocolo de corretora descentralizada (DEX, na sigla em
        inglês) fundado por Hayden Adams em 2018.Ela permite transações de
        negócios de tokens padrão ERC-20 de modo bem simples, e sem custos, pois
        as transações são feitas diretamente entre carteiras. Uma das maiores
        diferenças entre a UniSwap e as demais corretoras, é a sua simplicidade
        em relação a forma como são feitas as transações.
      </Text>


    </View>
  );
}

const style = StyleSheet.create({
  geral: {
    backgroundColor: "#7159c1",
    justifyContent: 'center',
    margin: 15,
    marginTop: 0,
    flex: 1
  },
  titulo: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
    fontSize: 32,
    color: "#fff"
  },
  texto: {
    backgroundColor: '#fff5',
    borderRadius: 5,
    fontSize: 15,
    marginVertical: 10,
    padding: 15,
    textAlign: "center"
  }
});