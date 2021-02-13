import * as actionTypes from "./actionsTypes";
import axios from "../../axios-orders";
import firebaseURL from "../../../firebase-config";
export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingName: name,
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingName: name,
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients,
    };
};

export const fetchIngredientsFailed = (ingredients) => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
    };
};

export const initIngredients = () => {
    return (dispatch) => {
        axios
            .get(firebaseURL + "ingredients.json")
            .then((response) => {
                dispatch(setIngredients(response.data));
            })
            .catch((error) => {
                dispatch(fetchIngredientsFailed());
            });
    };
};
