
let click_times=1
function add_item(){
    let deom=document.getElementById("deom");
    let fir_div=document.createElement("div");
    let fir_div_txt=document.createTextNode(click_times)
    fir_div.appendChild(fir_div_txt);
    fir_div.className="sub_div";
    deom.appendChild(fir_div)
    click_times+=1

}
let colour_index=0
const $ = selector => document.querySelector(selector);
const colours = ['red', 'green', 'orange', 'blue', 'pink', 'yellow','brown'];
function change_colour(){
    let all = document.querySelectorAll('.sub_div');
    let length=all.length
    while (length>0){
        length-=1
        all[length].style.background = colours[colour_index];
    }

    colour_index += 1;
    if (colour_index >7){
        colour_index =0;
    }

}
function change_back_colour(){
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);
    let z = Math.floor(Math.random()*256);

    document.body.style.background = 'rgba( '+x+','+y+','+z+','+1+')';
}


function set_cookies(){
    const name="chenhao liu";
    const s_id="101249555";
    let cookies="name: "+ name +"," + "student_id: "+s_id;


    alert(cookies);
}


$("#c_colour").addEventListener('click', change_colour);
$("#c_back_colour").addEventListener('click', change_back_colour);
$("#cookies").addEventListener('click', set_cookies);