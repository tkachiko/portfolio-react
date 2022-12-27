import React from 'react'
import styles from './Projects.module.scss'
import {Project} from './project/Project'
import {Title} from '../common/components/title/Title'
import socialImage from '../assets/image/projects/social.jpeg'
import todoImage from '../assets/image/projects/todo.jpeg'
import {Fade} from 'react-awesome-reveal'

export const Projects = () => {
  const social = {
    backgroundImage: `url(${socialImage})`,
  }
  const todo = {
    backgroundImage: `url(${todoImage})`,
  }
  const projects = [
    {
      title: 'Todolist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nulla odio possimus quas repudiandae.',
      style: todo,
    },
    {
      title: 'Social network',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nulla odio possimus quas repudiandae.',
      style: social,
    },
  ]

  return (
    <div id={'projects'} className={styles.projectsBlock}>
        <Fade>
      <div className={styles.container}>
          <Title text={'Projects'} />
          <div className={styles.projects}>
            {projects.map(p => <Project style={p.style} title={p.title} description={p.description} key={p.title} />)}
          </div>
      </div>
        </Fade>
    </div>
  )
}
