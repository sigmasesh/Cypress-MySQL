describe('Acessar banco de dados MySQL', ()=> {
    it('Acesso', function(){
        cy.task(
            "queryDb",
            `SELECT * FROM banco.categorias`
          ).then(count => {
            expect(count).to.have.lengthOf(7);
          });
    })

    })

