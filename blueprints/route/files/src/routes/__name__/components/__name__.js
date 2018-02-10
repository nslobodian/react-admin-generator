import React, { Component } from 'react'
import s from './<%= pascalEntityName %>.scss'
import Spinner from 'components/Spinner'

export class <%= pascalEntityName %> extends Component {

  componentDidMount() {
  const { params: { id }, get<%= pascalEntityName %>Attempt } = this.props
    get<%= pascalEntityName %>Attempt(id)
  }

  render() {
    const { <%= pascalEntityName %>, get<%= pascalEntityName %>Loading } = this.props
    return (
      <div className='container'>
        <div className='panel panel-default'>
          <div className='panel-heading'><%= pascalEntityName %></div>
            <div className='panel-body'>
               {get<%= pascalEntityName %>Loading && <Spinner />}
               <%= pascalEntityName %>
             </div>
         </div>
      </div>
    )
    }
}

export default <%= pascalEntityName %>
