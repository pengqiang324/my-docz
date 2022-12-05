import React from 'react'
import t from 'prop-types'
import { useDocs, useMenus, useConfig } from 'docz'
import './Alert.less'

const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
}
export const Alert = ({ children, kind, ...rest }) => {

  console.log(kinds[kind], kind, useDocs(), useMenus(), useConfig())
  return (
    <div
      style={{
        padding: 20,
        background: 'white',
        borderRadius: 3,
        color: 'white',
        background: kinds[kind]
      }}
      {...rest}
      key={123}
      className='alert'
    >
      {children}
    </div>
  )
}

Alert.propTypes = {
  /**
   * The kind prop is used to set the alert's background color
   */
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
}

Alert.defaultProps = {
  kind: 'info',
}
