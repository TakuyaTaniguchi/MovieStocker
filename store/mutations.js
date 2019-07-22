export default {
    add (state,{id,checked}){
        state.list.push({
            id: id,
            checked: checked
        })
    },
    remove (state,{id,checked}){
        state.list.splice(state.list.indexOf(id),1)
    }
    // toggle(state,todo){
    //     todo.done = !todo.done
    // }
}