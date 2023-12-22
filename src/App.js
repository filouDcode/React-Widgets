import React from 'react';

import Counter from './Counter'
import ShowHide from './ShowHide'
import FontSizer from './FontSizer'
import AlignMe from './AlignMe'
import Clock from './Clock'
import ChangeColor from './ChangeColor'
import ColorSlider from './ColorSlider'


export default function app () {
  return (
    <div>
      <Counter />
      <hr />
      <ShowHide />
      <hr />
      <FontSizer />
      <hr />
      <AlignMe />
      <hr />
      <Clock />
      <hr />
      <ChangeColor />
      <hr />
      <ColorSlider />
    </div>
  );
};


