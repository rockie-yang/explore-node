/**
 * Created by rockieyang on 07/05/16.
 */

var sum = 0;
for (var i = 2; i < process.argv.length; ++i) {
    sum += +process.argv[i];
}

console.log(sum);