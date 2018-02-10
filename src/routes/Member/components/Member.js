import React, { Component } from 'react'
import s from './Member.scss'
import SelfAware from 'static/images/self_aware.png'
import SolutionOriented from 'static/images/solution_oriented.png'
import WorldCitizen from 'static/images/world_citizen.png'
import EmpoweringOthers from 'static/images/empowering_others.png'

export class Member extends Component {

  componentDidMount () {
    const { params: { id }, getMemberAttempt } = this.props
    getMemberAttempt(id)
  }

  render () {
    const { member, getMemberLoading } = this.props
    const fullName = `${member.name} ${member.surname}`
    return (
      <div className='container'>
        <div className='panel panel-default'>
          <div className='panel-heading'>Member {fullName}</div>
          <div className='panel-body'>
            <div className='row' >
              <div className='col-xs-12 col-sm-3'>
                <img className='img-responsive' src={member.profile_picture} alt={fullName} />
              </div>
              <div className='col-xs-12 col-sm-9'>
                <p>Area: {member.area}</p>
                <p>Project: {member.project}</p>
                <p>Task: {member.active_task}</p>
                { member.ldm && <div className='row'>
                  <div className='col-xs-6 col-sm-1'>
                        LDM:
                     </div>
                  <div className='col-xs-6 col-sm-2'>
                    <span>{member.ldm.empowering_others}</span>
                    <img className='img-responsive' src={EmpoweringOthers} alt={'Empowering Others'} />
                  </div>
                  <div className='col-xs-6 col-sm-2'>
                    <span>{member.ldm.self_aware}</span>
                    <img className='img-responsive' src={SelfAware} alt={'Self-aware'} />
                  </div>
                  <div className='col-xs-6 col-sm-2'>
                    <span>{member.ldm.solution_oriented}</span>
                    <img className='img-responsive' src={SolutionOriented} alt={'Solution Oriented'} />
                  </div>
                  <div className='col-xs-6 col-sm-2'>
                    <span>{member.ldm.world_citizen}</span>
                    <img className='img-responsive' src={WorldCitizen} alt={'World Citizen'} />
                  </div>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Member
