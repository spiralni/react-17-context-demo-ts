import axios from "axios"
import { FC, useCallback, useEffect, useState } from "react"
import { IssueContext, TIssue } from "./IssueContext"

interface IProps {
    url: string
}

const IssueProvider: FC<IProps> = ({ children, url }) => {
    const [issues, setIssues] = useState<TIssue[]>([])

    const fetchIssues = useCallback(async () => {
        const response = await axios.get(url)
        
        if (response) {
            setIssues(response.data)
        }
    }, [url])

    useEffect(() => {
        fetchIssues()
    }, [fetchIssues])

    const context = {
        issues,
        url
    }

    return <IssueContext.Provider value={context}>
        {children}
    </IssueContext.Provider>
} 

export default IssueProvider