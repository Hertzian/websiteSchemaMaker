import { PropTypes } from 'prop-types'

function GeneralInput({ onChange, name }) {
  return (
    <div className="mb-3 row">
      <p htmlFor="context" className="col-sm-2 col-form-label">{name}</p>
      <div className="col-sm-10">
        <input
          className="form-control"
          name={name}
          type="text"
          onChange={onChange}
        />
      </div>
    </div>
  )
}

GeneralInput.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string
}

export default GeneralInput