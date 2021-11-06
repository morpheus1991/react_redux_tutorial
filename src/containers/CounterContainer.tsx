import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";
const CounterContainer = ({
  number,
  increase,
  decrease,
}: {
  number: number;
  increase: () => void;
  decrease: () => void;
}) => {
  return (
    <Counter
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
    ></Counter>
  );
};

const mapStateToProps = (state: { counter: { number: number } }) => ({
  number: state.counter.number,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
