import {
  GoabButton,
  GoabPageBlock,
  GoabSpacer,
  GoabText,
} from '@abgov/react-components'
import { useNavigate } from 'react-router-dom'
import { CONTENT_WIDTH } from '../constants'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function NotFoundPage() {
  const navigate = useNavigate()
  useDocumentTitle('Page not found')

  return (
    <section className="section reveal">
      <GoabPageBlock width={CONTENT_WIDTH}>
        <GoabSpacer vSpacing="2xl" />
        <GoabText tag="h1" size="heading-l" mt="none" mb="m">
          Page not found
        </GoabText>
        <GoabText tag="p" size="body-l" mt="none" mb="l" maxWidth="60ch">
          This page drifted off course. Head back home and we&apos;ll get you
          pointed at the Moon again.
        </GoabText>
        <GoabButton type="primary" onClick={() => navigate('/')}>
          Back to home
        </GoabButton>
        <GoabSpacer vSpacing="2xl" />
      </GoabPageBlock>
    </section>
  )
}
