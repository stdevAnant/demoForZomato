import React from 'react'
import Axios from 'axios'

export default class hotels extends React.Component{
   state= {
       hotelList:[]
   } 
    componentWillMount(){

        Axios.get("http://localhost:8080/hotelsByCity/25",{})
        .then(res => {
            console.log(res.data.collections)
           this.setState({hotelList:res.data.collections}) 
        })
    }
    
    renderHotels(){

        return(
         <div style={{justifyContent:'start'}}>
        {this.state.hotelList.map(element => 
            <div  
            key={element.collection.collection_id}
            style={{width:200,border:'1px solid',backgroundColor:'orange',padding:15,margin:10,borderColor:'grey'}}>
                 
                 <div>
                 <img  style={{width:200,height:200}} src={element.collection.image_url} />
                </div>
                 
                 <div>
                    {element.collection.title}
                 </div>
                 <div>
                    <span style={{fontSize:16,color:'white'}}> {element.collection.description}</span>
                 </div>
               </div>
        )
        }
        </div>
        )
    }
    render(){

        return(
            <div>
                {
                    this.renderHotels()
                }
            </div>
        )
    }
} 