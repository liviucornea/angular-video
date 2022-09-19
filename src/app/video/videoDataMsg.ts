export interface VideoSentence {
    timeInterval: number[],
    message: string,
    currentlyInSpeach?: boolean
}

export const videoText : VideoSentence [] = [
    { timeInterval: [1, 2],
        message : 'Are you going to bring the ball?'},
    { timeInterval: [3, 8],
    message : `Yes, I will go to bring the ball, 
    or mom will go to bring it because now I am filming you! Ok?`},
    { timeInterval: [11, 15],
        message : 'You can play now. Let go and ask mom to go and bring the ball'},
    { timeInterval: [17, 19],
            message : 'Mom will go and bring it!'},
    { timeInterval: [24, 28],
                message : `Mom is in the water, is swimming now. 
                She will not feel confortable to come out for the toy and than go back and swimm!`},
    { timeInterval: [30, 32],
        message : `What?`
    }  ,          
    { timeInterval: [32, 37],
        message : `Mom is in the water, is swimming now. 
        She will not feel confortable to come out for the toy and than go back and swimm!`},

    { timeInterval: [47, 50],
                    message : `Tati take the picture!`}
]