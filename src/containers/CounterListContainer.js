import CounterList from '../components/CounterList';
import * as actions from '../actions';
import {connect} from 'react-redux';
import getRandomColor from '../lib/getRandomColor';

/**
 * •mapStateToProps: store.getState() 결과 값인 state를 파라미터로 받아 컴포넌트의 props로 사용할 객체를 반환합니다.
 * •mapDispatchToProps: dispatch를 파라미터로 받아 액션을 디스패치하는 함수들을 객체 안에 넣어서 반환합니다.
 * •mergeProps: state와 dispatch가 동시에 필요한 함수를 props로 전달해야 할 때 사용하는데, 일반적으로는 잘 사용하지 않습니다.
 */

/**액션 생성함수를 사용하여 액션을 생성하고, 해당 액션을 dispatch하는 함수를 만든 후 이를 props로 연결합니다. */

const mapStateToProps = (state) => ({
    counters: state.counters,
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    onSetColor: (index) => {
        const color = getRandomColor();
        dispatch(actions.setColor(index, color))
    }
});

const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList);

export default CounterListContainer;

