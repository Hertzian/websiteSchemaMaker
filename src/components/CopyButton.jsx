import { useState } from 'react'
import { PropTypes } from 'prop-types'

function CopyButton({ onCopy, result }) {
  const [copied, setCopied] = useState('')
  const copyResult = () => {
    onCopy(result)
    setCopied('Schema copied!')
    setTimeout(() => setCopied(''), 3000)
  }
  return (
    <>
      {copied && <p className="text-body-danger">{copied}</p>}
      <a onClick={copyResult} className="btn btn-primary">Copy schema!</a>
    </>
  )
}

CopyButton.propTypes = {
  onCopy: PropTypes.func,
  result: PropTypes.string
}

export default CopyButton
