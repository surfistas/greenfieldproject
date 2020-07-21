import React from 'react';
import axios from 'axios'

export default class Listproduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users : []
        }
    }

    getData(categorie){
        axios.get(`http://localhost:5050/${categorie}`).then((res)=>{
          const data = res.data;
          this.setState({users : data})
          console.log('data received !!',data)
        })
      }
      componentDidMount() {
        this.getData();
      }

    render() {
        const {users} = this.state;
        return (
            <div>
            {   users.map((row, rowIdx) => {
                    return (
                        <Oneproduct user={user} key={index} index={index} />
                    )
                })
            }
            </div>
        )
    }
}

