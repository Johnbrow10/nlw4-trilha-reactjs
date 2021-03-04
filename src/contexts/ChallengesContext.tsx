import { createContext, useState, ReactNode, useEffect } from 'react';

import challenges from '../../challenges.json';


interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    experienceToNextLevel: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    activeChallenges: Challenge;
    resetChallenge: () => void;
    completeChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenges, setActiveChallenges] = useState(null)

    // calculo para adquirir experiencia ao completar ou falhar no desafio
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {

        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenges(challenge);

        new Audio('/notification.mp3').play()

        if (Notification.permission === 'granted') {
            new Notification('Novo desafio ^-^', {
                body: `Valendo ${challenge.amount} xp!`,
            })
        }

    }

    function resetChallenge() {
        setActiveChallenges(null);
    }


    function completeChallenge() {
        // Para verificar se nao desafios completados para nao cair nesse if
        if (!completeChallenge) {
            return;
        }

        // desafios completados incrementa o valor de xp
        const { amount } = activeChallenges;

        // variavel que recebe a experiencia que o desafio dá + os desafios ja feito
        let finalExperience = currentExperience + amount;

        //  if verifica se a experiencia final for maior ou igual a experiencia que vai receber do desafio
        if (finalExperience >= experienceToNextLevel) {
            // entao ele faz uma subtração do xp que sobrou por passar de nivel
            finalExperience -= experienceToNextLevel;
            levelUp();
        }

        // altera toda vez que completar um desafio assim ira somando a experiencia final do desafio com a que ja tem
        setCurrentExperience(finalExperience);
        // entao seta para nulos os desafios que tem no momento
        setActiveChallenges(null);
        // e assim faz os desafios ja completados ser adicionados a cada vez que termina um desafio.
        setChallengesCompleted(challengesCompleted + 1)
    }



    return (
        <ChallengesContext.Provider
            value={
                {
                    level,
                    currentExperience,
                    challengesCompleted,
                    experienceToNextLevel,
                    levelUp,
                    startNewChallenge,
                    activeChallenges,
                    resetChallenge,
                    completeChallenge
                }
            }>
            {children}
        </ChallengesContext.Provider>
    )
}