let initialState = {
  flashMessage: '',
  showFlash: false
}

const flashMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_FLASH_MESSAGE':
      return {
        ...state,
        ...action.payload,
        showFlash: true
      }
    case 'HIDE_FLASH_MESSAGE':
      return {
        ...state,
        flashMessage: '',
        showFlash: false
      }
    default:
      return state
  }
}

export default flashMessageReducer