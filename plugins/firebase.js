// Firebase configuration for Wairld
export default ({ app }, inject) => {
  const firebaseConfig = {
    apiKey: "AIzaSyCOCa6lCESVy-Oq3wxcqkWIy4hVX8zMHrA",
    authDomain: "wairld.firebaseapp.com",
    projectId: "wairld",
    storageBucket: "wairld.firebasestorage.app",
    messagingSenderId: "111984817805",
    appId: "1:111984817805:web:d764af69efc655e7e894c4",
    measurementId: "G-NJB4W9JMFK"
  };

  // Firebase will be initialized here when needed
  inject('firebaseConfig', firebaseConfig);
}
