import React, {Component} from 'react';
import NvkStudent from './NvkStudent';

class NvkStudentList extends Component{
    constructor(props){
        super(props);
    }

    Nvkhandleview = (NvkStudent)=>{
        this.props.onNvkhandleview(NvkStudent);
    }
    render() {
        let {renderNvkStudents} =this.props;
        console.log("List:",renderNvkStudents);

        let NvkElemntStudent = (Array.isArray(renderNvkStudents) ? renderNvkStudents : []).map((NvkItem, index) => {
            return <NvkStudent key={index} renderNvkStudent={NvkItem} onNvkhandleview={this.Nvkhandleview} />;
        });
        
        return (
            <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                 {NvkElemntStudent}
                </tbody>
              </table>
            </div>
          </div>
        );
    }
    
}

export default NvkStudentList;