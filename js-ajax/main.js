const button = document.getElementById("button");
var quote = document.getElementById("quote");
const srcURL = 'https://thatsthespir.it/api';


    var getImg = new XMLHttpRequest();
    getImg.open("GET", srcURL , true);

    getImg.onreadystatechange = function refreshQuote() {
        if(this.readyState <= 3) {
            var output = '<p>Loading...</p>'
        };
        if(this.readyState === 4 && this.status == 200){
            console.log(this.responseText);
            var x = JSON.parse(this.responseText);
            console.log(x);
            var output = "";
                output +=
                '<div class="quoteBox">' +
                '<img src="' +x.photo+ '">' +
                '<p class="quote-text">"' + x.quote + '"</p>' +
                '<p class="quote-author">' + "~  " + x.author + " ( " + x.total_quotes + " quotes ) </p>" +
                '</div>'
            };
            document.getElementById("quote").innerHTML = output;
        }

    getImg.send();

    button.addEventListener("click", () => {refreshQuote()});

    function refreshQuote() {
        getImg.open("GET", srcURL, true);
        getImg.send();
    }
