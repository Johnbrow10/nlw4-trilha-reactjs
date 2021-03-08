import styles from '../styles/components/LevelUpModal.module.css';


export function LevelUpModal() {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header> 2 </header>

                <strong>Parabéns</strong>
                <p>Você Alcançou um novo Nivel.</p>

                <button type="button">
                    <img src="/icons/close.svg" alt="Fechar Modal" />
                </button>

            </div>

        </div>
    )
}