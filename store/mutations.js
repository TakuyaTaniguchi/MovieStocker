export default {
    add (state,{id,checked}){
        state.list.push({
            id: id,
            checked: checked
        })
    },
    remove (state,{id,checked}){
        let tagetId = 0;
        state.list.find(function(element,index) {
            if(element.id === id){
                tagetId =  index;
            };
        });
        state.list.splice(tagetId,1)
    }
}