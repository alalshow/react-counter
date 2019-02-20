
import * as types from '../actions/ActionTypes';

/** 초기상태를 설정합니다. */
const initialState = {color : 'black', number: 0};

/** 
 *  리듀서 함수를 정의합니다. 리듀서는 state와 action을 파라미터로 받습니다. 
 *  state가 undefined일 때 (스토어가 생성 될 때) state 기본 값을 initialState로 사용합니다.
 *  action.type 에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다. 
 *  이때 주의할 점은 state를 직접수정 하면 안 되고, 기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야합니다.
 *  --> spread (전개자) 사용 or Object.assign() 함수 활용 
 * 
 * */

function counter(state = initialState, action) {
    switch(action.type) {
        case types.INCREMENT : 
            return {
                ...state, number: state.number +1
            };
        case types.DECREMENT :
            return {
                ...state, number: state.number -1
            };
        case types.SET_COLOR :
            return {
                ...state, color: action.color
            };
        default: return state;
    }
}

export default counter;





