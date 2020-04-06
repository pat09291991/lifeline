export const statusColor = (value) => {
    switch (value) {
        case 'Pending':
            return 'statusPending'
        case 'Failed':
            return 'statusFailed'
        case 'Paid':
            return 'statusPaid'
    }
}

export const statusColorTag = (value) => {
    switch (value) {
        case 'Membership':
            return 'pMembership'
        case 'Services':
            return 'pServices'
        case 'Payments':
            return 'pPayments'
    }
}