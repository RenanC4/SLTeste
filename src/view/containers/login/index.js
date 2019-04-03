import React, {Component} from 'react';
import {Text, Image, TextInput, KeyboardAvoidingView, View} from 'react-native';
import {Button} from 'native-base';
import LoaderModal from '../../components/loading/modal/index'
import {Snackbar} from 'react-native-paper';
import LogoGreenImg from '../../assets/images/img_logo_green.png';
import FB from '../../assets/images/fb.png';
import UserIcon from '../../assets/images/ic_user.png';
import PasswordIcon from '../../assets/images/ic_password.png';
import {connect} from 'react-redux';
import * as UserActions from '../../../actions/user';
import * as UserSelectors from '../../../reducers/user';
import * as NavigationActions from "../../../actions/navigator";
import style from './style.js';

import firebase from 'firebase';
var provider = new firebase.auth.FacebookAuthProvider();
class Login extends Component {
  state = {
    snackVisible: false,
    error: '',
    message: '',
    errorVisible: false,
    username: '',
    password: '',    
  };


  componentDidUpdate(nextProps, prevState){

    if (this.props.isLogged) {
      this.props.navigation.dispatch({type: NavigationActions.ACTION_OPEN_HOME.action});
    }
    if (this.props.getError && this.props.getError != nextProps.getError) {
      this._showMessage(this.props.getError, true)
    }
    if (this.props.getMessage && this.props.getMessage != nextProps.getMessage) {
      this._showMessage(this.props.getMessage, true)
    }
 }

  render() {
    return (
      <KeyboardAvoidingView style={style.container} behavior="padding">
        <LoaderModal loading={this.props.isOnRequest}/>
        <Image style={style.logo} source={LogoGreenImg}/>
        <Text style={style.message}>Entrar com email e senha</Text>
      
        <View style={style.containerMain}>
          <Image style={style.infoImage} source={UserIcon}/>
          <TextInput underlineColorAndroid='#96989b' value={this.state.username}
                     onChangeText={(text) => this.setState({username: text, error: ''})}
                     placeholder="Email" style={style.textInput}/>
        </View>
        <View style={style.containerMain}>
          <Image style={style.infoImage} source={PasswordIcon}/>
          <TextInput underlineColorAndroid='#96989b' value={this.state.password}
                     onChangeText={(text) => this.setState({password: text, error: ''})}
                     secureTextEntry={true} placeholder="Senha" style={style.textInput}/>
        </View>
        <Text style={style.forgetPasswordText}>
          Esqueceu sua senha? 
          <Text style={{fontWeight:'bold'}} onPress={() => {
          this._handleResetFlow(this.state.username);
        }}>
          clique aqui
          </Text>
        </Text>
        <Button rounded style={style.button} onPress={() => {
          this._handleLoginFlow(this.state.username, this.state.password);
        }}>
          <Text style={style.buttonText}>Entrar/Criar</Text>
        </Button>
        <Text style={style.orSeparator}>-- OU --</Text>

        <Button rounded style={style.buttonFacebook} onPress={() => {
         this._facebookLogin();
        }}>

          <Text style={style.buttonText}>  Entrar com o <Image style={style.fbLogo} source={FB}/>acebook</Text>
        </Button>
        <Snackbar
          visible={this.state.snackVisible && this.state.error}
          onDismiss={() => this._showMessage(null, false)}>
          {this.state.error}
        </Snackbar>
      </KeyboardAvoidingView>
    );
  }

  _showMessage(error, visible) {
    this.setState({error: error, snackVisible: visible})
  }

  _handleLoginFlow(username, password) {
    if (!username) {
      this._showMessage('Qual o seu email?', true);
      return;
    }
    if (!password) {
      this._showMessage('Qual a senha?', true);
      return;
    }
    this.props.onLoginButtonClick(this.state.username, this.state.password)
  }

  _handleResetFlow(username) {
    if (!username) {
      this._showMessage('Insira seu email e clique novamente', true);
      return;
    }
    this.props.onResetPasswordButtonClick(this.state.username)
  }

  _facebookLogin(){
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {     
      var token = result.credential.accessToken;
      
    }
    var user = result.user;
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    // ...
  });
  }
}

function mapStateToProps(state) {
  return {
    isLogged: UserSelectors.isLogged(state),
    isOnRequest: UserSelectors.isOnRequest(state),
    getError: UserSelectors.getRequestError(state),
    getMessage: UserSelectors.getRequestMessage(state),
    isReseting: UserSelectors.isReseting(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoginButtonClick: (username, password) => {
      dispatch(UserActions.logIn(username, password));
    },
    onResetPasswordButtonClick: (username) => {
      dispatch(UserActions.resetPassword(username));
    },    
    onFacebookLoginButtonClick: (username) => {
      dispatch(UserActions.facebookLogIn(username));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
