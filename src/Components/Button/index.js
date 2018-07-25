import * as React from 'react'
import styles from './button.block.css'
import objstr from 'obj-str'

export default ({ secondary, tertiary, children }) => {
  const style = objstr({
    [styles]: true,
    [styles.secondary()]: secondary,
    [styles.tertiary()]: tertiary
  })

  return (
    <button className={style} {...props}>
      <span className={styles.text}>{children}</span>
    </button>
  )
}
