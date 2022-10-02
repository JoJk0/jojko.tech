import type { FirebaseApp } from '@firebase/app'
import { initializeApp } from '@firebase/app'
// import { getAnalytics } from '@firebase/analytics'
import type { UserModule } from '~/types'

export const FIREBASE_APP_KEY = Symbol('firebase')
// export const FIREBASE_ANALYTICS_KEY = Symbol('firebase-analytics')

export const firebaseConfig = {
  apiKey: 'AIzaSyDrN7xauwELJEbixhDwiBoBWUmYD91s8DQ',
  authDomain: 'jjk-portfolio.firebaseapp.com',
  databaseURL: 'https://jjk-portfolio.firebaseio.com',
  projectId: 'jjk-portfolio',
  storageBucket: 'jjk-portfolio.appspot.com',
  messagingSenderId: '711313457353',
  appId: '1:711313457353:web:8a476328975ab3beb48d18',
  // measurementId: 'G-TYPT5GNVWG',
}

export const install: UserModule = ({ app }) => {
  const firebase = initializeApp(firebaseConfig)
  // const analytics = getAnalytics(firebase)

  app.provide(FIREBASE_APP_KEY, firebase)
  // app.provide(FIREBASE_ANALYTICS_KEY, analytics)
}

export const useFirebase = () => {
  const instance = inject<FirebaseApp>(FIREBASE_APP_KEY)
  if (!instance)
    console.error('Firebase instance not found')

  return instance as FirebaseApp
}
