# LoveAPI
I realized I need to give my girlfriend more attention. Which could be automated.   
However, I couldn't find an API to return cute phrases or flirty messages to send her. So I made one.  


As of now there are two endpoint:

https://us-central1-loveapi.cloudfunctions.net/app/lovequotes/
or
https://us-central1-loveapi.cloudfunctions.net/app/flirtyquotes/

You can append simple crud actions to them such as: 
app/lovequotes/create
your body will need to contain Id and quote
I'll be turning this off soon because I've only now thought about what happends if duplicate Ids are created.

app/lovequotes/read
Returns all quotes under Love quotes section.

app/lovequotes/read/quote_id
returns quote and id of just the matching quote id.


Keep inmind these below are often +18
(kids shouldn't flirt)
app/flirtyquotes/create
your body will need to contain Id and quote
I'll be turning this off soon because I've only now thought about what happends if duplicate Ids are created.

app/flirtyquotes/read
Returns all quotes under flirty quotes section.

app/flirtyquotes/read/quote_id
returns quote and id of just the matching quote id.
