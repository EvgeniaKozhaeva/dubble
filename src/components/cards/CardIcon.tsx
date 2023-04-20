import styles from "./Card.module.css"
import cn from 'classnames'

interface CardIconProps {
    image: string;
    isSelected: boolean
    isMatched: boolean | undefined
    setStatus: () => void
}

export const CardIcon = ({ image, isSelected, setStatus, isMatched }: CardIconProps) => {
    return (
        <span className={cn({
            [styles.iconSelected]: isSelected,
            [styles.iconMatched]: isSelected && isMatched,
            [styles.iconNotMatched]: isSelected && isMatched === false,
        })}
              onClick={setStatus} >
            <img className={styles.image} src={image} alt="alt" />
        </span>
    )
}