import React from 'react';

import PropTypes from 'prop-types';
import { PinItems } from './PinItems';

export const InputBox = ({ lable, length, perBox }) => {
  const [PinValue, setPinValue] = React.useState(new Array(length).fill(''));

  const nodeRefData = React.useRef(new Array(length).fill(0));

  const handleChange = (value, index) => {

    let newVal = [...PinValue];

    newVal[index] = value;

    setPinValue(newVal);

    if(value && index < PinValue.length - 1){
      nodeRefData.current[index + 1].focus();
  };
};

  console.log('🚀 ~ PinValue:', PinValue);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{lable}</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '70%',
          margin: 'auto',
        }}
      >
        {PinValue.map((_, i) => {
          return (
            <PinItems
              key={i + 1}
              max={perBox}
              handleChangeEvent={(val) => handleChange(val, i)}
              ref={(node) => (nodeRefData.current[i] = node)}
            />
          );
        })}
      </div>
    </>
  );
};

InputBox.propTypes = {
  lable: PropTypes.string.isRequired,
};

InputBox.defaultProps = {
  length: 3,
  perBox: 1,
};