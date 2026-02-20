const scrollEffect = () => {

    const bearphoneLeft = document.getElementById('bearphone-left')
    const bearphoneRight = document.getElementById('bearphone-right')

    const moveBearphones = () =>{
        let currentScroll = window.scrollY 

        console.log(currentScroll)

        bearphoneLeft.style.transform = "translateY(" + -1 * currentScroll / 5 + 'px' +")" 
        bearphoneRight.style.transform = "translateY(" + currentScroll / 15 + 'px' +")" 

    }

    window.addEventListener('scroll', moveBearphones)

}

scrollEffect()