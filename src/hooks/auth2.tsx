import { createContext, ReactNode, useContext, useState, useEffect } from "react";

import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {CLIENT_ID_GOOGLE} = process.env
const {REDIRECT_URI} = process.env

interface AuthProviderProps {
	children: ReactNode;
}

interface User {
	id: string;
	name: string;
	email: string;
	photo?: string;
  }

interface IAuthContextData {
	user: User;
	signInWithGoogle(): Promise<void>
	signOut(): Promise<void>
	userStorageLoading: Boolean
}

interface AuthorizationResponse {
params: {
	access_token: string;
};
type: string;
}

  export const AuthContext = createContext({} as IAuthContextData)

function AuthProvider({ children }: AuthProviderProps){
	const [user, setUser ] = useState<User>({} as User);
	const [userStorageLoading, setUserStorageLoading] = useState(true) 

	async function signInWithGoogle() {
		try {
			const CLIENT_ID = '9610623123-jv36jsk700mo7j7aie9q2uju8ohum6ap.apps.googleusercontent.com';
			const REDIRECT_URI = 'https://auth.expo.io/@kastango/feelog';
			const RESPONSE_TYPE = 'token';
			const SCOPE = encodeURI('profile email');

			const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

			const {type, params} = await AuthSession
			.startAsync({ authUrl }) as AuthorizationResponse;

			if (type === 'success') {
				const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
				const userInfo = await response.json();

				const userLogged = {
					id: userInfo.id,
					name: userInfo.name,
					email: userInfo.email,
					photo: userInfo.picture,
				}

				setUser(userLogged)
				await AsyncStorage.setItem("@feelog:user", JSON.stringify(userLogged));
				
			  }
		}
		catch(err){
			throw new Error(err)
		}
	}

	async function signOut(){
		setUser({} as User);
		await AsyncStorage.removeItem("@feelog:user");
	  }

	useEffect(() => {
		async function loadUserStorageDate() {
		  const userStoraged = await AsyncStorage.getItem("@feelog:user");
		  
		  if(userStoraged){
			const userLogged = JSON.parse(userStoraged) as User;
			setUser(userLogged);
		  }
	
		  setUserStorageLoading(false);
		}
	
		loadUserStorageDate();
	  },[]);

	return(
		<AuthContext.Provider value={{user, signInWithGoogle, signOut, userStorageLoading}}>
			 { children }
		</AuthContext.Provider>
	)
}

function useAuth(){
	const context = useContext(AuthContext);
  
	return context;
  }
  
export { AuthProvider, useAuth }