import React from 'react';
import styles from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import {Skill} from './skill/Skill';

export const Skills = () => {
  return (
    <div className={styles.skillsBlock}>
      <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
        <h2 className={styles.title}>skills</h2>
        <div className={styles.skills}>
          <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nulla odio possimus quas repudiandae.'}/>
          <Skill title={'Redux'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nulla odio possimus quas repudiandae.'}/>
          <Skill title={'TypeScript'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nulla odio possimus quas repudiandae.'}/>
        </div>
      </div>
    </div>
  );
};
