const buttonInitialState = {
  buttonOne: true,
  buttonTwo: true,
  activeContentComponent: 'Dashboard',
}

const noteInitialState = {
  notes: []
}

const projectInitialState = {
  confirm: { projectName: null, projectDescription: null },
  projects: []
}

const authenticationInitialState = {
  appState: 'not_authenticated'
}

const modalInitialState = {
  login: false,
  getStarted: false
}

const loginInitialState = {
  email : null
}

const registrationInitialState = {
  firstName: null,
  lastName: null,
  company: null,
  email : null
}

const imageUpdateInitialState = {
  image: null
}

const initialImageState = {
  appState: 'not_authenticated'
}

export function authReducer (state = authenticationInitialState, action) {
  var newState = Object.assign({}, state)
  switch (action.type) {
    case 'AUTHENTICATED_USER':
      newState.appState = action.auth;
      return newState;
  }
  return state
}

export function showImageReducer (state = initialImageState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case 'SHOW_TEST_IMAGE':
      newState.appState = action.auth;
      return newState;
  }
  return state;
}

export function buttonReducer (state = buttonInitialState, action) {
  var newState = Object.assign({}, state)
  switch (action.type) {
    case 'SWITCH_VISIBILITY':
    console.log(state)
      return newState[action.button] = !newState[action.button];
    case 'TOGGLE_CONTENT_COMPONENT':
      newState.activeContentComponent = action.targetComponent;
      return newState;
    default:
      return state;
  }
  return state
}

export function noteReducer (state = noteInitialState, action) {
  var newState = Object.assign({}, state)
  switch (action.type) {
    case 'ADD_NOTE':
      var newComments = state['notes'].slice();
      newComments.push(action.note);
      newState['notes'] = newComments;
      return newState;
    default:
      return state;
  }
  return state
}

export function projectReducer (state = projectInitialState, action) {
  var newState = Object.assign({}, state)
  switch (action.type) {
    case 'ADD_PROJECT':
      var newProjects = state.projects.slice();
      newProjects.push(action.project);
      newState.projects = newProjects;
      return newState;
    case 'CONFIRM_PROJECT':
      console.log('confirm', action)
      newState.confirm = action.project;
      return newState;
    default:
      return state;
  }
  return state
}

export function loginReducer (state = loginInitialState, action) {
  var newState = Object.assign({}, state)
  switch (action.type) {
    case 'USER_LOGIN':
      newState.email = action.email;
      return newState;
  }
  return state;
}

export function registrationReducer (state = registrationInitialState, action) {
  var newState = Object.assign({}, state)
  console.log('logging from registration reduce ',action)
  switch (action.type) {
    case 'REGISTER_USER' :
      newState.firstName = action.user.firstName;
      newState.lastName = action.user.lastName;
      newState.company = action.user.company;
      newState.email = action.user.emailField;
      return newState;
  }
  return state;
}

export function imageUpdateReducer (state = imageUpdateInitialState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case 'UPDATE_IMAGE' :
      newState.image = action.image.data;
      return newState;
  }
  return state;
}

export function modalStateReducer (state = modalInitialState, action) {
  var newState = Object.assign({}, state);
  console.log(action)
  switch(action.type) {
    case 'SHOW_LOGIN':
      newState.login = true;
      newState.getStarted = false;
      return newState;
    case 'SHOW_GET_STARTED':
      newState.getStarted = true;
      newState.login = false;
      return newState;
    case 'HIDE_LOGIN':
      newState.login = false;
      return newState;
    case 'HIDE_GET_STARTED':
      newState.getStarted = false;
      return newState;
    case 'MODAL_RESET':
      newState.login = false;
      newState.getStarted = false;
      return newState;
  }
  return state;
}
