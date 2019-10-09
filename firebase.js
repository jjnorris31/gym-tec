import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBmj4P2WfZhaqhNkmMKPEf8FU9qOpap-9w",
    authDomain: "gym-tec.firebaseapp.com",
    databaseURL: "https://gym-tec.firebaseio.com",
    projectId: "gym-tec",
    storageBucket: "gym-tec.appspot.com",
    messagingSenderId: "62749841910",
    appId: "1:62749841910:web:ee27f3898f9da386650fd7"
};

firebase.initializeApp(firebaseConfig);

export default {
    firestore: firebase.firestore(),
    auth: firebase.auth(),
}
