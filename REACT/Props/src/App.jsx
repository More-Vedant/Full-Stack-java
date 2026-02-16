import React from 'react';
import { NameShow } from './Components/NameShow';
import { NameShow2 } from './Components/NameShow2';

export const App = () => {
  return <>
  <h1>Props</h1>
  <NameShow lable={"more"} age={22} />
  <NameShow />
  <NameShow age={21} />

  <NameShow2 />
  <NameShow name='vedant' age='21' lable='fsd' />
  <NameShow2 name='vedant' age='21' />
  </>
}