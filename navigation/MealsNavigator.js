import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavouritesScreen from '../screens/FavouritesScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions ={
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    }
}
const MealsNavigator = createStackNavigator({
    //route name
    Categories: {
        screen: CategoriesScreen
        //navigationOptions: {headerTitle: 'Meal Categories'}
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
},
{
    //initialRouteName: 'Categories', --> to set the first page bila buka app
    defaultNavigationOptions: defaultStackNavOptions
}
);

const FavNavigator = createStackNavigator({
    Favorites: FavouritesScreen,
    MealDetail: MealDetailScreen
},
{
    //initialRouteName: 'Categories', --> to set the first page bila buka app
    defaultNavigationOptions: defaultStackNavOptions
}
)

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals:{ 
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons 
                name='md-restaurant' 
                size={25} 
                color={tabInfo.tintColor}
                />;
            }
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: (tabInfo) => {
                return <Ionicons 
                name='md-star' 
                size={25} 
                color={tabInfo.tintColor}
                />;
            }
        }
    }
},
{
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }
});

const FilterNavigator = createStackNavigator({
    Filters:FiltersScreen
},
{
    defaultNavigationOptions: defaultStackNavOptions
}
);

const MainNavigator = createDrawerNavigator(
    {
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: "Meals"
        }
    },
    Filters: FilterNavigator
},
{ //tak berfungsi
    contentOptions: {
        activeTintColor: '#ff6f00',
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
}
);

export default createAppContainer(MainNavigator);