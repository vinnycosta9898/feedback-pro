export interface StabelishimentProps{
    name: string
    cnpj: string
}

export interface StabelishimentsReposity{
    create(data: StabelishimentProps): Promise<StabelishimentProps>
}