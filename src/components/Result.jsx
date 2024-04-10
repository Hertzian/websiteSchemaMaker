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
    setCopied('Schema copied!')
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <div className="col">
      <h2 className="card-title">result</h2>
      <p className={copied ? 'card-text text-danger' : 'card-text'}>
        {copied ? 'result copied!' : 'click in the card to get copy your result!'}
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