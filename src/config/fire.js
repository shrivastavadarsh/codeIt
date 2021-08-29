import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDR6caFFVLUbyf5xhy1hyPbtA3ey9m25qo",
    authDomain: "my-application-28926.firebaseapp.com",
    projectId: "my-application-28926",
    storageBucket: "my-application-28926.appspot.com",
    messagingSenderId: "768008904813",
    appId: "1:768008904813:web:8b33bee6cdb1460bf51f64",
    measurementId: "G-QCE8XKF7YV"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
