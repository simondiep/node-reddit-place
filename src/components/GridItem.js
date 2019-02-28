import React from "react";
import { STORAGE_URL } from "../Constants";
import "./GridItem.css";

class GridItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
    };
  }

  // This is needed to properly render updates from socket.io
  componentDidUpdate(prevProps) {
    if (prevProps.color !== this.props.color) {
      this.setState({color: this.props.color});
    }
  }

  handleClick = () => {
    const { rowIndex, columnIndex } = this.props;
    const color = this.props.selectedColor;
    this.props.io.emit('user changed color', {
      rowIndex, columnIndex, color,
    });
    this.setState({ color });
  };

  render() {
    return (
      <div className="GridItem"
        onClick={this.handleClick}
        style={{ backgroundColor: this.state.color }}
      >
      </div>
    );
  }
}

export default GridItem;
