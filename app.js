//projects
document.addEventListener('DOMContentLoaded', function() {
    let card = document.querySelectorAll('.projects_pic');

    for(let el of card){
    console.log(card)
        el.addEventListener('mouseover',  () =>{
            el.style.boxShadow = "-1px 9px 40px -1px black";
            el.style.marginTop = "2px";
            el.style.transition = "margin-top 0.3s ease";
        })

        el.addEventListener('mouseout',  () =>{
            el.style.boxShadow = "none";
            el.style.marginTop = "10px";
            el.style.transition = "margin-top 0.3s ease";
        })
    }
    

});





