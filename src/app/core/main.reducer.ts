export function dataReducer(state: any = [], action: any) {
  if (action.type == 'passData') return action.payload
  else return state;
}

export function dataDetailReducer(state: any = {}, action: any) {
  if (action.type == 'passDataDetail') return action.payload
  else return state;
}
