

export const initialState= {
    basket:[],
    user:null,
    shipingData:{},
    paymentMessage:""
}

export const actionTypes={
    ADD_TO_BASKET:"ADD_TO_BASKET",
    DELETE_FROM_BASKET:"DELETE_FROM_BASKET",
    SET_USER:"SET_USER",
    EMPTY_BASKET:"EMPTY_BASKET",
    SET_SHIPPINGDATA:"SET_SHIPPINGDATA",
    SET_PAYMENT_MESSAGE:"SET_PAYMENT_MESSAGE",
    INCREASE_QUANTITY_ITEM:"INCREASE_QUANTITY_ITEM",
    DECREASE_QUANTITY_ITEM:"DECREASE_QUANTITY_ITEM",
}


export const getBasketTotal=(basket)=>{
  return  basket?.reduce((amount,item)=>item.price*item.quantity+amount,0)
}

export const getTotalItems=(basket)=>{
  return  basket?.reduce((acc,{quantity})=>acc+quantity,0)
}


const reducer=(state,action)=>{
    
        switch(action.type){
            case "ADD_TO_BASKET":
            return {
                ...state,
                basket:[...state.basket,action.item]
            }
            case "INCREASE_QUANTITY_ITEM":
                let basketToInc=[...state.basket]
                basketToInc.map((item)=>{
                if(item.id===action.id) {
                    //todo:reducer runs 2 times for that it added 0.5 to simulate one product
                   item.quantity=item.quantity+0.5
                }
            })    
            return {
                ...state,
                basket:basketToInc
            }
            case "DECREASE_QUANTITY_ITEM":
                let basketToDec=[...state.basket]
                basketToDec.map((item)=>{
                if(item.id===action.id) {
                    //todo:reducer runs 2 times for that it dec 0.5 to simulate one product
                   item.quantity=item.quantity-0.5
                }
            })    
            return {
                ...state,
                basket:basketToDec
            }
            case "DELETE_FROM_BASKET":
                const index=state.basket.findIndex(basketItem=>basketItem.id===action.id)
                let newBasket=[...state.basket]
                if(index>=0){
                    newBasket.splice(index,1)
                }else {console.log("cant remove product")}
                return {
                ...state,
                basket:newBasket
            }
            case "SET_USER":
                return{
                    ...state,
                    user:action.user
                }
            case "EMPTY_BASKET":
                return{
                    ...state,
                    basket:action.basket
                }
            case "SET_SHIPPINGDATA":
                return{
                    ...state,
                    shipingData:action.shipingData
                }
            case "SET_PAYMENT_MESSAGE":
                return{
                    ...state,
                    paymentMessage:action.paymentMessage
                }
            default:return state;
        }
}

export default reducer;