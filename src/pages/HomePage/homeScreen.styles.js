import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
   
      
    },
    boxContainer: {
        width: '80%',
        height: 160,
        margin:20,
       
        alignSelf:"center",
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowOpacity: 0.3,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        backgroundColor:'#F6D2BA'
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        
    },
    body: {
      fontSize: 15,
      alignContent:"center"

    },
  });
export default styles;