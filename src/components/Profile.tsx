import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/johnbrow10.png" alt="Johnatan Dos Santos" />

            <div>
                <strong>Johnatan Dos Santos</strong>

                <p>
                    <img src="icons/level.svg" alt="level do profile" />
                    Level 1
                </p>
            </div>

        </div>

    )
}