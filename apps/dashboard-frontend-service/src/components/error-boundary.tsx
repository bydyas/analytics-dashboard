import React from 'react'
import ErrorContent from './error-content'

type ErrorBoundaryProps = {
  children: React.ReactNode
  fallback?: React.ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Error caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? <ErrorContent message={this.state.error?.message} />
      )
    }

    return this.props.children
  }
}
