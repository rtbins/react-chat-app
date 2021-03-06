import React from 'react';
import { Menu } from 'semantic-ui-react';
import UserPanel from './UserPannel';

class SidePanel extends React.Component {
  render() {
    const {user} = this.props;
    return (
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ background: '#4c3c4c', fontSize: '1.2rem' }}
      >
        <UserPanel user={user}/>
      </Menu>
    );
  }
}

export default SidePanel;
