import api from './api'
import firebase from 'firebase';
import md5 from 'md5';

export default class UserService {

    static async logIn(username, password) {
        return tryLogin = firebase.auth().signInWithEmailAndPassword(username, md5(password))
        .catch(() => {
                return tryCreate = firebase.auth().createUserWithEmailAndPassword(username, md5(password))
            .catch(() => {
                return {error: 1, status: 'Falha ao autenticar'}
            })
        });        
    }

    static async reset(username) {
        return resetPassword =  firebase.auth().sendPasswordResetEmail(username).then(function() {           
            return {message: 'Email enviado, verifique sua caixa de entrada'}
          }).catch(function(error) {              
            return {message: 'Email inválido'}
          });    
    }
}