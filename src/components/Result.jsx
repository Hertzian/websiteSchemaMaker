function Result({ result }) {
  return (

    <div className="col">
      <code>
        {JSON.stringify(result, null, 4)}
      </code>
    </div>
  )
}

export default Result