export const getLocalData = () => {
    return JSON.parse(localStorage.getItem('Blogs')) || [];
}

export const setLocalData = (data) => {
    return localStorage.setItem("Blogs", JSON.stringify(data));
}