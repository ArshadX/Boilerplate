import React, {useState, createContext} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isDarkTheme, setisDarkTheme] = React.useState(false);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isDarkTheme,
        googleLogin: async () => {
          try {
            const {idToken} = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
        toggleTheme: () => {
          setisDarkTheme(isDarkTheme => !isDarkTheme);
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
