//começar importantando o React. 
import React from 'react';
import { View, 
        Text, 
        Image,
        StatusBar

      
      
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon/Index';
import IllustrationImg from '../../../src/assets/illustration.png';     
import { styles} from './styles';





//função padrão que retona algum componete.
export  function SignIn (){

//const [text, setText] = useState ('');

  return (
          
    <View style={ styles.container } >
      <StatusBar
      barStyle="ligth-content"
      backgroundColor="transparent"
      translucent
      
      
      
      />
    
    <Image
     source={IllustrationImg} 
     style={ styles.image}
     resizeMode="stretch"
     
     />
    <View style={styles.content}>
      <Text style={styles.title}>
           Intereja{'\n'}
           e organize suas{'\n'}
           competições{'\n'}
      </Text>

      <Text style={ styles.subtitle}>
          Crie grupos para o play{'\n'}
          favoritos com seus colegas{'\n'}
          

      </Text>

    <ButtonIcon/>
    </View>
    </View>
  );
}