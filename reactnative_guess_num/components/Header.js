// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const Header = props => {
//   return (
//     <View style={styles.header}>
//       <Text style={styles.headerTitle}> {props.title} </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     width: '100%',
//     height: 90,
//     paddingTop: 36,
//     backgroundColor: '#f7287b',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   headerTitle: {
//     color: 'black',
//     fontSize: 18
//   }
// });

// export default Header;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
    return (
        <View style = {styles.header}>
            <Text style = {styles.headerTitle} > {props.title} </Text>
        </View>    
    )
}


const styles = StyleSheet.create({
    header: {
        // borderWidth: 5,
        // borderColor: 'rebeccapurple',
        
        
        width: '100%',
        height: 90,
        paddingTop: 36, 
        backgroundColor: '#f7290b',
        alignItems: 'center',
        justifyContent: 'center',


    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    }

});

export default Header;