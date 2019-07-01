$(function () {
    $('#convert').click(function () {
        const cotacao = parseFloat($('#cotacao').val())
        const quantidade = parseFloat($('#quantidade').val())
        const resultado = cotacao * quantidade
        $('#resultado').append(resultado)

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
            alert('Entre com a quantidade de Dolares')
        } else {

        }
    })
})