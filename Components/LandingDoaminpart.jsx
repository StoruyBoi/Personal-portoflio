import React from 'react'
import LandingRinghtpart from './LandingRinghtpart'
import LandingCenterpart from './LandingCenterpart'
import LandingLeftpart from './LandingLeftpart'
import "../src/App.css"
export default function LandingDoaminpart() {
  return (
<>
<div  className='domain'>
<LandingLeftpart/>


<LandingRinghtpart/>
<LandingCenterpart/>
</div>

</>



  )
}
