import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListTabItems from "./ListTabItems";

import "../styles/Table.css";

class ListTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tab_menu = [];
    let tab_panels = [];
    let className = "";
    let Countclass = "";
    let tabPanel = null;
    for (let i = 0; i < this.props.tab_menu.length; i++) {
      if (this.props.choosen_tab == this.props.tab_menu[i].value) {
        className = "Button-Menu-Text-1";
        tabPanel = (
          <TabPanel value={this.props.tab_menu[i].value}>
            <ListTabItems items={this.props.items} />
          </TabPanel>
        );
      } else {
        className = "Button-Menu-Text";
        tabPanel = (
          <TabPanel value={this.props.tab_menu[i].value}>
            <div>Empty</div>
          </TabPanel>
        );
      }
      if (this.props.tab_menu[i].count === 120) {
        Countclass = "Circle1";
      } else {
        Countclass = "Circle";
      }

      // pushing tab menu
      tab_menu.push(
        <Tab value={this.props.tab_menu[i].value}>
          <div className="Menu">
            <h1 className={className}>{this.props.tab_menu[i].label}</h1>
            <div className={Countclass}>
              <h1 className="Circle-text">{this.props.tab_menu[i].count}</h1>
            </div>
          </div>
        </Tab>
      );

      // pushing tab panels
      tab_panels.push(tabPanel);
    }
    return (
      <Tabs value={this.props.value} onSelect={this.props.handleClick}>
        <TabList>{tab_menu}</TabList>
        {tab_panels}
      </Tabs>
    );
  }
}

export default ListTab;
