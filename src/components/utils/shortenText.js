const shortenText = (text) => {
    const textLength = text.length
    if (textLength > 40) {
        return `${text.substring(0, 50)}...`
    } else {
        return text
    }
}

export default shortenText