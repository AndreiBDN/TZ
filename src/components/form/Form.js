import React,{Component} from 'react';
import img from '../../Vector.svg';
import FetchData from '../service/service';

class Form extends Component{

  fetchData = new FetchData();

    constructor(props) {
    super(props);
    this.state ={
        imageUrl: null,
        imageName: null,
        message:''
    }
    }
    onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
        this.setState({
        image: event.target.files[0],
        imageUrl: URL.createObjectURL(event.target.files[0]),
        imageName: event.target.files[0].name
        });
    }
    }
    onChange = (e) => {
      const name = e.target.name;
      const value = e.target.value
      this.setState({[name]: value})
    }


    sendData = (event) => {
      event.preventDefault();
      const body = {
        action: 'send_data',
        id: 1,
        image: this.state.image,
        contact: [
          this.state.name,
          this.state.surname,
          this.state.patronymic
        ]
        
      }
      this.fetchData.postData(body)
      .then((message) => {
        this.setState(({message}))
      })
    }

    showMessage (mes){
      return (
      <p>{mes.msg}</p>
      )
    }

   render(){
     const textMessage = this.showMessage(this.state.message)
    return(
        <>
        <form onSubmit={this.sendData}>
        <label className="form-label">
          <span className="name-item">Имя</span>
          <input
          onChange={this.onChange}
          className="form-input"
           name="name" 
           type="text"
           value={this.state.name} />
        </label>
        <label className="form-label">
          <span className="name-item">Фамилия</span>
          <input
          onChange={this.onChange}
          className="form-input"
           name="surname" 
           type="text"
           value={this.state.surname} />
        </label>
        <label className="form-label">
          <span className="name-item">Отчество</span>
          <input
          onChange={this.onChange}
          className="form-input"
           name="patronymic" 
           type="text"
           value={this.state.patronymic} />
        </label>
        <label className="form-label form-label_img">
          <span className="name-item">Фото</span>
          <img className="image-screen" src={this.state.imageUrl ? this.state.imageUrl : img} alt={this.state.imageName ? this.state.imageName : 'icon'} />
          <input 
          ref={this.fileInput}
          onChange={this.onImageChange}
          className="form-img" name="image" type="file" accept=".png, .jpg, .jpeg"/>
        </label>
        <button className="btn btn-form" type="submit">Сохранить</button>
      </form>
      <div className="respons-wrap">
          <span className="name-item">Response</span>
    <div className="response-answer">{textMessage}</div>
      </div>
      </>
    )
   }
}
export default Form;