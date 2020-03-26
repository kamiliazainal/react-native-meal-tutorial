import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';
//import { MEALS } from '../data/dummy-data';

const FavouritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals)

    if (favMeals.length === 0 || !favMeals){
        return (
            <View style={styles.content}>
                <DefaultText>
                    No favorite meals found. Start adding some !
                </DefaultText>
            </View>
        )
    }
    //const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2'); dummy filter
    return <MealList listData = {favMeals} navigation={props.navigation}/>;
};

FavouritesScreen.navigationOptions = navData => {
    return {
    headerTitle: 'Your Favourites',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" 
            iconName='ios-menu'
            onPress={() => {
                navData.navigation.toggleDrawer();
            }}
        />
    </HeaderButtons>
    }
};
 
const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavouritesScreen; 