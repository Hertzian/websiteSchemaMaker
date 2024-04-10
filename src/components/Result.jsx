import { useState } from 'react'
import { PropTypes } from 'prop-types'

function Result({ result, onCopy }) {
  const pre = {
    textAlign: 'left',
    color: 'red'
  }
  const [copied, setCopied] = useState('')
  const copyResult = () => {
    onCopy(JSON.stringify(result))
    setCopied('Copied result!')
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <div className="col">
      <h2 className="card-title">Result</h2>
      <p className={copied ? 'card-text text-danger' : 'card-text'}>
        {copied ? copied : 'Click in the card to copy your schema!'}
      </p>
      <div className="card">
        <div onClick={copyResult} className={copied ? 'card-body bg-light' : 'card-body'} >
          <pre style={pre}>{JSON.stringify(result, null, 4)}</pre>
        </div>
      </div>
    </div >
  )
}

Result.propTypes = {
  result: PropTypes.object,
  onCopy: PropTypes.func
}

export default Result