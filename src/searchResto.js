import React from  'react'
import Axios from 'axios'

export default class SearchResto extends React.Component{
state ={
    query:"",
    restoList:[],
    bookAtResto:""
}
    componentDidMount(){
        console.log("StateQuery:"+this.state.query)
        console.log("History:"+JSON.stringify(this.props.history.location.state.city))
    //    Axios.get("http://localhost:8080/searchHotels/"+this.props.history.location.state.city+"/"+this.state.query)
    //    .then(response => {
    //        this.setState({
    //            restoList: response.data.restaurants})
    //    })
    }
    handleQuery = () =>{

        console.log(document.getElementById("queryInput").value)
        this.setState({
            query:document.getElementById("queryInput").value
        })

        Axios.get("http://localhost:8080/searchHotels/"+this.props.history.location.state.city+"/"+this.state.query)
        .then(response => {
            this.setState({
                restoList: response.data.restaurants})
        })
    }
    renderHotels = () =>{
        return(
            <div style={{justifyContent:'start'}}>
           {this.state.restoList.map(element => 
               <div  
               onClick= {() => {this.setState({bookAtResto:element.restaurant.id})}}
               key={element.restaurant.id}
               style={{width:200,border:'1px solid',backgroundColor:'orange',padding:15,margin:10,borderColor:'grey'}}>
                    
                    <div>
                    <img  style={{width:200,height:200}} src={element.restaurant.featured_image} />
                   </div>
                    
                    <div>
                       {element.restaurant.name}
                    </div>
                    <div>
                       <span style={{fontSize:16,color:'white'}}> {element.restaurant.location.address}</span>
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
            <div style={{justifyContent:'flex-start',alignItems:'center'}}>
                <input id="queryInput" placeholder="search by query" onChange={this.handleQuery} style={{minWidth:500,padding:20}}/>
            </div>
             {
                 this.renderHotels()
             } 
            </div>
        )
    }
}