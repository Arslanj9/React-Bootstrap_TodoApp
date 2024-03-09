import styles from './Container.module.css'

const Container = ({ children }) => {
    return (
        <div className={styles.containerDiv}> 
            { children }
        </div>
    )
}

export default Container;