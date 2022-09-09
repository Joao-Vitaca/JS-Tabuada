function Clicou(){
    let num = Number(document.getElementById('num').value)
    let res = document.getElementById('res')

    if(num == 0){
        window.alert('Digite um número!')
    }else{
        let i = 1
        res.innerHTML = ''
        while(i <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`
            res.appendChild(item)
            i++
        }
    }
}