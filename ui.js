class UI{
    constructor(){
        this.profileContainer=document.querySelector('#profileContainer')
        this.alert=document.querySelector('#alert')
        
    }

    showProfile(profile){
        this.profileContainer.innerHTML=`
        <div class='card card-body'>
        <div class='row'>
            <div class='col-md-3'>

            </div>
            <div class='col-md-9'>
                <h4> contact</h4>
                <ul class='list-group'>
                <li class='list-group-item'>
                   name: ${profile.name}
                </li>
                <li class='list-group-item'>
                username: ${profile.username}
             </li>
             <li class='list-group-item'>
                     email: ${profile.email}
          </li> 
                  <li class='list-group-item'>
          adress: ${profile.address.city}${profile.address.street
        }
             </li>
              <li class='list-group-item'>
                 email: ${profile.email}
             </li> 
             <li class='list-group-item'>
             website: 
          </li> 
                </ul>
            </div> 
        
        </div>
        </div>
        
        `
    }
    showAlert(text){
        this.alert.innerHTML=`${text} in not found `
    }
    clear(){
        this.profileContainer.innerHTML=''
        this.alert.innerHTML='';
    }
    showTodo(todo){
        console.log(todo)
    }


}