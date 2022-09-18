export interface VideoSentence {
    timeInterval: number[],
    message: string,
    currentlyInSpeach?: boolean
}

export const videoText : VideoSentence [] = [
    { timeInterval: [1, 2],
        message : 'Where is the toy?'},
    { timeInterval: [3, 8],
    message : 'We do not have the toy!'},
    { timeInterval: [9, 12],
        message : 'We need to go and bring it!'},
    { timeInterval: [13, 24],
            message : 'Mom will go and bring it!'},
    { timeInterval: [25, 40],
                message : `Mom is in the water. 
                She will not feel confortable to come out for the toy and than go back and swimm!`},
    { timeInterval: [41, 50],
                    message : `Tati take the picture!`}
]