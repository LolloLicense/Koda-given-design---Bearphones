const informationModal = () => {

    // get elements 

    const button = document.querySelector('#information-button')
    const closeButton = document.querySelector('#information-close')
    const modal = document.querySelector('#information-dialog')


    // Open modal

    const openModal = () => {
        
        modal.showModal ()

    }

    // Close modal

    const closeModal = () => {
        modal.close()
    }


    // Add events
    button.addEventListener('click' , openModal)
    closeButton.addEventListener('click' , closeModal)




}

informationModal ()