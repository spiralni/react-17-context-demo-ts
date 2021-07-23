import { createContext } from "react";

export type TIssue = {
    number: number,
    title: string,
    url: string,
    state: string
}

interface IIssueContext {
    issues: TIssue[],
    url: string
}

export const IssueContext = createContext<IIssueContext>({
    issues: [],
    url: ''
})