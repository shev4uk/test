window.addEventListener('DOMContentLoaded', (event) => {
    console.log('dom loaded');
    button.addEventListener('click', function(event) {
        // alert('click');
        console.log(event);
        const parent = this.closest('.item-form');
        const input = parent.querySelector('input');
        console.dir(input.value);
        // input.value = 'test'
    });
    
    // const box = document.querySelector('.box');
    // document.addEventListener('click', function(event) {
    //     console.log(event);
    //     box.style.top = event.offsetY + 'px';
    //     box.style.left = event.offsetX + 'px';
    // })
    
    const cells = document.querySelectorAll('table td');
    // Array.from(cells).forEach(function(td) {
    //     td.addEventListener('click', function() {
    //         alert(this.innerHTML);
    //     });
    // });
    
    const table = document.querySelector('table');
    table.addEventListener('click', function(event) {
        console.dir(event.target.tagName === 'TD');
        if (event.target.tagName === 'TD') {
            alert(event.target.innerHTML);
        }
    });
    
    table.addEventListener('mouseover', function(event) {
        const target = event.target;
        if (target.tagName === 'TD') {
            target.classList.add('selected');
        }
    });
    table.addEventListener('mouseout', function(event) {
        const target = event.target;
        if (target.tagName === 'TD') {
            target.classList.remove('selected');
        }
    });
    
    const link = document.querySelector('.link');
    link.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('link');
    });
})