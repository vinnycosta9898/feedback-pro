import { Stabeshiment } from "@prisma/client";

export interface StabelishimentsReposity{
    create(data: Stabeshiment): Promise<Stabeshiment>
}