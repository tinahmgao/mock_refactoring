export type Play = {
    name: string
    type: string
}

export type Plays = {
    [key: string]: Play
}

export type Invoice = {
    customer: string
    performances: Performance[]
}

export type Performance = {
    playID: string
    audience: number
}
