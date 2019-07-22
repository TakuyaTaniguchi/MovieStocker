export default {
    add (state,id){
        state.list.push({
            id: id,
        })
    },
    remove (state,{todo}){
        state.list.splice(state.list.indexOf(todo),1)
    },
    toggle(state,todo){
        todo.done = !todo.done
    }
}