var user = document.querySelector("meta[name='user']");

module.exports = {
    computed: {
        user(){
            if(user.content != ""){
                return JSON.parse(user.content)      
            }
        },
        logeado(){
            if (user.content != "") {
                return true
            }   
            else{
                return false
            }
        }
    },
}