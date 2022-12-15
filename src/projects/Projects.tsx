import React from 'react';
import styles from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import socialImage from './../assets/image/social.jpeg'
import todoImage from './../assets/image/todo.jpeg'

export const Projects = () => {
  const social = {
    backgroundImage: `url(${socialImage})`
  };
  const todo = {
    backgroundImage: `url(${todoImage})`
  };

  return (
    <div className={styles.projectsBlock}>
      <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
        <Title text={'Projects'} />
        <div className={styles.projects}>
          <Project style={social}
                   title={'Social network'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nulla odio possimus quas repudiandae.'}/>
          <Project style={todo}
                   title={'Todolist'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nulla odio possimus quas repudiandae.'}/>
        </div>
      </div>
    </div>
  );
};
