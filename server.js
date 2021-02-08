let express = require ('express')
let path = require ('path')
let app = express ()

app.use ("/Images",express.static(__dirname + "/Images"))

app.get('/Adventure', function(request,response){
    response.sendFile(path.join(__dirname, 'Adventure.html'));

}
)

app.get('/Approach', function(request,response){
    response.sendFile(path.join(__dirname, 'Approach.html'));

}
)

app.get('/Run', function(request,response){
    response.sendFile(path.join(__dirname, 'Run.html'));

 
}
);
app.listen (8080)