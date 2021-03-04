import { createContext, useState, ReactNode } from 'react';

import challenges from '../../challenges.json';


interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number
}

interface ChallengesContextData {
    level: number,
    currentExperience: number,
    challengesCompleted: number,
    levelUp: () => void,
    startNewChallenge: () => void,
    activeChallenges: Challenge;
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


    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        console.log('New challenge')
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenges(challenge)
    }



    return (
        <ChallengesContext.Provider
            value={
                {
                    level,
                    currentExperience,
                    challengesCompleted,
                    levelUp,
                    startNewChallenge,
                    activeChallenges
                }
            }>
            {children}
        </ChallengesContext.Provider>
    )
}