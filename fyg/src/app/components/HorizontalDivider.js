import styles from '../css/horizontaldivider.module.css';

const HorizontalDivider = ({marginTop=10, marginLeft=0, marginRight=0, marginBottom=10}) => {
    return (
        <div className={styles.dividerH} style={{marginTop:marginTop, marginLeft:marginLeft, marginRight:marginRight, marginBottom:marginBottom}}></div>
    )
}

export default HorizontalDivider;