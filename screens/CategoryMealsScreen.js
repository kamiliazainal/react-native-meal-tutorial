import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList'
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    //const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >=0);

        if (displayedMeals.length === 0){
            return (
                <View style={styles.content}>
                    <DefaultText>No meals found, maybe check your filters ?</DefaultText>
                </View>
            )
        }

    return <MealList listData={displayedMeals} navigation={props.navigation}/>
        // <View style ={styles.screen}>
        //     {/* <Text>The Category Meals Screen !</Text>
        //     <Text>{selectedCategory.title}</Text>
        //     <Button 
        //         title="Go to Detail" 
        //         onPress={() => {
        //             props.navigation.navigate({routeName: 'MealDetail'});
        //         }}
        //     />
        //     <Button 
        //         title="Back"
        //         onPress={() => {
        //             props.navigation.goBack();
        //             //props.navigation.pop(); function sama macam goback tp cuma available dlm stacknavigator
        //         }}
        //     />           */}

        //     <FlatList 
        //         style ={styles.flatlist}
        //         data={displayedMeals}
        //         keyExtractor={(item, index) => item.id}
        //         renderItem={renderMealItem}
        //     />

        // </View>
    
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return { 
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    content: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;