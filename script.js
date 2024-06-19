let senhas = []
let usuarios = []

function cadastrar(){
   let usuario = document.getElementById("usernameCadastrado").value
   let senha = document.getElementById("passwordCadastrado").value
   
      if(usuarios.indexOf(usuario) == -1){
         usuarios.push(usuario)
         senhas.push(senha)
         alert('Cadastrado com sucesso')
         document.getElementById("usernameCadastrado").value = null
         document.getElementById("passwordCadastrado").value = null
         
      }
      else{
         alert("Usuário já cadastrado")
         document.getElementById("usernameCadastrado").value = null
         document.getElementById("passwordCadastrado").value = null
      }
      
}
function tentativaLogin(){
   let usuarioLogin = document.getElementById("username").value
   let senhaLogin = document.getElementById("password").value

      if(usuarios.indexOf(usuarioLogin) != -1){
         window.location.href="about.html"

      }
      else{
         alert("Usuario não cadastrado")
         document.getElementById("username").value = null
         document.getElementById("password").value = null
      }
}
function voltar(){
   window.location.href="index.html"
}