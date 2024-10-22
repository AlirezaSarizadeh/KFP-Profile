import React from 'react';
import './404.css'
const NoPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0' , height:'100vh', display : 'flex' , alignItems : 'center' , justifyContent: 'center' , flexDirection :'column' }}>
      <img className='img-404' src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png" style={{ marginTop: '-40px' , margin: 'auto'}} />
      <h1 style={{ fontSize: '36px', color: '#ff6b6b' }}>Oops! We couldn't find that page.</h1>
      <p style={{ fontSize: '18px', color: '#666666' }}>It seems like you've taken a wrong turn.</p>
      <button onClick={()=> history.back()} style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>Return Back</button>
    </div>
  );
};

export default NoPage;