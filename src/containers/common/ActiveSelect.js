import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { NavBar, Grid , List} from 'antd-mobile';
import logo from '../../logo.svg';
import '../../App.css';
export default class ActiveSelect extends Component {
    static PropTypes = {
		select: PropTypes.func.isRequired
    }
    constructor() {
        super()
        this.state = {
            icon: null,
            headerList: []
        }
    }
    componentDidMount() {
        const arr = []
        for (let i = 1; i < 21; i ++) {
            arr.push(i + '')
        }
        this.setState({headerList: arr.map(_ => ({
            icon: require(`../../static/img/${_}.jpg`),
            text: _
        }))})
    }
    select = (v) => {
        this.setState({text: v.icon})
		this.props.select(v.text)
    }
  render() {
      const renderActive = this.state.text ? <div>
          <span>已选择头像</span>
          <img style={{width: 25}} src={this.state.text} alt=""/>
      </div> : '请选择头像'
    return (
        <div>
            <List renderHeader={() => renderActive}>
                <Grid data={this.state.headerList}
                      columnNum={5}
                      onClick={(v) => this.select(v)}
                      renderItem={dataItem => (
                          <div style={{ padding: '12.5px' }}>
                              <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
                              <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                  <span>{`I am ${dataItem.text} ..`}</span>
                              </div>
                          </div>
					  )}
                />
            </List>
        </div>
    );
  }
}
