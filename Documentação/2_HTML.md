# Anatomia das Tags em HTML

As tags HTML são os blocos de construção essenciais de qualquer página web. Elas definem a estrutura e o conteúdo exibido no navegador.

## Estrutura Básica de uma Tag HTML

Uma tag HTML é composta por três partes principais:

1. **Abertura da tag**: Marca o início de um elemento HTML.
2. **Conteúdo**: O conteúdo que será exibido ou processado pelo navegador.
3. **Fechamento da tag**: Indica o fim do elemento HTML.

### Exemplo de um parágrafo

- Tag de abertura: `<p>`
- Conteúdo: "Este é um parágrafo."
- Tag de fechamento: `</p>`

## Tags de Elementos Simples (Self-Closing Tags)

Algumas tags não possuem fechamento explícito, pois não contêm conteúdo interno. Elas são usadas para elementos como imagens e quebras de linha.

### Exemplo de tags simples

- `<img>`: Representa uma imagem.
- `<br>`: Adiciona uma quebra de linha.

## Atributos nas Tags

As tags podem incluir atributos que adicionam informações ou configuram o comportamento do elemento. Os atributos são escritos dentro da tag de abertura.

### Estrutura de um atributo

- Atributo: `href`
- Valor: `"https://www.example.com"`
- Elemento: `<a href="https://www.example.com">Clique aqui</a>`

Outros exemplos de atributos incluem:

- `src`: Define o caminho de uma imagem em uma tag `<img>`.
- `alt`: Fornece uma descrição para a imagem.
- `target`: Especifica como abrir o link (por exemplo, em uma nova aba com `_blank`).
- `width` e `height`: Controlam o tamanho de imagens ou outros elementos.

## Tipos de Tags

### Tags Semânticas

Essas tags têm significado claro, tanto para os navegadores quanto para os desenvolvedores. Exemplos incluem `<header>`, `<footer>`, `<article>`, `<section>` e `<nav>`.

### Tags Não Semânticas

Essas tags não têm significado específico e são usadas geralmente para agrupamento de elementos. Exemplos incluem `<div>` e `<span>`.

## Comentários em HTML

Os comentários são usados para adicionar notas ao código sem afetar o comportamento da página. Um comentário é escrito entre `<!--` e `-->`.

## Estrutura de um Documento HTML

A estrutura básica de um documento HTML inclui as seguintes partes:

1. Declaração `<!DOCTYPE html>`: Especifica a versão do HTML.
2. Tag `<html>`: Contém todo o conteúdo da página.
3. Tag `<head>`: Inclui metadados como título, charset e links para estilos.
4. Tag `<body>`: Contém o conteúdo principal que será exibido.

### Exemplo de Estrutura

- `<header>`: Contém cabeçalhos e introduções.
- `<main>`: Inclui o conteúdo principal da página.
- `<footer>`: Apresenta informações finais ou rodapés.

## Dicas para Trabalhar com Tags HTML

1. Utilize tags semânticas sempre que possível para melhorar a acessibilidade e o SEO.
2. Feche todas as tags, mesmo aquelas que são opcionais em algumas versões de HTML.
3. Use atributos de forma consistente para maximizar a clareza do código.
4. Organize seu HTML em uma estrutura hierárquica clara para facilitar a manutenção.

# Títulos em HTML

Os títulos em HTML são utilizados para estruturar o conteúdo de uma página, criando hierarquias e melhorando a organização e acessibilidade do site. Eles são representados pelas tags `<h1>` a `<h6>`.

## Hierarquia dos Títulos

Os títulos seguem uma hierarquia que vai do mais importante (nível 1) ao menos importante (nível 6):

1. **`<h1>`**: Usado para o título principal ou o mais importante de uma página.
2. **`<h2>`**: Representa os subtítulos diretos de `<h1>`.
3. **`<h3>`**: Subnível de `<h2>`, e assim por diante até `<h6>`.

### Exemplo de Hierarquia

- `<h1>`: Título principal, como "Bem-vindo ao site".
- `<h2>`: Subtítulos, como "Sobre nós" ou "Nossos serviços".
- `<h3>`: Subcategorias dentro de um subtítulo, como "Missão" ou "Equipe".

## Importância da Hierarquia

Manter a ordem lógica dos títulos é essencial para:

1. **Acessibilidade**: Ferramentas como leitores de tela utilizam a estrutura para orientar os usuários.
2. **SEO (Otimização para Motores de Busca)**: Motores de busca consideram a hierarquia dos títulos para classificar o conteúdo.
3. **Organização Visual**: Facilita a leitura e a navegação no site.

## Características dos Títulos

- Apenas um `<h1>` deve ser usado por página para indicar o título principal.
- Os níveis dos títulos devem ser usados de forma sequencial, evitando saltos de `<h2>` para `<h4>`, por exemplo.
- Os estilos visuais dos títulos podem ser personalizados com CSS, mas a hierarquia semântica deve ser mantida no HTML.

## Dicas para Usar Títulos

1. Escreva títulos claros e descritivos para facilitar a compreensão do conteúdo.
2. Use palavras-chave relevantes nos títulos para melhorar o SEO.
3. Mantenha os títulos curtos e objetivos, especialmente nos níveis mais altos.
4. Não use títulos apenas para estilização. Se precisar de texto maior ou em negrito, prefira usar CSS para estilizar um parágrafo `<p>`.
