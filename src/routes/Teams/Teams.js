import reducer from './modules/Teams'
import getTeams from './modules/getTeams'
import deleteTeams from './modules/deleteTeams'
import TeamsContainer from './containers/TeamsContainer.js'

export {reducer, TeamsContainer }

export const sagas = [
  getTeams,
  deleteTeams
]
