export function formatDate(date) {
    const res = new Date(date).toLocaleDateString()
    return res
}

export default formatDate