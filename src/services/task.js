
import firebase from 'firebase';

export default class TaskService {

    static async createTask(data) {
        return create = firebase.database().ref().child('tasks').push(data);
    }

    static async getAllTasks(){
        
        formatedTasks = [];
        var o = {}
        var allTasks = firebase.database().ref('tasks').once('value').then(function(snapshot) {
           teste = snapshot.forEach(function logArrayElements(element) {
                o = {
                    a : element.key,
                    b : element.val().name,
                    c :  element.val().senha
                }
             
            
        }
        );
        
        return snapshot.val();           
        });
        return allTasks;
    }
  
}