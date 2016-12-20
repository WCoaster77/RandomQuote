function genQuote()
{
    //Generate random category to display
    var subj = ''; //the random quote category
    var min = 1;
    var max = 8;
    var rand = rand = Math.floor(Math.random() * max) + min;
    switch (rand)
    {
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

    $.getJSON("http://quotes.rest/qod.json?category=" + subj, function (data)
    {
        var auth = data.contents.quotes[0].author;
        var quote = data.contents.quotes[0].quote;
        var title = data.contents.quotes[0].title;
        var pic = data.contents.quotes[0].background;

        document.getElementById('front').style.backgroundImage = 'url(' + pic + ')';


        $(".quote").html(quote);
        $(".quote1").html(auth);
        console.log(auth);
    });
}

$(document).ready(function ()
{
    //var title = '';
    //var auth = '';
    //var quote = '';
    //var pic = '';
    genQuote();
    document.getElementById('title').innerHTML = '"' + auth + '"';

    //$("#tweet").on("click", document.getElementById('title').innerHTML = '"' + auth + '"');
    //console.log(auth);
    $("#getQuote").on("click", genQuote);
});


// **** A string to view API object values -- Call it inside getJSON function ****
//Object.getOwnPropertyNames(data.contents.quotes[0]).forEach(function (val, idx, array)
//{
//    ret += (val + ' -> ' + data.contents.quotes[0][val] + '<br>');
//    return ret;
//});


//http://quotes.rest/qod.json
//frome the site https://quotesondesign.com/api-v4-0/ API link http://quotesondesign.com/wp-json/posts or http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=
//http://api.androidhive.info/contacts/
