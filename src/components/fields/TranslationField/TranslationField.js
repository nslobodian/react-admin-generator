import React, { Component } from 'react'
import Tabs, { TabPane } from 'rc-tabs'
import TabContent from 'rc-tabs/lib/TabContent'
import TabBar from 'rc-tabs/lib/TabBar'
import Field from 'redux-form/es/Field'
import FormSection from 'redux-form/es/FormSection'
import 'rc-tabs/assets/index.css'
import s from './TranslationField.scss'
import connect from 'react-redux/es/connect/connect'
import { getLanguagesAttempt, getCountriesAttempt } from 'redux/Languages'

export const ChangeTabField = ({ input: { onChange, value }, children, countries, needCode, innerWrap, forceRender }) => (
  <Tabs
    activeKey={value || 'sk'}
    onChange={onChange}
    renderTabBar={() => <TabBar />}
    renderTabContent={() => <TabContent />}
  >
    {
      countries.map(({ language: { code, required }, currency, vat }, index) =>
        <TabPane tab={`${code.toUpperCase()} ${required ? '*' : ''}`} key={code} forceRender={forceRender}>
          {
            innerWrap
              ? needCode ? React.cloneElement(children, { code, currencyCode: currency.code, vat, conversionRate: currency.conversionRate }) : children
              : <FormSection name={code} required={required}>
                {needCode ? React.cloneElement(children, { code, currencyCode: currency.code, vat, conversionRate: currency.conversionRate }) : children}
              </FormSection>
          }
        </TabPane>
      )
    }
  </Tabs>

)

export class TranslationField extends Component {
  componentWillMount () {
    this.props.getCountriesAttempt()
  }

  handleChange = (e, value) => {
    e.preventDefault()
    this.props.handleChangeTab(value)
  }

  render () {
    const { countries, name, children, needCode = true, innerWrap, tabKey = 'tabKey', forceRender, handleChangeTab } = this.props
    const FieldComponet = <Field component={ChangeTabField} name={tabKey} countries={countries} children={children}
      needCode={needCode} innerWrap={innerWrap} forceRender={forceRender} onChange={handleChangeTab ? this.handleChange : null} />
    return <div className={s.TranslationField}>
      {name
        ? <FormSection name={name}>{FieldComponet}</FormSection>
        : FieldComponet
      }
    </div>
  }
}

const mapActionToProps = {
  getLanguagesAttempt,
  getCountriesAttempt,
}
const mapStateToProps = ({ Languages: { countries } }) => ({ countries })

export default connect(mapStateToProps, mapActionToProps)(TranslationField)
