import React from 'react'
import { useParams } from 'react-router';

const Success = () => {
    const { value } = useParams();
  return (
    <><img src='https://thumbs.dreamstime.com/b/tick-mark-icon-flat-illustration-check-mark-vector-tick-mark-icon-flat-illustration-check-mark-vector-164317151.jpg' className="success-img" alt="logo" />
    <span className='success-txt'>Successfully {value} the student</span>
    </>
  )
}

export default Success;