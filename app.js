const ui=new UI()
var profile =new Profile()
const searchProfile=document.querySelector('#searchProfile')


searchProfile.addEventListener('keyup',(event)=>{
    ui.clear()
    let text= event.target.value
    if(text!=''){
        profile.getProfile(text).then(data=>{
            if(data.profile.length === 0){
                ui.showAlert(text)
            }else{
                ui.showProfile(data.profile[0])
                ui.showTodo(data.todo)
            }
        })
    }


})