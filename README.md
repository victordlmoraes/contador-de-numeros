# Contador de Números

Elaboração de um contador simples de números.

<a name="ancora"></a>
## Guia
- [Hokage](#ancora1)
- [Kazekage](#ancora2)
- [Mizukage](#ancora3)
- [Raikage](#ancora4)
- [Tsuchikage](#ancora4)

<a id="ancora1"></a>
## Hokage
> Loren Ipsum

Este contador permite realizar contagens de números simples, através de dois valores definidos pelo usuário, um inicial e outro final. O usuário também poderá definir o **salto da contagem** (se deseja contar de um em um, dois em dois, seis a cada seis, etc.). É possível realizar a contagem a partir de um número negativo, basta defini-lo no campo inicial.
[Topo](#ancora)

Também é possível ao usuário escolher uma contagem **crescente ou decrescente**. Para uma contagem decrescente, basta que o usuário defina que o número final da contagem seja **menor** que o número inicial.

Após a contagem ser definida, todos os números da sequência determinada pelo usuário serão exibidos, logo abaixo do botão responsável por gerar a contagem.

## Tratamento de Possíveis Erros

No contador, também são feitas algumas verificações para o caso de erros por parte do usuário. Caso o usuário não entre com um dos valores pedidos pelo contador, será mostrado um alerta de erro na tela, solicitando a verificação dos dados. Caso o salto tenha valor **zero ou negativo**, a contagem não é realizada, e outro alerta de erro é apontado. Porém, nesse caso, **o contador automaticamente irá considerar o valor do salto como 1**.

## :camera_flash: Screenshots

### :desktop_computer: Versão Desktop
![](images/desktop/view-desktop-1.png)
![](images/desktop/view-desktop-2.png)

### :iphone: Versão Mobile
#### Moto G4
<img src="images/mobile/view-MotoG4.png" width="300" />

#### Iphone X
<img src="images/mobile/view-iPhoneX.png" width="300" />
