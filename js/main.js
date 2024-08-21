// Add to Docx
function addToDocx(el, parent) {

    let dataContainer = document.getElementsByClassName(`${parent}`)[0];
    console.log("div:"+dataContainer)
    if (el.checked) {
        el.parentElement.classList.remove('not-important');
        dataContainer.classList.remove('d-none')
    } else {
        el.parentElement.classList.add('not-important');
        dataContainer.classList.add('d-none')
    }
}

// adding insider elements to the docx
function CheckIfAdded(element) {
    let parent = element.parentElement;
    if (element.checked) {
        parent.parentElement.classList.remove('not-important')

    } else {
        parent.parentElement.classList.add('not-important')
    }
}

// Handling Print
function printDocx() {
    var divContents = document.getElementById("docx").innerHTML;
    var a = window.open('', '', 'height=auto, width=794');
    a.document.write('<html>');
    a.document.write(`
        <html>
            <head>
                <link rel="stylesheet" href="./css/style.css">
                <link rel="stylesheet" media="print" href="./css/print.css">
            </head>
            <body>         
            <div class="holder">

        `)
    a.document.write(divContents);
    a.document.write('</div></body></html>');
    a.document.close();
    a.print();
}


function changePosition(clickedItem, item) {
    if (clickedItem.checked) {
        const rect = clickedItem.getBoundingClientRect();
        const position = rect.top + window.scrollY;
        if (position > 830 && position < 850) {
            check(item + '-toPage2');
            let cssClass = '.'+item + '-toPage2'; 
            let element = document.querySelector(cssClass); 
            // console.log(position);
            element.parentElement.classList.add('negative-margin')
            // console.log("el",element.parentElement);
        }
        // else if (position > 1920 && position < 2100) {
        //     check(item + '-toPage3');
        // }
        // else if (position > 2640 && position < 2700) {
        //     check(item + '-toPage4')

        // }
        // else if (position > 3520 && position < 3600) {

        //     check(item + '-toPage5')

        // }
        // else if (position > 4400 && position < 4500) {

        //     check(item + '-toPage6')
        // } else {
        //     console.log(position)
        // }
    }


}

function check(page) {
    let div = document.querySelector(`.${page}`);
    console.log(`.${page}`)
    div.classList.add('show-in-print')
    // div.style.width = '100%';

}


function removeHiddenClass(el) {
    document.getElementById(el).classList.remove('hidden')
}

// document.querySelectorAll('div')