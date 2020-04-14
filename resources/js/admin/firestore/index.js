import * as app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'

/*const config =
	process.env.NODE_ENV === 'development'
		? JSON.parse(process.env.VUE_APP_FIREBASE_CONFIG)
    : JSON.parse(process.env.VUE_APP_FIREBASE_CONFIG_PUBLIC)*/
    const config = {
      apiKey: "AIzaSyCNwvVg8xle4wxfVsPxHXu5trweHVVA2OU",
      authDomain: "chat-6b1a1.firebaseapp.com",
      databaseURL: "https://chat-6b1a1.firebaseio.com",
      projectId: "chat-6b1a1",
      storageBucket: "chat-6b1a1.appspot.com",
      messagingSenderId: "853915946623",
      appId: "1:853915946623:web:2e06837d2c7859f71d794a",
      measurementId: "G-0NHWN9JD6M"
    };

app.initializeApp(config)

export const firebase = app
export const db = app.firestore()
export const storageRef = app.storage().ref()

export const usersRef = db.collection('users')
export const roomsRef = db.collection('chatRooms')

export const filesRef = storageRef.child('files')

export const dbTimestamp = firebase.firestore.FieldValue.serverTimestamp()
export const deleteDbField = firebase.firestore.FieldValue.delete()
