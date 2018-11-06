import React, { Component } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
import ColorPanel from './colorPanel/ColorPanel';
import SidePanel from './sidePanel/SidePanel';
import Messages from './messages/Messages';
import MetaPanel from './metaPanel/MetaPanel';
import { connect } from 'react-redux';

const App = ({ user }) => {
  return (
    <Grid columns="equal" className="app" style={{ background: '#eee' }}>
      <ColorPanel />
      <SidePanel user={user} />
      <Grid.Column styles={{ marginLeft: 320 }}>
        <Messages />
      </Grid.Column>
      <Grid.Column width={4}>
        <MetaPanel />
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});

export default connect(
  mapStateToProps,
  {},
)(App);
