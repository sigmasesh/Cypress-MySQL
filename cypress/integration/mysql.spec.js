describe('Acessar banco de dados MySQL', () => {
  const queryQ = `select * from pedidos as p left join produtos as pr on pr.ID_Produto = pr.ID_Produto`
  it('Left Join', function () {
    cy.task("queryDb", queryQ)
  })
})

   
  
