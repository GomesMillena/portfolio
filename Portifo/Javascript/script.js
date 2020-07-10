function add_active_to_els(container, elements){

    let add_active_to_els_func = function(){

        let container_el = document.querySelector(container);

        if(container_el.getBoundingClientRect().top <= (window.innerHeight / 2)){

            let all_elements = document.querySelectorAll(elements);

            if(!all_elements[0].classList.contains('active')){

                for (var i = 0; i < all_elements.length; i++) {
                    all_elements[i].classList.add('active');
                }

            }

        } 
    }

    add_active_to_els_func();

    window.addEventListener('scroll', add_active_to_els_func);
}

window.onload = function(){
    add_active_to_els('.skill-container', '.skill-item-list .item');
}