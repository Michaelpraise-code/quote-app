async function getQuote() {
    const apiUrl = "http://api.quotable.io/random";
    try{
        const response = await axios.get(apiUrl)
        const data = response.data;

        document.getElementById("quote").innerHTML = data.content
        document.getElementById("author").innerHTML = data.author
    }catch(error){
        console.log(error);
    }
}

function shareOnTwitter() {
    const quoteText = document.getElementById("quote").innerText;
    const authorText = document.getElementById("author").innerText;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText + " " + authorText)}`;
    window.open(tweetUrl, "_blank");
}
getQuote();