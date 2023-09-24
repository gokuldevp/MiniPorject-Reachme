import React from "react";

// Use props to add styles, link and images so that it looks like the reference image.

class ListItem extends React.Component {
  render() {
    const { data } = this.props;
    const listItemStyle = {
      backgroundColor: data.bgColor
    };
    return (
      <div className="ListItem" style={listItemStyle}>
        <img src={data.icon} alt={data.name} />
        <a href={data.link}>{data.name}</a>
      </div>
    );
  }
}

export default ListItem;
