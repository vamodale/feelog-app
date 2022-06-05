import { createContext, ReactNode, useContext, useState, useEffect } from "react";

import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {CLIENT_ID_GOOGLE} = process.env
const {REDIRECT_URI_GOOGLE} = process.env

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
			const AUTH_URL = 'https://iuhhf65ebjinf4z63vdw3wudbm0hzpoo.lambda-url.us-east-1.on.aws/'
			const RESPONSE_TYPE = 'token';
			const SCOPE = encodeURI('profile email');
			
			const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID_GOOGLE}&redirect_uri=${REDIRECT_URI_GOOGLE}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

			const {type, params} = await AuthSession
			.startAsync({ authUrl }) as AuthorizationResponse;
			if (type === 'success') {
				const response = await fetch(
					AUTH_URL, 
					{
						method: "POST",
						body: JSON.stringify({
							token: params.access_token
						}),
					}
				);

				const { userInfo, authToken } = await response.json();
				const userLogged = {
					id: userInfo.id,
					name: userInfo.name,
					email: userInfo.email,
					photo: userInfo.picture,
				}

				setUser(userLogged)
				await Promise.all([
					AsyncStorage.setItem("@feelog:user", JSON.stringify(userLogged)), 
					AsyncStorage.setItem("@feelog:token", authToken)
				])
			  }
		}
		catch(err){
			throw new Error(err)
		}
	}

	async function signOut(){
		setUser({} as User);
		await AsyncStorage.removeItem("@feelog:user");
		await AsyncStorage.removeItem("@feelog:token");
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