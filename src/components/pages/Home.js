import '../../App.css';
import React from 'react';
import TopSection from '../TopSection'
import Contents from '../Contents'
import Footer from '../Footer'

function Home(props){
  return(
    // <Container>
    //   <h1>Welcome to Doc's Spots</h1>
    //   <Container>
    //     <p align="center">This website is under construction! Check in later for updates!</p>
    //   </Container>
    // </Container>
    <>
        <TopSection/>
        <Contents/>
        </>

  );
}
export default Home;