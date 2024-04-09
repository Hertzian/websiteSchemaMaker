import { useState } from 'react'
import GeneralInput from './components/GeneralInput'
import Result from './components/Result'
import CopyButton from './components/CopyButton'

function App() {
  const calix = {
    context: "",
    type: "",
    url: "",
    potentialAction: {
      type: "",
      target: "",
      query: ""
    }
  }

  const [result, setResult] = useState(calix)

  const onChange = (e) => setResult({ ...result, [e.target.name]: e.target.value })
  const onCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.log('error copying to clipboard: ', err)
    }
  }

  return (
    <div className="container text-center">
      <div className="card">
        <div className="card-body">

          <div className="row align-items-start">
            <div className="col">
              <h2 className="card-title">Website schema</h2>
              <p className="card-text">Write your schema!</p>

              <GeneralInput onChange={onChange} name={'context'} />
              <GeneralInput onChange={onChange} name={'type'} />
              <GeneralInput onChange={onChange} name={'url'} />
              <GeneralInput onChange={onChange} name={'type'} />
              <GeneralInput onChange={onChange} name={'target'} />
              <GeneralInput onChange={onChange} name={'query'} />

              <CopyButton onCopy={onCopy} result={JSON.stringify(result)} />
            </div>

            <Result result={result} />

          </div>

        </div>
      </div>
    </div >
  )
}

export default App
