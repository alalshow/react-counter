import Counter from '../components/Counter';
import * as actions from '../actions';
import {connect} from 'react-redux';

/**
 * •mapStateToProps: store.getState() 결과 값인 state를 파라미터로 받아 컴포넌트의 props로 사용할 객체를 반환합니다.
 * •mapDispatchToProps: dispatch를 파라미터로 받아 액션을 디스패치하는 함수들을 객체 안에 넣어서 반환합니다.
 * •mergeProps: state와 dispatch가 동시에 필요한 함수를 props로 전달해야 할 때 사용하는데, 일반적으로는 잘 사용하지 않습니다.
 */

export function getRandomColor() {
    const colors = [ 
         '#495057',  '#f03e3e',  '#d6336c',  '#ae3ec9',  '#7048e8',  '#4263eb',  '#1c7cd6',  '#1098ad',  '#0ca678',  '#37b24d',  '#74b816',  '#f59f00',  '#f76707'  
    ];
    const random = Math.floor(Math.random() * 13);
    return colors[random];
}

/**액션 생성함수를 사용하여 액션을 생성하고, 해당 액션을 dispatch하는 함수를 만든 후 이를 props로 연결합니다. */
const mapStateToProps = (state) => ({
    color: state.color,
    number: state.number
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color))
    }
});

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;

