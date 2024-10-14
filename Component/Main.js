import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './Home';
import AboutScreen from './About';
import DetectionScreen from './Detection';
import FeedbackScreen from './Feedback';
import Header from './Header'; // Import your custom header


const Drawer = createDrawerNavigator();

const Main = () => {

    const navigation = useNavigation();
    const handleLogout = () => {
        // Navigate to Signup screen when Logout is clicked
        navigation.navigate('Login');
    };
    
   

  return (
    <SafeAreaView style={styles.container}>
      {/* Render Header on top */}
      <Header title="Ayurvedic Plant Detection" showMenuButton={true} />

      {/* Drawer Navigator below Header */}
      <Drawer.Navigator 
        initialRouteName="Home" 
        screenOptions={{ 
          headerShown: false // Hides the default header provided by the drawer
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Detection" component={DetectionScreen} />
        <Drawer.Screen name="Feedback" component={FeedbackScreen} />
        <Drawer.Screen 
          name="Logout" 
          component={() => null} // Placeholder component
          options={{
          
            drawerLabel: () => (
              <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.logoutText}>Logout</Text>
              </TouchableOpacity>
            ),
          }} 
        />
      </Drawer.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
