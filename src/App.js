
import React from 'react';
import { Header } from './Components/Header';
import {ComponentOne} from './Components/componentOne';
import { IconComp} from './Components/iconComponent';
import { ReusedComp } from './Components/ReusedComp';
import {TwoComp} from "./Components/TwoComp";
import { Cards } from './Components/cardsComp';
import { Brand } from './Components/Brand';
import { NumbComp } from './Components/NumbComp';
import {FormComp} from './Components/FormComp';
import { Footer } from './Components/Footer';
import "./App.css"

function App () {
    return (
      <div className="App">
        <Header/>
        <ComponentOne/>
        <IconComp className = "hide"/>
        <ReusedComp  className = "hide" title='INTRODUCTION' subTitle='TO HYDRA VR' paragraph='Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae. ' 
        />
        
        <TwoComp  className = "hide"/>

        <ReusedComp  className = "hide" title='WHY BUILD' subTitle='WITH HYDRA' paragraph='Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.'
        />

        <Cards  className = "hide"/>
        <Brand  className = "hide"/>

        <ReusedComp  className = "hide" title='HOW WE BUILD' subTitle='WITH HYDRA VR?' paragraph='Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.'/>

          <div className = "flex ">
              <NumbComp num='01' text='3D Conception & Design'/>
              <NumbComp num='02' text='Interaction Design'/>
              <NumbComp num='03' text='VR World User Testing'/>
              <NumbComp num='04' text='Hydra VR Deploy'/>
              <div className='shapeTwo-cont '>
                  <img src='./images/Vector.svg' alt= "" />
              </div>
          </div >

          <FormComp  className = "hide" />

          <Footer/>
          
      </div>
    )
}

export default App;

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if(entry.isIntersecting){
//       entry.target.classList.add("show");
//     }else{
//       entry.target.classList.remove("show");
//     }
//   })
// })

// let hiddenElements = document.querySelectorAll("hide");

// hiddenElements.forEach((el) => observer.observe(el));