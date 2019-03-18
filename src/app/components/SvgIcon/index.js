import React from 'react';
import ReactSVG from 'react-svg';
import { icoUser, icoPass, icoLogout } from '../../../assets';

const SvgIcon = props => (
  <div>
    {props.iconType === 'userIcon' ? (
      <ReactSVG path={icoUser} svgClassName="input-ico" />
    ) : props.iconType === 'passIcon' ? (
      <ReactSVG path={icoPass} svgClassName="input-ico" />
    ) : props.iconType === 'logIcon' ? (
      <ReactSVG path={icoLogout} />
    ) : (
      'Icon type was not selected.'
    )}
  </div>
);

export default SvgIcon;
