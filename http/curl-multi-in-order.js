/**
 * Created by Rockie Yang on 07/05/16.
 */

var http = require('http');
var bl = require('bl');

var results = [];
var count = 0;

function printResults() {
    //for (i in results) {
    //    console.log(results[i]);
    //}
    results.forEach(function(data, i, arr){
        console.log(data);
    })
}
function httpGet(index) {
    var url = process.argv[index + 2];
    http.get(url, function(response){
        response.setEncoding('utf-8').pipe(bl(function(err, data){
            if (err)
                return console.err(err);
            results[index] = data.toString();
            count++;
            if (count == 3) {
                printResults();
            }
        }))
    }).on('error', console.error);
}

for (var i = 0; i < 3; i++) {
    httpGet(i);
}