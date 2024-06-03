import React from 'react'
import One from '../Images/QAImages/1.png';
import Two from '../Images/QAImages/2.png';
import Three from '../Images/QAImages/3.png';
import Four from '../Images/QAImages/4.png';
import Five from '../Images/QAImages/5.png';
import Six from '../Images/QAImages/6.png';
import Certificate from '../Images/QAImages/Certificate.png'
function Question() {
    return (
        <div className="container" style={{ marginTop: '40px' }} >
            <div class="container">
                <h1 style={{ fontFamily: 'Verdana', fontSize: '20px', fontWeight: 'bold', paddingLeft: '15px' }}>All your Questions, answered!</h1>
            </div>

            <div style={{overflowX: 'auto', whiteSpace: 'nowrap', padding: '10px', display: 'flex'}}>
                <div style = {{padding: '10px', width: '230px', height: '270px'}} >
                    <img src={One}   style = {{width: '210px', height: '270px', borderRadius: '15px'}} />
                </div>
                <div style = {{padding: '10px', width: '230px', height: '270px'}}>
                    <img src={Two} style = {{width: '210px', height: '270px',  borderRadius: '15px'}}/>
                </div>
                <div style = {{padding: '10px', width: '230px', height: '270px'}}>
                    <img src={Three} style = {{width: '210px', height: '270px', borderRadius: '15px'}} />
                </div>
                <div style = {{padding: '10px', width: '230px', height: '270px'}}>
                    <img src={Four} style = {{width: '210px', height: '270px',  borderRadius: '15px'}} />
                </div>
                <div style = {{padding: '10px', width: '230px', height: '270px'}}>
                    <img src={Five} style = {{width: '210px', height: '270px',  borderRadius: '15px'}} />
                </div>
                <div style = {{padding: '10px', width: '230px', height: '270px'}}>
                    <img src={Six} style = {{width: '210px', height: '270px',  borderRadius: '10px'}} />
                </div>
            </div>

            <div class = "container">
                <div style={{marginTop: '40px'}}>
                  <img src={Certificate} alt = "certificate" />
                </div>
                
            </div>

        </div>
    )
}

export default Question
