import React from 'react'
import Loading from 'the-best-loading'

function Button(props) {
  const { loading, primary, children, ...rest } = props
  const className = primary ? 'btn btn-primary' : 'btn'
  return (
    <button type='button' className={className} {...rest}>
      {children}
      {loading && <Loading />}
    </button>
  )
}

export default Button
