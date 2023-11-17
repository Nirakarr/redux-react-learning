export const setDisplay = (display) => ({
  type: "SET_DISPLAY",
  payload: display,
});

export const setResult = (result) => ({
  type: "SET_RESULT",
  payload: result,
});

export const clear = (clear) => ({
  type: "C",
  payload: clear,
});

// export const add = (value) => ({
//   type: "ADD",
//   payload: value,
// });
// export const subtract = (value) => ({
//   type: "SUB",
//   payload: value,
// });
// export const multiply = (value) => ({
//   type: "MUL",
//   payload: value,
// });
// export const divide = (value) => ({
//   type: "DIV",
//   payload: value,
// });
