import React from 'react'

function Reason() {
    return (
        <div className='container-fluid'>
            <div>
                <div style={{ display: 'grid', justifyContent: 'center', gridGap: '20px', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', backgroundColor: '#fdf3f6', paddingLeft: '200px', paddingRight: '200px', paddingTop: '50px', paddingBottom: '35px' }}>
                    <div class='one'>
                        <div class="bar" style={{ height: '4px', width: '40px', background: '#d11243', borderRadius: '2px' }}></div>

                        <div style={{ fontFamily: 'Verdana', fontSize: '14px', fontWeight: '500', paddingTop: '10px' }}>
                            <p>We will sell only the meat that we would eat ourselves.</p>
                        </div>
                        <div style={{ fontFamily: 'Verdana', fontSize: '10px', paddingTop: '10px' }}>
                            <p>At Licious, we’re big meat-lovers. And by big, we mean huge. So when it comes to the meat we put on your plate, we’re extremely picky. Every single product is handpicked by a team with years of experience.</p>
                        </div>
                    </div>

                    <div class='two'>
                        <div class="bar" style={{ height: '4px', width: '40px', background: '#d11243', borderRadius: '2px' }}></div>

                        <div style={{ fontFamily: 'Verdana', fontSize: '14px', fontWeight: '500', paddingTop: '10px' }}>
                            <p>If it’s not fresh, we won’t sell it.</p>
                        </div>
                        <div style={{ fontFamily: 'Verdana', fontSize: '10px', paddingTop: '10px' }}>
                            <p>For meat to stay fresh and retain its natural juices, it needs to be stored at a temperature between 0° and 4°C. We maintain this temperature from the time we procure the product to cleaning, cutting and storing it, until it leaves for delivery. And even when it’s out for delivery, we keep it chilled right up to your doorstep.Did we mention that we’re obsessed?</p>
                        </div>
                    </div>

                    <div class='three'>
                        <div class="bar" style={{ height: '4px', width: '40px', background: '#d11243', borderRadius: '2px' }}></div>

                        <div style={{ fontFamily: 'Verdana', fontSize: '14px', fontWeight: '500', paddingTop: '10px' }}>
                            <p>We will charge only for what you buy.</p>
                        </div>
                        <div style={{ fontFamily: 'Verdana', fontSize: '10px', paddingTop: '10px' }}>
                            <p>Doesn’t everyone do this? Not really. Most other places first weigh the meat, then cut up the pieces, and throw out the parts which aren’t fit to eat, such as offal, gizzard, wingtips, etc. But you still pay based on the original weight even though what you finally get is 10% to 30% less</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reason
