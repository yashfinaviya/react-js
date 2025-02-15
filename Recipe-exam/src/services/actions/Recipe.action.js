import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
export const addNewRecipe = () => {
    return {
        type: "ADD_NEW_RECIPE",
    }
}

export const addRecipeRej = (msg) => {
    return {
        type: "ADD_NEW_RECIPE_REJ",
        payload: msg
    }
}

export const getAllRecipe = (data) => {
    return {
        type: "GET_ALL_RECIPE",
        payload: data
    }
}


export const singleRecipe = (data) => {
    return {
        type: "SINGLE_RECIPE",
        payload: data
    }
}

export const updateRecipe = () => {
    return {
        type: "UPDATE_RECIPE",
    }
}

export const loading = () => {
    return {
        type: "LOADING"
    }
}


export const getAllRecipeAsync = () => {
    return async (dispatch) => {
        dispatch(loading())
        try {
            let recipes = await getDocs(collection(db, "recipes"))

            let result = recipes.docs.map((recipe) => {
                return {
                    id: recipe.id,
                    ...recipe.data()
                }
            })
            // console.log(result);
            dispatch(getAllRecipe(result))
        } catch (err) {
            console.log(err);
        }
    }
}


export const addRecipeAsync = (data) => {
    return async (dispatch) => {
        try {
            //    let addNewDoc = await addDoc(collection(db, 'recipes'), data)
            let addNewDoc = await setDoc(doc(db, 'recipes', `${data.id}`), data)
            dispatch(addNewRecipe())
            //    console.log(addNewDoc);

        } catch (err) {
            console.log(err)
        }
    }
}

export const singleRecipeAsync = (id) => {
    return async (dispatch) => {
        try {
            let res = await getDoc(doc(db, 'recipes', `${id}`))
            let result = res.data();
            result.id = res.id;
            console.log(result)
            dispatch(singleRecipe(result))
        } catch (err) {
            console.log(err);
        }
    }
}


export const deleteRecipeAsync = (id) => {
    return async (dispatch) => {
        try {
            let record = await deleteDoc(doc(db, "recipes", `${id}`))
            dispatch(getAllRecipeAsync())
        } catch (error) {
            console.log(err);
        }
    }
}


export const updateRecipeAsync = (data) => {
    return async (dispatch) => {

        try {
            await updateDoc(doc(db, 'recipes', `${data.id}`), data);
            dispatch(updateRecipe())
        } catch (error) {
            console.log(error);
        }

    }
}