
const { criarContato, removerContato, listarContato } = require('./functions.js');

test('verificar se a lista esta vazia', function () {
    removerContato();
    var lista= listarContato();
    expect(lista).toBe('Lista está vazia');

})
test('deve criar contato', function () {
    var contatos = criarContato('ruffo', 'aln22@gmail.com', '18.99817281');

    expect(contatos.nome).toBe('ruffo');
    expect(contatos.email).toBe('aln22@gmail.com');
    expect(contatos.telefone).toBe('18.99817281');
})
 test('deve remover contato', function () {

    var contatos = criarContato('remover contato', 'ln22@gmail.com', '18.99817281');

     removerContato(contatos.id);

    var lista = listarContato(contatos);

    expect(lista).not.toContain(contatos);
 })
 test('deve verificar se o contato foi criado', function () {
   var contatos = criarContato('verificar contato', 'ln22@gmail.com', '18.99817281');

     var lista = listarContato();
     expect(lista).toContain(contatos);

 })
test('deve verificar se o compo nome esta vazio', function () {

        var contatos = criarContato('', 'ln22@gmail.com', '18.99817281');

        expect(contatos).toBe('Nome é obrigatório');
    })
test('deve verificar se o campo email esta vazio', function () {
         
        var contatos = criarContato('ruffo', '', '18.9981728');
        expect(contatos).toBe('E-mail é obrigatório');
    })
 test('deve verificar se o campo telefone esta vazio', function () {
         
        var contatos = criarContato('ruffo', 'ln22@gmail.com', '');
        expect(contatos).toBe('Telefone é obrigatório');
    })
test ('verificar se o contato foi encontrado', function () {
        removerContato();
        var lista= listarContato();

        expect(lista).not.toContain('Contato não encontrado');
    })

   