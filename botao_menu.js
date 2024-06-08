var menuItem = document.querySelectorAll('.item_menu')

function selectlink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectlink)
)

//Expandir o menu

var botaoExpand = document.querySelector('#botao_expandir')
var menuLate = document.querySelector('.menu_lateral')

botaoExpand.addEventListener('click', function(){
    menuLate.classList.toggle('expandir')
})

