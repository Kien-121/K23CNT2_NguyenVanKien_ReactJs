import React, {Component} from 'react';

class NvkStudent extends Component{
    constructor(props){
        super(props);
    }
    Nvkhandleview = (NvkStudent)=>{
        this.props.onNvkhandleview(NvkStudent);
    }
    render() {
        let {renderNvkStudent, key} = this.props;
        console.log("Student:",renderNvkStudent);
        return(
            <>
            <tr>
                    <td>{key}</td>
                    <td>{renderNvkStudent.NvkId}</td>
                    <td>{renderNvkStudent.NvkStudentName}</td>
                    <td>{renderNvkStudent.NvkAge}</td>
                    <td>{renderNvkStudent.NvkGender}</td>
                    <td>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-danger btn-icon-text"
                          onClick={()=>this.Nvkhandleview(renderNvkStudent)}
                        >
                          Xem
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-icon-text"
                        >
                          Sửa
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-icon-text"
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
            </>
        );
    }

}

export default NvkStudent;