import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, TextInput, KeyboardAvoidingView, View} from 'react-native';
import * as TaskActions from '../../../../actions/task';
import * as NavigationActions from "../../../../actions/navigator";

import {Button} from 'native-base';
import style from './style';


class CreateTaskScreen extends Component {
  state = {
    
    data :{
        title:"",
        description:"",
        status:"",
    }

};
  componentDidMount() {
  }

  render() {
    return (
        <KeyboardAvoidingView style={style.container} behavior="padding">
        <Text style={style.message}>Criar uma nova tarefa</Text>
        <View style={style.containerMain}>
          <TextInput underlineColorAndroid='#96989b' value={this.state.data.title}
                     onChangeText={(text) => this.setState({title: text})}
                     placeholder="Titulo" style={style.textInput}/>
        </View>
        <View style={style.containerMain}>
        <TextInput underlineColorAndroid='#96989b' value={this.state.data.description}
                     onChangeText={(text) => this.setState({title: text})}
                     placeholder="Descrição" style={style.textInput}/>
        </View>
        <View style={style.containerMain}>
        <TextInput underlineColorAndroid='#96989b' value={this.state.data.status}
                     onChangeText={(text) => this.setState({status: text})}
                     placeholder="Status" style={style.textInput}/>
        </View>

        <Button rounded style={style.button} onPress={() => {
          this._handleCreateFlow(this.state.data);
        }}>
          <Text style={style.buttonText}>Criar</Text>
        </Button>
        </KeyboardAvoidingView>
    );
  }
  
  _handleCreateFlow(data) {
    this.props.navigation.dispatch({type: NavigationActions.ACTION_OPEN_CREATE_TASK.action});
    if (!data) {
        this._showMessage('Insira ao menos o titulo da task', true);
        return;
      }
      this.props.onCreateTaskButtonClick(this.state.data)
      
    this.props.navigation.dispatch({type: NavigationActions.ACTION_OPEN_HOME.action});
  }
}


function mapStateToProps(state) {
  return {  
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCreateTaskButtonClick: (data) => {
      console.log(data)
        dispatch(TaskActions.createTask(data));
      },  
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTaskScreen);
