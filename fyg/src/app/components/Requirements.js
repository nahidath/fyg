import styles from '../css/requirements.module.css';


const Requirements = ({ requirements }) => {
    return (
        <div className={styles.requirement}>
            <div className={styles.requirementTitle}>Minimal system requirements</div>
            {requirements == null ? (
                <div className={styles.requirementContentTitle}>No requirements available</div>
            ) : (
                <div className={styles.requirementInfoContent}>
                    <div className={styles.requirementBlocs}>
                        <div className={styles.requirementContentTitle}>OS</div>
                        <div className={styles.requirementContent}>{requirements.os}</div>
                    </div>
                    <div className={styles.requirementBlocs}>
                        <div className={styles.requirementContentTitle}>Processor</div>
                        <div className={styles.requirementContent}>{requirements.processor}</div>
                    </div>
                    <div className={styles.requirementBlocs}>
                        <div className={styles.requirementContentTitle}>Memory</div>
                        <div className={styles.requirementContent}>{requirements.memory}</div>
                    </div>
                    <div className={styles.requirementBlocs}>
                        <div className={styles.requirementContentTitle}>Graphics</div>
                        <div className={styles.requirementContent}>{requirements.graphics}</div>
                    </div>
                    <div className={styles.requirementBlocs}>
                        <div className={styles.requirementContentTitle}>Storage</div>
                        <div className={styles.requirementContent}>{requirements.storage}</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Requirements;