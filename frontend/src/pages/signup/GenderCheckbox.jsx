import React from 'react'

const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='gender-select-container'>
      <div className='form-control'>
        <label className={`${selectedGender ==="male" ? "selected" : ""}`}>
          <span className='label-text'>Male</span>
          <input
            type='checkbox'
            className='checkbox'
            checked={selectedGender === 'male'}
            onChange={()=>onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className='form-control'>
        <label className={`${selectedGender ==="female" ? "selected" : ""}`}>
          <span className='label-text'>Female</span>
          <input
            type='checkbox'
            className='checkbox'
            checked={selectedGender === 'female'}
            onChange={()=>onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckbox
