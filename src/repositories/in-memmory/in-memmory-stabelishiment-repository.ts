import { StabelishimentProps, StabelishimentsReposity } from "../stabelishiment-repository";

export class InMemmoryStabelishimentRepository implements StabelishimentsReposity{
    public items: StabelishimentProps[] = []

    async create(data: StabelishimentProps ){
        const stabelishiment = {
            name: data.name,
            cnpj: data.cnpj,
        }

        this.items.push(stabelishiment)

        return stabelishiment
    }
}