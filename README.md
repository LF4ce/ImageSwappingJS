# ImageSwappingJS


## Descrição
Esse repositório foi criado para fins didáticos com intuíto único de explorar técnicas de manipulação de elementos DOM no HTML.
O código produz um grid de 2 por 2. Dentro de cada célula há uma imagem e um seletor de cores.
Ao clicar nas cores do seletor a imagem é substituida por outra com o fundo igual a cor selecionada.

## Stack
HTML, CSS e JavaScript foram utilizados para a criaçao deste componente.

## Como funciona
Utilizando JavaScript para manipular elementos DOM do HTML criamos elementos dinamicamente dentro de um ponto especifico do HTML.

![index.png](.media%2Findex.png)

Assumimos que teremos uma lista de elementos com seus nomes e suas variacoes de cores.

![dados.png](.media%2Fdados.png)

Agora para cada um desses elementos geramos HTML necessario para obter um div com a imagem e o seletor de cores.

![item.png](.media%2Fitem.png)

O resultado final é um grid dinamico gerado a partir dos dados recebidos.

![grid.png](.media%2Fgrid.png)