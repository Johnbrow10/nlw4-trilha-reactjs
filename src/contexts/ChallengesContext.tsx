import { createContext, useState, ReactNode } from 'react';

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

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        console.log('New challenge')
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenges(challenge)
    }

    function resetChallenge() {
        setActiveChallenges(null);
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
                    resetChallenge
                }
            }>
            {children}
        </ChallengesContext.Provider>
    )
}