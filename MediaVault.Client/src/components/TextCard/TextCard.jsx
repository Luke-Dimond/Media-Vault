import styles from './TextCard.module.css'

function TextCard({text, className}) {
    return (
        <p className={`${styles.textCardStyle} ${className}`}> 
            {text}
        </p>
    )
}

export default TextCard