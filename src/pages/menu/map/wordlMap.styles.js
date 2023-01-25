import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    map: {
    flex: 1,
    },
    locationButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    },
    locationDot: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: 'orange',
    },
    });

    export default styles;