
function genQuote(getAPI){
    //Generate random category to display
    var subj = ''; //the random quote category
    var min = 1;
    var max = 8;
    var rand = Math.floor(Math.random() * max) + min;
    switch (rand){
        case 1:
            subj = 'inspire';
            break;
        case 2:
            subj = 'management';
            break;
        case 3:
            subj = 'sports';
            break;
        case 4:
            subj = 'life';
            break;
        case 5:
            subj = 'funny';
            break;
        case 6:
            subj = 'love';
            break;
        case 7:
            subj = 'art';
            break;
        case 8:
            subj = 'students';
            break;
    }

    $.getJSON("http://quotes.rest/qod.json?category=" + subj, function (data){
        auth = data.contents.quotes[0].author;
        quote = data.contents.quotes[0].quote;
        title = data.contents.quotes[0].title;
        pic = data.contents.quotes[0].background;
        // Create an object to hold info from API call
        var info = {
            auth: auth,
            quote: quote,
            title: title,
            pic: pic
        };
        // This will pass object out of getQuote function
        buildContent(info);
        
    });
}

function buildContent(info) {
    if(info.title){
        document.getElementById('front').style.backgroundImage = 'url(' + pic + ')';
        document.getElementById('title').textContent = title;
        $(".quote").html(quote);
        $(".quote1").html(auth);
        buildTwitter(info);
    } else {
        document.getElementById('title').textContent = 'Sorry Only So Much Inspiration Available.'
    }
}

//function buildTwitter(info) {
//    $("#tweet").on("click", console.log(info.title));
//}

//credit to theysaidso.com
function theysaidso(){
    window.open("https://theysaidso.com");
}

// Initial load of page with quote
$(document).ready(function (){
    genQuote();
    $("#getQuote").on("click", genQuote);
    $("#theysaidso").on("click", theysaidso);
    $("#tweet").on("click", function (info) {
        console.log(info.title);
    });
});


//var auth = '';
//var quote = '';
//var title = '';
//var pic = '';


// **** A string to view API object values -- Call it inside getJSON function ****
//Object.getOwnPropertyNames(data.contents.quotes[0]).forEach(function (val, idx, array)
//{
//    ret += (val + ' -> ' + data.contents.quotes[0][val] + '<br>');
//    return ret;
//});

// ***** Othe quote API's *****
//http://quotes.rest/qod.json
//frome the site https://quotesondesign.com/api-v4-0/ API link http://quotesondesign.com/wp-json/posts or http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=
//http://api.androidhive.info/contacts/
