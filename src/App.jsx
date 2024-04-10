import { useState } from 'react'
import GeneralInput from './components/GeneralInput'
import Result from './components/Result'

function App() {
  const [result, setResult] = useState({})

  const webSite = {
    url: '',
    name: '',
    description: '',
    alternateName: '',
    author: '',
    inLanguage: '',
  }

  const onChange = (e) => setResult({ ...result, [e.target.name]: e.target.value })
  const onCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.log('error copying to clipboard: ', err)
    }
  }

  const showInputs = []
  for (const [key, value] of Object.entries(webSite)) {
    showInputs.push(<GeneralInput onChange={onChange} name={key} key={key} />)
  }

  return (
    <div className="container text-center">
      <div className="card">
        <div className="card-body">

          <div className="row align-items-start">
            <div className="col">
              <h2 className="card-title">Website schema</h2>
              <p className="card-text">Write your schema!</p>

              <GeneralInput onChange={onChange} name={'@type'} />
              <GeneralInput onChange={onChange} name={'@context'} />
              {showInputs}

            </div>

            <Result result={result} onCopy={onCopy} />

          </div>

        </div>
      </div>
    </div >
  )
}

export default App
