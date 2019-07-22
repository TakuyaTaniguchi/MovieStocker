export const state = () => {
    counter: 0
}

export const mutaitions = {
    increment (state) {
        state.counter++
    }
}
// export const state = () => ({
//     isLoading: false
// })

// export const mutaitions = {
//     setIsLoading(state,isLoading){
//         state.isLoading = isLoading
//     }
// }