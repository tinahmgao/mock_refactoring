export type TPlay = {
    name: string
    type: string
}

export type TPlays = {
    [key: string]: TPlay
}

export type TInvoice = {
    customer: string
    performances: TPerformance[]
}

export type TPerformance = {
    playID: string
    audience: number
}
