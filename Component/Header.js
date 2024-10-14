import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have installed react-native-vector-icons
import { useNavigation, DrawerActions } from '@react-navigation/native';

const Header = ({ title, showBackButton, showMenuButton }) => {
  const navigation = useNavigation(); // Access navigation object

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        {showMenuButton && (
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
        )}

        <Text style={styles.title}>{title}</Text>

        {showBackButton && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#00000000', // Set the background color for SafeAreaView
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#6200EE',
    padding: 10,
    height: 60,
    marginTop: 30, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },
});

export default Header;
