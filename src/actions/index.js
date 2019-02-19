/**액션 생성함수 만들기 */
import * as types from './ActionTypes';

export const increment = ({type: types.INCREMENT});
export const decrement = ({type: types.DECREMENT});
export const setColor = (color) => ({type: types.SET_COLOR, color});
