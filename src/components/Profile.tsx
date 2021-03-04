import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/johnbrow10.png" alt="Johnatan Dos Santos" />

            <div>
                <strong>Johnatan Dos Santos</strong>

                <p>
                    <img src="icons/level.svg" alt="level do profile" />
                    Level {level}
                </p>
            </div>

        </div>

    )
}