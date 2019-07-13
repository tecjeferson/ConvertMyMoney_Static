$(function () {
    $('#convert').click(function () {
        const cotacao = parseFloat($('#cotacao').val())
        const quantidade = parseFloat($('#quantidade').val())
        const resultado = cotacao * quantidade
        $('#resultado').append(`R$ ${resultado},00`)

        if (resultado > 0) {
            $('#convert').click(function () {
                location.reload();
            })
        }


    })
    $('#convert').click(function () {
        const cotacao = $('#cotacao').val()
        const quantidade = $('#quantidade').val()
        if (cotacao <= 0) {
            alert('Entre com o valor da cotação')
            return
        }
        if (quantidade == 0) {
            alert('Entre com o valor em Reais a ser convertido')
        } else {

        }
    })
})
