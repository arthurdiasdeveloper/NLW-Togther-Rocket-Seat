//começar importantando o React. 
import React,  { useState } from 'react';
import { View, Text, TextInput} from 'react-native';
import { styles} from './styles';





//função padrão que retona algum componete.
export  function SignIn (){

const [text, setText] = useState ('');

  return (

    <View style={ styles.container }>
    
    <Text> Hello Word, NLW - Togther! </Text>


    <TextInput style={styles.input}
    
    onChangeText ={setText}
    
    />

    <Text>
      
       Você digitou: {text}
    
     </Text>
    
    </View>
  );
}