import React from 'react'

interface BaseAlertProps {
  message?: string,
  closable?: Boolean, // 是否显示关闭按钮
  type?: string
}

const Alert: React.FC<string> = () => {
  return (
    <>
      <div className="AlertWrap">

      </div>
    </>
  )
}

export default Alert
