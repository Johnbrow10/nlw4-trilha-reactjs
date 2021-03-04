import styles from '../styles/components/ChallengeBox.module.css';

function ChallengeBox() {


    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ? (
                <div className={styles.challengeActive} >

                    <header>  Ganhe 400xp </header>

                    <main>
                        <img src="icons/body.svg" alt="Novo Desafio" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma Caminhada de 3 minutos</p>
                    </main>

                    <footer>

                        <button
                            className={styles.challengeFailedButton}
                            type="button"

                        >Falhei</button>

                        <button
                            className={styles.challengeSucceededButton}
                            type="button"

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
