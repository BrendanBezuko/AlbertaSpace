import { useEffect } from 'react'
import { ORG_NAME } from '../constants'

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${ORG_NAME}` : `${ORG_NAME} — Moon by 2030 (satire)`
  }, [title])
}
