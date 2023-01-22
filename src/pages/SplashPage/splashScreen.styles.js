
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#F6D2BA',
},
formContainer: {
alignItems: 'center',
justifyContent: 'center',
marginVertical: 50,
},
logo: {
width: 100,
height: 100,
marginBottom: 20,
},
input: {
width: 200,
height: 40,
borderWidth: 1,
borderRadius:20,
borderColor: 'gray',
padding: 10,
marginBottom: 20,
textAlign: 'center',
color: 'black',
},
buttonContainer: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
},
submitButton: {
backgroundColor: 'blue',
padding: 10,
borderRadius: 10,
marginHorizontal: 5,
},
buttonText: {
color: 'white',
fontWeight: 'bold',
fontSize: 14,
},
error: {
color: 'red',
marginTop: 10,
},
success: {
color: 'green',
marginTop: 10,
textAlign: 'center',
fontWeight: 'bold',
fontSize: 18,
},
continueButton: {
backgroundColor: 'green',
padding: 10,
borderRadius: 10,
marginTop: 20,
},
continueButtonText: {
color: 'white',
fontWeight: 'bold',
fontSize: 14,
textAlign: 'center',
},
listContainer: {
width: '80%',
height: '50%',
borderWidth: 1,
borderColor: 'gray',
marginTop: 20,
},
listItemContainer: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: 'gray',
},
listItem: {
fontSize: 16,
},
listItemButtonsContainer: {
flexDirection: 'row',
},
listItemButton: {
backgroundColor: 'blue',
padding: 5,
borderRadius: 10,
marginHorizontal: 5,
},
listItemButtonText: {
color: 'white',
fontWeight: 'bold',
fontSize: 14,
},
})

export default styles;