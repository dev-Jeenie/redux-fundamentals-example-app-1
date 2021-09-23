import { combineReducers } from 'redux'
import filtersReducer from './features/filters/filterSlice'
import todosReducer from './features/todos/todoSlice'

// export default function appReducer(state = {}, action) {
//   return {
//     todos: todosReducer(state.todos, action),
//     filters: filtersReducer(state.filters, action),
//   }
// }

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  // 각각의 Reducer를 combineReducers를 이용해서 rootreducer로 합친다
  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer

// reducer가 너무 길다. 이 하나의 reducer가 모든 작업을 처리하려면 읽기 힘들 것이다
// 그래서 Reducer를 여러개의 더 작은 reducer로 분할하는 것. => splitting reducers
/*
그럼 뭘 기준으로 나눌까? 현재 최상위 섹션인 state.todos와 state.filter
=> todoReducer와 filterReducer로 나누자
그 후 todoSlice와 filterSlice를 이 파일에서 combining reducers 해준다
*/
