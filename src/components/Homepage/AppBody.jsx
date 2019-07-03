import React, { Component } from 'react'
import AppCard from '../common/AppCard';
import axios from 'axios';

class AppBody extends Component {
  
  componentDidMount(){
    axios.get('')
      .then(response => {
        this.setState({datas : response.data})
      })
  }

  constructor(props){
    super(props)
    this.state = {
      name: "Didik",
  
      datas: [],
  
      cardContent: {
        status: "FALSE",
        data: [
          {
            title: "CARD from state",
            content: "Content from state",
            bgColor: "pink",
            contributor: [
              {
                name: "Yoga"
              },
              {
                name: "Agam"
              }
            ]
          },
          {
            title: "CARD 2",
            content: "Content from state",
            bgColor: "orange",
            contributor: [
              {
                name: "Yoga"
              }
            ]
          },
          {
            title: "CARD 3",
            content: "Content from state",
            bgColor: "yellow",
            contributor: []
          }
        ]
      }
    }
  }
  render() {
    console.log('ini data dari server', this.state.datas)
    return (
      <div>
        <h1>{this.state.name}</h1>

        {/* card */}
        <div style={{ display: 'flex', width: '100%' }}>
          {

            this.state.cardContent.data.map((con, index) =>
              <div key={index}>
                <div
                  style={{
                    backgroundColor: con.bgColor,
                    width: "300px"
                  }}>
                  
                  <h1>{con.title}</h1>
                  <h2>{con.content}</h2>
                  {
                    con.contributor.map((c, index) =>
                      <div key={index}>
                        <p>contributor: {c.name}</p>
                      </div>
                    )
                  }
                </div>
              </div>
            )
          }
        </div>
        {/* card end */}



      </div>
    )
  }
}

export default AppBody