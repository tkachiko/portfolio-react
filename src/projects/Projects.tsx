import React from 'react';
import styles from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css';
import {Project} from './project/Project';


export const Projects = () => {
  return (
    <div className={styles.projectsBlock}>
      <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
        <h2 className={styles.title}>projects</h2>
        <div className={styles.projects}>
          <Project title={'Project title'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nulla odio possimus quas repudiandae.'}/>
          <Project title={'Project title'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nulla odio possimus quas repudiandae.'}/>
        </div>
      </div>
    </div>
  );
};
