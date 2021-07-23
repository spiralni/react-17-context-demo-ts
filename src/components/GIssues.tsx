import axios from "axios"
import { FC, useContext, useEffect, useState } from "react"
import { IssueContext } from "../contexts/IssueContext"

type TIssue = {
    number: number,
    title: string,
    state: string
}

const GIssues: FC = () => {
    const { issues, url } = useContext(IssueContext)

    return <>
        <h1>ContentPI Issues Using Context</h1>

        {issues.map((issue: TIssue) => {
            return <p key={issue.number}>
                <strong>
                    #{issue.number}
                    &nbsp;
                    <a href ={`https://github.com/ContentPI/ContentPI/issues/${issue.number}`} target="_blank">{issue.title}</a>
                    &nbsp;
                    {issue.state}
                </strong>
            </p>
        })}
    </>
}

export default GIssues