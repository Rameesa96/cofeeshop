import logo from './logo.svg';
import './App.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import cofee from '../src/assets/bg.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect,useState } from 'react';
import story from './assets/story.png'
import image from './assets/pngwing 2.png'
import axios from 'axios'
import Swiper from './Components/Swiper';
import Swipers from './Components/Swiper';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from './Components/Footer';
function App() {
  const[type,setType]=useState('hot')
  const [hot,setHot]=useState('')
  const [cold,setCold]=useState('')
  useEffect(()=>{
axios.get('https://api.sampleapis.com/coffee/hot').then(response=>{
  setHot(response.data)
})
  })
  useEffect(()=>{
    axios.get('https://api.sampleapis.com/coffee/iced').then(response=>{
      setCold(response.data)
    })
      })
  return (
    <div className="App">
      <div className="firstsection">
      <header className="App-header">
      <div className="logo">Logo</div>
      <div className="links">
        <a href="#">home</a>
        <a href="#story">about</a>
        <a href="#contact">contact</a>
      </div>
      <div className='right'>
        <ShoppingCartIcon sx={{color:'white'}}/>
      </div>
      </header>
      <div className='firstsectioncontent'>
        <div>
         
        </div>
        <div className='heading'>
          <h1 className='head'>We'd  <FavoriteIcon sx={{color:'white',fontSize:'55px'}}/>  <br></br>to make you <strong className='coffee'>Coffee</strong></h1>
       <p className='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       <button className='button'>Buy Now <ArrowForwardIcon sx={{marginLeft:"20px",color:"black"}}/></button>
        </div>
        </div>
      </div>
     


     {/* second section */}

     <div className='secondsection' id="menu">
     <h1 className='secondhead'>Our Menu</h1>
     <p className='secondpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua elabefug</p>
     <div className='btndiv'>
      <button className='btn' onClick={()=>{
        setType('hot')
      }}>Hot Coffee</button>
      <button className='btn' onClick={()=>{setType('cold')}}>Cold Coffee</button>
      <button className='btn' onClick={()=>{setType('Desert')}}>Deserts</button>
      <button className='btn' onClick={()=>{setType('Deserts')}}>Deserts</button>
     </div>
     {type==='hot'?<div className='cards'>
     {Array.from(hot).map((item)=>(
      
      <Card className='card'>
       <div className='imgdiv'>
    <img src={item.image} className="imgsec" alt="" />
  </div>
    <CardActionArea>
      
      <CardContent>
        
        <Typography gutterBottom variant="h5" sx={{color:'#E07335'}} component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{color:'#E07335' ,marginTop:"10px"}} color="text.secondary">
         {item.description}
        </Typography>
        <Typography sx={{color:'#E07335',marginTop:"10px"}} variant="h5"  color="text.secondary">
         $30        </Typography>
        <Typography variant="body2" sx={{color:'#E07335' ,marginTop:"10px"}} color="text.secondary">
         <strong>Ingredients:</strong>{item.ingredients}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
     ))}
   
     </div>:type==='cold'?<div className='cards'>
     {Array.from(cold).map((item)=>(
      <Card className='card'>
      <div className='imgdiv'>
   <img src={item.image} className="imgsec" alt="" />
 </div>
   <CardActionArea>
     
     <CardContent>
       
       <Typography gutterBottom variant="h5" sx={{color:'#E07335'}} component="div">
         {item.title}
       </Typography>
       <Typography variant="body2" sx={{color:'#E07335' ,marginTop:"10px"}} color="text.secondary">
        {item.description}
       </Typography>
       <Typography sx={{color:'#E07335',marginTop:"10px"}} variant="h5"  color="text.secondary">
        $30        </Typography>
       <Typography variant="body2" sx={{color:'#E07335' ,marginTop:"10px"}} color="text.secondary">
        <strong>Ingredients:</strong>{item.ingredients}
       </Typography>
     </CardContent>
   </CardActionArea>
 </Card>
     ))}
   
     </div>:type==='Desert'?<div className='cards'>
     {Array.from(hot).map((item)=>(
      <Card className='card'>
      <div className='imgdiv'>
   <img src={item.image} className="imgsec" alt="" />
 </div>
   <CardActionArea>
     
     <CardContent>
       
       <Typography gutterBottom variant="h5" sx={{color:'#E07335'}} component="div">
         {item.title}
       </Typography>
       <Typography variant="body2" sx={{color:'#E07335' ,marginTop:"10px"}} color="text.secondary">
        {item.description}
       </Typography>
       <Typography sx={{color:'#E07335',marginTop:"10px"}} variant="h5"  color="text.secondary">
        $30        </Typography>
       <Typography variant="body2" sx={{color:'#E07335' ,marginTop:"10px"}} color="text.secondary">
        <strong>Ingredients:</strong>{item.ingredients}
       </Typography>
     </CardContent>
   </CardActionArea>
 </Card>
     ))}
   
     </div>:type=='Deserts'?<div className='cards'>
     {Array.from(cold).map((item)=>(
       <Card className='card'>
       <div className='imgdiv'>
    <img src={item.image} className="imgsec" alt="" />
  </div>
    <CardActionArea>
      
      <CardContent>
        
        <Typography gutterBottom variant="h5" sx={{color:'#E07335'}} component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{color:'#E07335' ,marginTop:"10px"}} color="text.secondary">
         {item.description}
        </Typography>
        <Typography sx={{color:'#E07335',marginTop:"10px"}} variant="h5"  color="text.secondary">
         $30        </Typography>
        <Typography variant="body2" sx={{color:'#E07335' ,marginTop:"10px"}} color="text.secondary">
         <strong>Ingredients:</strong>{item.ingredients}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
     ))}
   </div>:<></>}
     </div>


     {/* third section */}
     <div className='thirdsection' id="story">
      <div className='border'>
        <div className='box'>
      <img src={story} className='imgthird' alt="" />
      </div>
      </div>
      <div className='story'>
     <h1 className='thirdhead'>This is Our Story</h1>
     <p className='thirdpara'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      </p>
      <button className='btnthird'>Read More<ArrowForwardIcon sx={{marginLeft:"20px",color:"#E07335"}}/></button>

      </div>
     </div>

{/* fourthsection */}


     <div className='fourthsection'>
      <h1 className='fourhead'>Customer Review</h1>
      <p className='fourpara'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <Swipers/>
     </div>
     <div  className="cta" id="contact">

    <div className='hireme' >
<h1 className='hirerami'>Get In Touch</h1>
<p  className='getpara'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  <p className='ctahead'>+919847654595</p>
 
  <button className='buttonhirerami'>Contact us</button></div>

</div>
     <Footer/>
    </div>
  );
}

export default App;
