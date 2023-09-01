import alex from '../../assets/alexey.jpg'
import classes from './main.module.css'

const Main = () => {
 
  return (
    <section id="about" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Hi, I am Alexey Moshnyakov</h2>
          <h4 className={classes.subtitle}>Front-end Developer</h4>
          <p className={classes.desc}>
            I am an experienced frontend developer with deep knowledge in the field of web technologies. My goal is to create interactive and efficient web applications while providing a great user experience. I specialize in using modern frontend technologies and frameworks such as React, Redux and TypeScript.
          </p>
        </div>
        <div className={classes.right}>
          <img src={alex} />
        </div>
      </div>
    </section>
  )
}

export default Main