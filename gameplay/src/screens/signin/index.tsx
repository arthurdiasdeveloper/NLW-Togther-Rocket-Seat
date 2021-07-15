//começar importantando o React. 
import React,  { useState } from 'react';
import { View, 
        Text, 
        Image,
      
      
      } from 'react-native';
import IllustrationImg from '../../assets/Illustration.png';     
import { styles} from './styles';





//função padrão que retona algum componete.
export  function SignIn (){

const [text, setText] = useState ('');

  return (

    <View style={ styles.container }>
    <Image source={Illustration}/>



    </View>
  );
}