import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history  = useHistory();
  return <>
  <h1>Inforation</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, consequatur accusamus rem dolorem dicta repudiandae quia molestiae nihil non voluptatum!</p>
  <button className='btn' onClick={() => history.push('/')}>Return to todos</button>
  </>
}