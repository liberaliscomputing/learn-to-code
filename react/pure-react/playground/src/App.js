import React, { Component } from 'react';


class Layout extends Component {
  state = { showSidebar: false };

  toggleSidebar = () => {
    const { showSidebar } = this.state;
    this.setState({ showSidebar: !showSidebar });
  }

  render() {
    const { showSidebar } = this.state;

    return (
      <div>
        {
          showSidebar &&
          <Sidebar
            onHide={this.toggleSidebar}
            children={'This is a sidebar.'}
          />
        }
        <Content
          isSidebarVisible={showSidebar}
          onShowSidebar={this.toggleSidebar}
          children={'This is a content.'}
        />
      </div>
    );
  }
}

const Content = (props) => {
  const { isSidebarVisible, onShowSidebar, children } = props;

  return (
    <div>
      {children}
      {
        !isSidebarVisible && (
          <button 
            onClick={onShowSidebar} 
            children={'Show'}
          />
        )
      }
    </div>
  );
};

const Sidebar = (props) => {
  const { onHide, children } = props;

  return (
    <div>
      {children}
      <button
        onClick={onHide}
        children={'Hide'} 
      />
    </div>
  );
};

export default Layout;
