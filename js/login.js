
//DOM取得
var inputarea = document.getElementById('input-area');
var newuser = document.getElementById('newuser');
var login = document.getElementById('login');
var logout = document.getElementById('logout');
var info = document.getElementById('info');
var startbtn = document.getElementById('startbtn');


//新規登録処理
newuser.addEventListener('click', function(e) {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    alert('登録できません（' + error.message + '）');
  });
});



//ログイン処理
login.addEventListener('click', function(e) {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(function(error) {
    alert('ログインできません（' + error.message + '）');
  });
});



//ログアウト処理
logout.addEventListener('click', function() {
  firebase.auth().signOut();
});



//認証状態の確認
firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    loginDisplay();
  }
  else {
    logoutDisplay();
  }
});



function loginDisplay() {
  logout.classList.remove('hide');
  startbtn.classList.remove('hide');
  inputarea.classList.add('hide');
  info.textContent = "ログイン中です";
}


function logoutDisplay() {
  logout.classList.add('hide');
  startbtn.classList.add('hide');
  inputarea.classList.remove('hide');

  info.textContent = "";
}
