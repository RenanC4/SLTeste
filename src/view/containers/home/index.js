import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {Button} from 'native-base';
import * as TaskActions from '../../../actions/task';
import * as TaskSelectors from '../../../reducers/task';
import * as UserActions from '../../../actions/user';
import * as NavigationActions from "../../../actions/navigator";
import style from './style';


class Home extends Component {
  state = {
};
  componentDidMount() {
    this.props.onGetAllTasks()
  }

  render() {    
    console.log('Suas TASKS',this.props.getAllTasks)
    return (
      <View>
          <Button rounded style={style.button} onPress={() => {
          this._handleCreateFlow(this.state.data);
        }}>
          <Text style={style.buttonText}>Criar Task</Text>
        </Button>
        <Button rounded style={style.button} onPress={() => {
          this._handleLogout();
        }}>
          <Text style={style.buttonText}>Logout</Text>
        </Button>
        {this.props.getAllTasks && 
        <Text style={style.text}>Suas task cadastradas aparecerão aqui, em breve (espia o console)</Text>
        // aqui eu preciso montar o card da flat list, porem antes preciso tratar o JSON que vem do Firebase
        //deixei o Json de retorno no Console, pra verem que ta criando lindamente
        //ps essa tela eu deixei pra estilizar por ultimo, mas o tempo acabou e ficou assim, mas a ideia era ter um header
        //com o nome do usuario e o botao de saida
        /*<FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
          }
          keyExtractor={item => item.email}
        />*/
        }

        {!this.props.getAllTasks && 
          <Text style={style.text}>Você ainda não cadastrou nenhuma task</Text>
        }
        
      </View>
    );
  }
  
  _handleLogout() {
    this.props.onLogout();    
    this.props.navigation.dispatch({type: NavigationActions.ACTION_OPEN_LOGIN.action});
  
}

  _handleCreateFlow() {
    this.props.navigation.dispatch({type: NavigationActions.ACTION_OPEN_CREATE_TASK.action});
  }
}


function mapStateToProps(state) {
  return {
    getAllTasks: TaskSelectors.getAllTasks(state),    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCreateTaskButtonClick: (data) => {
      dispatch(TaskActions.createTask(data));
    },    
    onGetAllTasks: () => {
      dispatch(TaskActions.getAllTasks());
    },        
    onLogout: () => {
      dispatch(UserActions.logOut());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
