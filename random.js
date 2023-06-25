let arr=["Alan", "Bob", "Carol", "Dean", "Elin"];
function Random(){
    return arr[(Math.floor(Math.random()*arr.length))]
}
export default Random