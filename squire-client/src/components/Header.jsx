import React from 'react';

function Header(props) {
  const { links } = props;
  return (
    <div className="App-header" >
      <div className="body">
        <h1>squire.</h1>
      </div>
      <br />
      <br />
      <div className="header">
        {links.map(link => {
          return <div href="#"
            key={link}
            onClick={() => props.onClick(link)}
          >{link}</div>
        })}
      </div>
    </div>
  );
}

export default Header;