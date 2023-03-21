import './styles/main.scss';
import { Link } from './components/Link/Link'
import { Button } from './components/Button/Button';
import { Icon } from './components/Icon/Icon';
import {ICONS} from './constants/icons';
// import TextField from './components/Text-field/Text-field';


function App() {
  const options: any = {
    //enableHighAccuracy: false,
    //timeout: 5000,
    //maximumAge: 0
  };
  navigator.geolocation.watchPosition(successCallback, errorCallback, options);
  
function successCallback(position: any) {
	const { accuracy, latitude, longitude, altitude, heading, speed } = position.coords;
    // Show a map centered at latitude / longitude.
    console.log(position.coords);
    
}
function errorCallback(error: any) {
	
}


  return (
    <div className="App">
      {/* <form className="form">
        <TextField id='input' label='Email' type='email' 
          variant='standard' 
          required={true} 
          helperText='awdawda awdawd awdawd awd awdawawdaw awdawd'/>
        <TextField id='input1' label='Password' type='password' 
          variant='outline' 
          required={true} 
          helperText=''/>
        <TextField id='input2' label='Edad' type='number' 
          variant='standard' 
          helperText='awdawda awdawd err'/>
        <TextField id='input3' label='Direccion'  
          variant='outline' 
          disabled={true}
          helperText=''/>
      </form>
      <Button mode='secondary' size='large'>
        Paco
        <Icon size={48}  icon={'cart_shopping'} color="black"></Icon>
      </Button>
      <Link url='paco'>PEpo</Link>
      <Icon size={48}  icon={ICONS.instagram} color="green"></Icon>
      <h1>Ejemplo de Carousel con datos reales</h1>
      <Carousel /> */}
    </div>
  )
}

export default App
