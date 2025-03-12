import React, { Component } from 'react';
import NvkControl from './component/NvkControl';
import NvkStudentList from './component/NvkStundentList';
import NvkForm from './component/NvkForm';

class NvkApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      NvkStudent:[
        {NvkId:"SV001",NvkStudentName:"Nguyễn Văn Kiên",NvkAge:"20",NvkGender:"Nam",NvkBirthday:"23/01/2005",NvkBirthPlace:"HN",NvkAddress:"Thuong Tin"},
        {NvkId:"SV002",NvkStudentName:"Nguyễn Văn Tam",NvkAge:"20",NvkGender:"Nam",NvkBirthday:"23/02/2005",NvkBirthPlace:"HN",NvkAddress:"Thuong Tin"},
        {NvkId:"SV003",NvkStudentName:"Nguyễn Văn Nam",NvkAge:"20",NvkGender:"Nam",NvkBirthday:"23/03/2005",NvkBirthPlace:"HN",NvkAddress:"Thuong Tin"}
      ],
      NvkStudent:"",
    }
  }
  Nvkhandleview = (NvkStudent)=>{
    this.setState({
      NvkStudent:NvkStudent,
    })
  }
  
  render() {
    console.log("View Student:", this.state.NvkStudent);
    return (
      <div>
        <h1 className='text-center'>Nguyen Van Kien - K23CNT2 - Exam</h1>
        <section className="container-fluid mt-3">
  <div className="row">
    <div className="col-lg-7 grid-margin stretch-card">
      <div className="card">
       
        <NvkControl />
        <NvkStudentList renderNvkStudent={this.state.NvkStudent} onNvkhandleview={this.onNvkhandleview}/>
      </div>
    </div>
    <div className="col-5 grid-margin">
      <NvkForm renderNvkStudent ={this.state.NvkStudent} />
    </div>
  </div>
</section>

      </div>
    );
  }
}

export default NvkApp;