# Pokédex Ionic Angular

Este projeto é uma Pokédex desenvolvida com Ionic + Angular, consumindo dados da [PokéAPI](https://pokeapi.co/).  
Você pode listar, buscar, favoritar, remover e visualizar detalhes dos pokémons de forma responsiva, com suporte a infinite scroll.

---

## Funcionalidades

- **Listagem de Pokémons:** Exibe os pokémons em um grid responsivo.
- **Busca por Nome:** Campo de busca para filtrar pokémons pelo nome em tempo real.
- **Favoritos:** Marque/desmarque pokémons como favoritos (ícone de estrela).
- **Remover Card:** Botão de fechar no card para remover o pokémon da lista.
- **Infinite Scroll:** Carrega mais pokémons automaticamente ao rolar a lista.
- **Detalhes do Pokémon:** Clique em um card para navegar para a página de detalhes.

---

## Como rodar o projeto

1. **Clone o repositório:**
   ```
   git clone https://github.com/WedsonTavares/full-Stack.git
   ```

2. **Acesse a pasta do projeto:**
   ```
   cd full-Stack/pokeapi-ionic-app
   ```

3. **Instale as dependências:**
   ```
   npm install
   ```

4. **Rode o projeto:**
   ```
   ionic serve
   ```
   O app abrirá automaticamente no navegador (geralmente em http://localhost:8100).

---

## Estrutura de Pastas

```
src/
  app/
    home/                # Página principal (listagem)
    features/
      pokemon-detail/    # Página de detalhes do pokémon
```

---

## Como usar

- **Buscar:** Digite o nome do pokémon no campo de busca.
- **Favoritar:** Clique na estrela do card para favoritar/desfavoritar.
- **Remover:** Clique no "X" do card para remover da lista.
- **Detalhes:** Clique no card para ver mais informações.
- **Scroll:** Role até o fim da lista para carregar mais pokémons.

---

## Observações

- Os favoritos não são salvos entre sessões.
- O botão de fechar remove o card apenas da visualização atual.
- O sistema pode ser expandido para salvar favoritos no `localStorage` ou abrir detalhes em modal.

---

## Créditos

- [Ionic Framework](https://ionicframework.com/)
- [Angular](https://angular.io/)
-
