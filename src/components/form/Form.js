import React,{Component} from 'react';
import img from '../../Vector.svg';
import FetchData from '../service/service';
import './form.css'

class Form extends Component{

  fetchData = new FetchData();

    constructor(props) {
    super(props);
    this.state ={
        imageUrl: null,
        imageName: null,
        imageError: '',
        message:'',
        name:'',
        surname:'',
        patronymic:'',
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
    onDrop = (e) => {
      e.preventDefault();
      const file = [...e.dataTransfer.files];
      if(file[0].type !== "image/jpeg" && file[0].type !== "image/png" && file[0].type !== "image/webp"){
        this.setState(({imageError})=>{
          return{

            imageError: "Допускаются только файлы изображений!"
          }
        })
      } else {
        this.setState({
          image: file[0],
          imageUrl: URL.createObjectURL(file[0]),
          imageName: file[0].name,
          imageError: ''
          });
        
      }
     

    }
    onDragStart = (e) => {
      e.preventDefault();

    }
    onDragLeave = (e) => {
      e.preventDefault();

    }
    onDragOver = (e) => {
      e.preventDefault();

    }

    sendData = (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.set('action', 'send_data');
      formData.set('id', 1);
      formData.set('contacts[name]', this.state.name);
      formData.set('contacts[surname]', this.state.surname);
      formData.set('contacts[patronymic]', this.state.patronymic);
      formData.set('image', this.state.image);

      this.fetchData.postData(formData)
      .then((res) => {
        this.setState(({message}) => {
          return {
            message: res
          }
        })
      })
    }

    showMessage (mes){
      return (
     <>
      <p>{mes.status}</p>
      <p>{mes.msg}</p>
     </>
      )
    }

   render(){
     const textMessage = this.showMessage(this.state.message)
    return(
        <>
        <form onSubmit={this.sendData} >
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
        <label
        className="form-label form-label_img">
          <span className="name-item">Фото</span>
          <div 
          onDragStart={e => this.onDragStart(e)}
          onDragLeave={e => this.onDragLeave(e)}
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e)}
          className="image-wrapper">
          <img
          className="image-screen" 
          src={this.state.imageUrl ? this.state.imageUrl : img} 
          alt={this.state.imageName ? this.state.imageName : 'icon'} />
          
          </div>
         
          <input 
          ref={this.fileInput}
          onChange={this.onImageChange}
          className="form-img" name="image" type="file" accept=".png, .jpg, .jpeg"/>
        </label>
        <span className="image-error">{this.state.imageError}</span>
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