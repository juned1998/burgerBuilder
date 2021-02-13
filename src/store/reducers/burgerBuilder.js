import * as actionTypes from "../actions/actionsTypes";

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
};

const INGREDIENTS_PRICE = {
    salad: 1,
    meat: 1.5,
    cheese: 2,
    bacon: 1,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,

                ingredients: {
                    ...state.ingredients,
                    [action.ingName]: state.ingredients[action.ingName] + 1,
                },

                totalPrice:
                    state.totalPrice + INGREDIENTS_PRICE[action.ingName],
            };

        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,

                ingredients: {
                    ...state.ingredients,
                    [action.ingName]: state.ingredients[action.ingName] - 1,
                },

                totalPrice:
                    state.totalPrice - INGREDIENTS_PRICE[action.ingName],
            };

        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat,
                },
                totalPrice: 4,
                error: false,
            };

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
};

export default reducer;
