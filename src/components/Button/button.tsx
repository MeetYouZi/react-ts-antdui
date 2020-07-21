import React from 'react'
import classNames from 'classnames'

// enum 枚举类型
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string,
  disabled?: boolean,
  size?: ButtonSize,
  btnType?: ButtonType,
  children: React.ReactNode,
  href?: string
}

const Button: React.FC<BaseButtonProps> = (props) => {

  const {
    btnType,
    disabled,
    size,
    children,
    href
  } = props

  // btn, btn-lg, btn-primary
  const classes = classNames('btn', {
    // 如果 btnType 存在就添加 btn-xxx class
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disable': (btnType === ButtonType.Link) && disabled
  })

  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
}

export default Button
