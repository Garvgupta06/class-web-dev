
// single line comments
/* this is a
multi line 
comment*/

// datatypes 
const output = [];
function myfun(){
    var val1 = document.getElementById("val1").value;
    var val2 = document.getElementById("val2").value;

    const obj = {
        "movie": val1,
        "rating": val2
    };
    
    output.push(obj);
    console.log(output);
}
function search(){
    let tofind =  document.getElementById("search").value;
    for(let i = 0; i<output.length; i++){
        if(output[i].movie === tofind){
            console.log(output[i]);
            break;
        }
    }
}

function del(){
    let todel = document.getElementById("del")
}