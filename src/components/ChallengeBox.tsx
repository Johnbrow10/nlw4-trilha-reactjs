import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

function ChallengeBox() {

    const { activeChallenges, resetChallenge, completeChallenge } = useContext(ChallengesContext);

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenges ? (
                <div className={styles.challengeActive} >

                    <header>  Ganhe {activeChallenges.amount} xp </header>

                    <main>
                        <img src={`icons/${activeChallenges.type}.svg`} alt="Novo Desafio" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenges.description}</p>
                    </main>

                    <footer>

                        <button
                            className={styles.challengeFailedButton}
                            type="button"
                            onClick={resetChallenge}

                        >Falhei</button>

                        <button
                            className={styles.challengeSucceededButton}
                            type="button"
                            onClick={completeChallenge}

                        >Completei</button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                    Avance de Level completando desafios.
                </p>
                    </div>
                )
            }

        </div >
    )
}

export { ChallengeBox };
