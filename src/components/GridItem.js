import React from "react";
import { CompactPicker } from "react-color";
import { STORAGE_URL } from "../Constants";
import "./GridItem.css";

class GridItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
      displayColorPicker: false,
    };
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  onColorChange = ({ hex }) => {
    this.setState({ color: hex });
  };

  onColorPickerClose = () => {
    const { rowIndex, columnIndex } = this.props;
    const color = this.state.color;

    this.props.io.emit('user changed color', {
      rowIndex, columnIndex, color,
    });
  };

  render() {
    return (
      <div className="GridItem" onClick={this.handleClick} style={{ backgroundColor: this.state.color }}>
        {this.state.displayColorPicker ? (
          <div className="GridItemPopover">
            <div className="GridItemCover" onClick={this.handleClose} />
            <CompactPicker
              color={this.state.color}
              onChange={this.onColorChange}
              onChangeComplete={this.onColorPickerClose}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default GridItem;
