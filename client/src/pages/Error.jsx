import React from 'react'

const Error = ({ error, restErrorBoundary }) => {
    return <>
        {error.message}
        <button onClick={restErrorBoundary}>Retry</button>
    </>
}

export default Error