const textarea=document.getElementById("textarea")

function funSize(e){
    let value=e.value
    textarea.style.fontSize=value+'px'
}

// style
function funBold(e){
    if (textarea.style.fontWeight=='bold') {
        textarea.style.fontWeight='normal'
        e.classList.remove('active')
    }else{
        textarea.style.fontWeight='bold'
        e.classList.add('active')
    }
}
function funItalic(e){
    if (textarea.style.fontStyle=='italic') {
        textarea.style.fontStyle='normal'
        e.classList.remove('active')
    }else{
        textarea.style.fontStyle='italic'
        e.classList.add('active')
    }
}
function funUnderline(e){
    if (textarea.style.textDecoration=='underline') {
        textarea.style.textDecoration='none'
        e.classList.remove('active')
    }else{
        textarea.style.textDecoration='underline'
        e.classList.add('active')
    }
}

// alignment
function funLeftAlign(e){
    textarea.style.textAlign='left'
}
function funCenterAlign(e){
    textarea.style.textAlign='center'
}
function funRightAlign(e){
    textarea.style.textAlign='right'
}

function funCapitalize(e){
    if(textarea.style.textTransform=='uppercase'){
        textarea.style.textTransform='none'
        e.classList.remove('active')
    }else{
        textarea.style.textTransform='uppercase'
        e.classList.add('active')
    }
}

function funClear(e){
    textarea.style.fontWeight='normal'
    textarea.style.textDecoration='none'
    textarea.style.fontStyle='normal'
    textarea.value=''
}

function funColor(e){
    textarea.style.color=e.value
}

window.addEventListener('load'),()=>{
    textarea.value=''
}