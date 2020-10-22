import React,{Component} from 'react';
import ColorPicker from 'rc-color-picker';
 
import 'rc-color-picker/assets/index.css';
import './palette.css';

class Palette extends Component {
 
    constructor(props) {
      super(props)
      this.state = {
        palette: [],
      }
    }

  componentDidMount() {
    const myPalette = JSON.parse(localStorage.getItem('colors'));

    this.setState(({palette})=>{
      return {
        palette: myPalette
      }
    })
  }

  generateKey = () =>{
      const key = 'react' + Math.floor(new Date());
      return key
  }

   
  onCreateColor = () => {
    const newcolor = {
        color: '#44abe2',
        key: this.generateKey(),
    }
    this.setState(({palette}) => {
        const newArr = [...palette, newcolor];
        localStorage.setItem('colors', JSON.stringify(newArr));
        return {
          palette: newArr
        }
    })
  }



  onDeleteColor = (id) => {
    this.setState(({palette})=>{
      const newPalette = palette.filter(item => item.key !== id);
      localStorage.setItem('colors', JSON.stringify(newPalette));
      return {
        palette: newPalette
      }
    })
  }

  onChangeColor = (key, colors) => {
    let newColor = colors.color;
    this.setState(({palette})=>{
      const newPalette = palette.map(item => {
        if (item.key === key) {
          item.color = newColor
        }
        return item
      });

      return {
        palette: newPalette
      }
    })
  }
 
    render() {
      const colors = this.state.palette.map((item) => {
        return (
          <ColorPicker
          onChange={(colors) => {
            this.onChangeColor(item.key, colors)}}
          color={item.color}
          key={item.key}
        >
          <div  className="color-cell react-custom-trigger">
          <span
          
          onClick={(e) => {e.stopPropagation();
            this.onDeleteColor(item.key)}}
          className="close-color"></span>  
          </div>
           
        </ColorPicker>
          
        )
      })

      return (
        <>
        <div className="palette-wrap">
          {colors}
          </div>
        
        
        <button onClick={this.onCreateColor} className='btn btn-form ' type='button'>Добавить цвет</button>
       
        </>

      )
    }
   
  }
export default Palette;