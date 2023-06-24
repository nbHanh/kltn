import React from 'react'

function HeaderController({ children }: { children: React.ReactNode }) {
    return (
        <React.Fragment>{children}</React.Fragment>
    )
}

export default HeaderController