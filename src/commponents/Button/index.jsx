import classNames from 'classnames/bind'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ to, href, primary = false, outline = false, rounded=false, small = false, text = false, large = false, disabled = false, onClick, children, passProps }) {

  let Comp = 'button'

  const classes = cx('wrapper', { primary, outline, small, large, rounded, text, disabled })

  const props = {
    onClick //tạo prop bắt sự kiện OnClick cho Button
    , ...passProps //lấy tất cả các trường hợp còn lại khi sử dụng href, to, onclick

  }

  // if(disabled){
  //   delete props.onClick
  // }

  //Remove event listener when button is disable
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith(`on`) && typeof props[key] === `function`) {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to
    Comp = Link //trường hợp sử dụng link nội bộ
  } else if (href) {
    props.href = href
    Comp = 'a'
  }

  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  )
}

export default Button