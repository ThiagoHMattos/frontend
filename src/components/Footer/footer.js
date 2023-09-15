import React from 'react';

function Footer() {

const footerTextStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontFamily: 'Montserrat',
    fontSize: '40px',
    color: 'white',
    fontWeight: 'bold'
    
  };
  return (
 <footer style={{ backgroundColor: '#046423', height: '230px' }}>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-12 text-center">
          <p style={footerTextStyle}>Desenvolvido por Thiago Henrique</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;