/**
 * 路由页面
 */
import './index.less'
import PropTypes from 'prop-types'
import React from 'react'
import DemoComponent from '@/components/Demo'
export default class extends React.Component {
  render() {

    return <div className="demo-route">
      this is demo-route  22222
            <DemoComponent />
    </div>
  }
}

async function b() {
  return '432432423'
}
async function a() {
  const x = await b()
  console.log('xzxxxxx', x)
}

a()
