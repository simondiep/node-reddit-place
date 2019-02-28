import React from "react";
import "./FooterColorPalette.css";

const colors = [
  'rgb(255, 255, 255)',
  'rgb(228, 228, 228)',
  'rgb(136, 136, 136)',
  'rgb(34, 34, 34)',
  'rgb(255, 167, 209)',
  'rgb(229, 0, 0)',
  'rgb(229, 149, 0)',
  'rgb(160, 106, 66)',
  'rgb(229, 217, 0)',
  'rgb(148, 224, 68)',
  'rgb(2, 190, 1)',
  'rgb(0, 211, 221)',
  'rgb(0, 131, 199)',
  'rgb(0, 0, 234)',
  'rgb(207, 110, 228)',
  'rgb(130, 0, 128)',
];

const FooterColorPalette = function(props) {
  return (
    <div id="footer-bar">
      <div id="color-palette">
      {colors.map((color)=>(
        <ColorOption
          color={color}
          isSelected={color === props.selectedColor}
          onColorSelected={() => props.onColorSelected(color)}
        />)
      )}
      </div>
    </div>
  )
}

/**
 * props: color, isSelected, onColorSelected
 */
const ColorOption = function(props) {
  let classNames="color-option"
  if (props.isSelected) {
    classNames+=" selected-color-option";
  }
  return (
    <div
      className={classNames}
      style={{backgroundColor: props.color}}
      onClick={props.onColorSelected}
      >
    </div>
  );
}

export default FooterColorPalette;
