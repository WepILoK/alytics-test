export interface InItem {
    key: string
    icon: string
    name: string
    group?: string
    status?: boolean
    traffic: {
        screenings: number
        clicks: number
        sessions: number
        ctr: number
        clickCost: number
        expenses: number
    },
    sales: {
        quantity: number
        cpa: number
        "proceeds": number
    },
    target: {
        quantity: number
        cpa: number
        cr: number
    },
    sources?: InItem[]
}

export interface IState {
    tableItems: InItem[]
}