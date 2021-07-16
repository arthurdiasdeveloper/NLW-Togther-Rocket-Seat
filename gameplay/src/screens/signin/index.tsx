//começar importantando o React. 
import React,  { useState } from 'react';
import { View, 
        Text, 
        Image,
      
      
      } from 'react-native';
import IllustrationImg from '../../../src/assets/illustration.png';     
import { styles} from './styles';





//função padrão que retona algum componete.
export  function SignIn (){

const [text, setText] = useState ('');

  return (
          
    <View style={ styles.container } >
    
    <Image
     source={IllustrationImg} 
     style={ styles.image}
     
     />
    <View style={styles.content}>
      <Text style={styles.title}>
           Intereja{'\n'}
           e organize suas{'\n'}
           competições{'\n'}
      </Text>

      <Text style={ styles.subtitles}>
          Crie grupos para o play{'\n'}
          favoritos com seus colegas{'\n'}


      </Text>
    </View>
    </View>
  );
}