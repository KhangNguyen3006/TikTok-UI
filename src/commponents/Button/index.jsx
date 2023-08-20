import classNames from 'classnames/bind'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ to, href, primary=false, outline=false, onClick, children, passProps }) {

  let Comp = 'button'

  const classes = cx('wrapper', {primary, outline})

  const prop = {
    onClick //tạo prop bắt sự kiện OnClick cho Button
    , ...passProps //lấy tất cả các trường hợp còn lại khi sử dụng href, to, onclick

  }

  if (to) {
    prop.to = to
    Comp = Link //trường hợp sử dụng link nội bộ
  } else if (href) {
    prop.href = href
    Comp = 'a'
  }

  return (
    <Comp className={classes} {...prop}>
      <span>{children}</span>
    </Comp>
  )
}

export default Button