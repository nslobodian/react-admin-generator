import reducer from './modules/Projects'
import getProjects from './modules/getProjects'
import deleteProjects from './modules/deleteProjects'
import ProjectsContainer from './containers/ProjectsContainer.js'

export {reducer, ProjectsContainer }

export const sagas = [
  getProjects,
  deleteProjects
]
