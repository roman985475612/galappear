$(function() {
    $('.sidenav').sidenav()

    $('.modal').modal()

    show( document.querySelector('.row-1') )

    $('.row-2').scrollfire({
        offset: 0,
        onBottomIn: ( elm ) => show( elm )
    })

    $('.row-3').scrollfire({
        offset: 0,
        onBottomIn: ( elm ) => show( elm )
    })
})

function show( elm ) {
    for( let op = 0; op <= 1; op += 0.01) {
        setTimeout(() => {
            console.log(op) 
            elm.style.opacity = op; 
        }, op * 3000, elm);
    }
}