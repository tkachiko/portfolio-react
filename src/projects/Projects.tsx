import React from 'react'
import styles from './Projects.module.scss'
import {Project} from './project/Project'
import {Title} from '../common/components/title/Title'
import socialImage from '../assets/image/projects/social.jpeg'
import todoImage from '../assets/image/projects/todo.jpeg'
import cardsImage from '../assets/image/projects/cards.jpeg'
import {Fade} from 'react-awesome-reveal'

export const Projects = () => {
  const social = {
    backgroundImage: `url(${socialImage})`,
  }
  const todo = {
    backgroundImage: `url(${todoImage})`,
  }
  const cards = {
    backgroundImage: `url(${cardsImage})`,
  }
  const projects = [
    {
      title: 'Learning cards',
      description: 'Stack: ReactJS, TypeScript, Redux, Redux Toolkit, Redux-Thunk, React-Router-Dom, Axios, Formik,' +
        ' Material' +
        ' UI; Team development; Bug fixing, refactoring, deploying.',
      style: cards,
      link: 'https://github.com/tkachiko/',
    },
    {
      title: 'Social network',
      description: 'Stack: React, Redux, React-Redux, Rest API, Axios, React-router-dom,\n' +
        'React Hook Form, Redux Thunk, React Hooks, Unit tests, Ant Design.',
      style: social,
      link: 'https://github.com/tkachiko/social-network',
    },
    {
      title: 'Todolist',
      description: 'Stack: React, Redux, React-Redux, Redux Toolkit, Rest API, Axios, React-router-dom,\n' +
        'Formik, Redux Thunk, React Hooks, Storybook, Unit tests, Material UI.',
      style: todo,
      link: 'https://github.com/tkachiko/todolist',
    },
  ]

  return (
    <div id={'projects'} className={styles.projectsBlock}>
      <Fade>
        <div className={styles.container}>
          <Title text={'Projects'} />
          <div className={styles.projects}>
            {projects.map(p => <Project style={p.style}
                                        title={p.title}
                                        description={p.description}
                                        key={p.title}
                                        link={p.link} />)}
          </div>
        </div>
      </Fade>
    </div>
  )
}
