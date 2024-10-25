import { Text, View } from "react-native";
import LandingPage from "../Pages/LandingPage/LandingPage";
import auth from '../Firebase/Firebase.init';
import { Redirect } from "expo-router";
export default function Index() {

 const user = auth.currentUser;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
 


   

   {user? <>
   <Redirect  href={'/home'} />
   </> :<>  <LandingPage /> </>} 
    

    </View>
  );
}