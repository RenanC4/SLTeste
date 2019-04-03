import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 170
  },
  message: {
    marginTop: 15,
    marginBottom: 30,
    fontSize: 20,
    textAlign: 'center',
    color: '#95979a'
  },
  infoImage: {
    width: 25,
    height: 25,
    alignSelf: 'center'
  },
  containerMain: {
    flexDirection: 'row',
    marginBottom: 10,
    height: 60,
  },
  textInput: {
    borderBottomWidth: 0,
    borderBottomColor: '#95979a',
    marginLeft: 10,
    fontSize: 20,
    width: 270
  },
  button: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
    height: 60,
    backgroundColor: '#40A798',
  },

  buttonText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 22,
    color: "#fff"
  },

  failAlertText:{
    fontSize: 17,
    color: '#e9354e',
    paddingTop: 10
  },
  
});