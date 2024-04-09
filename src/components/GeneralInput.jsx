import { PropTypes } from 'prop-types'

function GeneralInput({ onChange, name }) {
  return (
    <div className="mb-3 row">
      <label htmlFor="context" className="col-sm-2 col-form-label">{name}</label>
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