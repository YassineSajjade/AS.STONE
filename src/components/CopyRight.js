import React from 'react'

function CopyRight() {
  return (
    <div className='copyright' style={{background: '#3d3c3c', width: '100%', color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '11px', height: '40px', lineHeight: '40px', textAlign: 'center'}}>
        <div className='container'>
            <div style={{display: 'inline-block', textTransform: 'uppercase', fontWeight: 'bold'}}>
                ©.Tous droits réservés 2022 | as-stone.ma
            </div>
        </div>
    </div>
  )
}

export default CopyRight