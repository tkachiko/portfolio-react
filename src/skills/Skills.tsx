import React from 'react'
import styles from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from './skill/Skill'
import {Title} from '../common/components/title/Title'
import react from '../assets/image/skills/react.svg'
import redux from '../assets/image/skills/redux.svg'
import typescript from '../assets/image/skills/typescript.svg'
import javascript from '../assets/image/skills/javascript.svg'
import storybook from '../assets/image/skills/storybook.svg'
import testing from '../assets/image/skills/testing.svg'
import html from '../assets/image/skills/html.svg'
import css from '../assets/image/skills/css3.svg'
import scss from '../assets/image/skills/scss.svg'
import formik from '../assets/image/skills/formik.svg'
import git from '../assets/image/skills/git.svg'
import material from '../assets/image/skills/material-ui.svg'

const skills = [
  {
    title: 'React',
    url: react,
    description: 'Class and functional components, components\' life-cycle methods, props, hooks, HOC.',
  },
  {
    title: 'Redux',
    url: redux,
    description: 'FLUX-concepted data flow, reducer, dispatch, redux-thunk, redux-toolkit.',
  },
  {
    title: 'TypeScript',
    url: typescript,
    description: 'Types, generics, interface.',
  },
  {
    title: 'JavaScript',
    url: javascript,
    description: 'Classes, functions, working with arrays and objects, Promises, REST Api',
  },
  {
    title: 'Git',
    url: git,
    description: 'Creating new repositories, push- and pull-requests, merge, repos cloning.',
  },
  {
    title: 'Storybook',
    url: storybook,
    description: 'Testing components and modules, decorators.',
  },
  {
    title: 'Unit-testing',
    url: testing,
    description: 'Testing chosen modules and the whole application\'s workability.',
  },
  {
    title: 'FORMIK',
    url: formik,
    description: 'Forms, validations, submitting with server\'s responding.',
  },
  {
    title: 'HTML',
    url: html,
    description: 'Responsive design, flex, links, headers, images etc.',
  },
  {
    title: 'CSS',
    url: css,
    description: 'Common CSS, variables, functions, pseudo-classes, pseudo-elements, media queries.',
  },
  {
    title: 'SASS/SCSS',
    url: scss,
    description: 'Common CSS, variables, mixins, functions, pseudo-classes, pseudo-elements, media queries.',
  },
  {
    title: 'Material UI',
    url: material,
    description: 'Styling app with a component library.',
  },
]

export const Skills = () => {
  const skill = skills.map(s => {
      return <Skill key={s.url}
                    title={s.title}
                    description={s.description}
                    style={{backgroundImage: 'url(' + s.url + ')'}}
      />
    },
  )

  return (
    <div className={styles.skillsBlock}>
      <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
        <Title text={'Skills'} />
        <div className={styles.skills}>
          {skill}
        </div>
      </div>
    </div>
  )
}
