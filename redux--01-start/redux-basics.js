const redux = require('redux');
//kanw mi metavliti pou tha anaferete st function create store
// de vazw parenthesi epeidi de tha ektelestei akoma
const createStore = redux.createStore;

const initialState = {
    counter: 0 
}

// o reducer einai auto kpou kanei update to state
// to state pou vazw st function einai t palio
//reducer

// to state = initialState einai gia na mi vgainei undefied
// tha pairnei diladi mia timi
const rootReducer = (state = initialState, action ) => {
 if(action.type === 'INC_COUNTER'){

// gia na auksisw t counter de vazw appla counter++
//giati tha allaksw t arxiko state
//opote me to ...state kanw copy t arxiko state kai allazw
//oti einai na allaxtei    
     return {
         ...state,
         counter: state.counter + 1 
     };
 }
 if(action.type === 'ADD_COUNTER'){
     return {
        ...state,
        counter: state.counter + action.value
     };
 }  
    return state;
};
   
// store
const store = createStore(rootReducer);
console.log(store.getState());


//subscription
// t subscription mas leei ti kthe stigmi t state
// ekteleite panta afou ginei update to state
store.subscribe(() =>{

    console.log('[Subscription]', store.getState());    
});


// me t console log t kanw gia na vgale t state apo t store
// tha vgei undefined epeidi o root reduces apla exei t palio state
// kai de kanei kati me auto

//action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
 

