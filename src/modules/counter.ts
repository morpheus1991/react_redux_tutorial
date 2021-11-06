/* 엑션 타입 정의 */
const INCREASE = "counter/INCAREASE";
const DECREASE = "counter/DECAREASE";

/* 엑션 크리에이터 */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/* 초기값 */
interface InitalState {
  number: number;
}
const initalState: InitalState = {
  number: 0,
};

/* 리듀서 */
function counter(state = initalState, action: { [property: string]: any }) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
