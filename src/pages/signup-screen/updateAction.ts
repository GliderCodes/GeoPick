type data = { [key: string]: any; details: { [key: string]: any } };
export default function updateAction(state: any, payload: any): data {
  return {
    ...state,
    details: {
      ...state.details,
      ...payload,
    },
  };
}
