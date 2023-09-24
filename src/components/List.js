import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    const data = [
      {
        id: 1,
        name: "LinkedIn",
        link: "http://linkedin.com",
        icon:
          "https://cdn.iconscout.com/icon/premium/png-512-thumb/linkedin-2752135-2284952.png?f=avif&w=256",
        bgColor: "#ff9580"
      },
      {
        id: 2,
        name: "GitHub",
        link: "https://github.com",
        icon:
          "https://cdn.iconscout.com/icon/free/png-512/free-github-1521500-1288242.png?f=avif&w=256",
        bgColor: "#f2faa6"
      },
      {
        id: 3,
        name: "Twitter",
        link: "https://twitter.com/",
        icon:
          "https://cdn.iconscout.com/icon/premium/png-512-thumb/twitter-2752046-2284863.png?f=avif&w=256",
        bgColor: "#b8b3e8"
      }
    ];
    // Edit the code given below and pass data as props to listItem and map over data.
    return (
      <div className="List">
        {data.map((item) => {
          return <ListItem data={item} key={item.id} />;
        })}
      </div>
    );
  }
}

export default List;
