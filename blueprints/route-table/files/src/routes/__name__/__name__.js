import reducer from './modules/<%= pascalEntityName %>'
import get<%= pascalEntityName %> from './modules/get<%= pascalEntityName %>'
import delete<%= pascalEntityName %> from './modules/delete<%= pascalEntityName %>'
import <%= pascalEntityName %>Container from './containers/<%= pascalEntityName %>Container.js'

export {reducer, <%= pascalEntityName %>Container }

export const sagas = [
  get<%= pascalEntityName %>,
  delete<%= pascalEntityName %>
]
