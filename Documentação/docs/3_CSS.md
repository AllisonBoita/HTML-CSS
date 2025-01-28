# CSS (Cascading Style Sheets)  

CSS é a linguagem utilizada para estilizar páginas da web, controlando a aparência e o layout dos elementos HTML. Ele permite definir cores, fontes, espaçamentos, tamanhos e até animações.  

---

## 📌 Maneiras de Adicionar CSS  

### 1️⃣ CSS Inline  
O estilo é aplicado diretamente no elemento HTML através do atributo `style`.  

**Exemplo:**  
`<p style="color: red; font-size: 16px;">Texto vermelho</p>`  

⚠️ **Desvantagens:** Difícil manutenção e pouca reutilização.  

### 2️⃣ CSS Interno (Embedded)  
O CSS é inserido dentro da própria página HTML dentro da tag `<style>`, geralmente no `<head>`.  

**Exemplo:**  
`<head> <style> p { color: blue; font-size: 18px; } </style> </head>`  

### 3️⃣ CSS Externo  
O CSS é escrito em um arquivo separado (ex: `styles.css`) e vinculado ao HTML através da tag `<link>`.  

**Exemplo:**  
`<link rel="stylesheet" href="styles.css">`  

✅ **Vantagens:** Organização, reutilização e manutenção mais fácil.  

---

## 🎨 Anatomia de uma Regra CSS  

Uma regra CSS é composta por três partes principais:  

- **Seletor:** Define quais elementos serão estilizados.  
- **Propriedade:** O que será modificado (ex: `color`, `font-size`).  
- **Valor:** O valor atribuído à propriedade (ex: `red`, `16px`).  

**Exemplo:**  
`p { color: red; font-size: 16px; }`  

---

## 🔀 Ordem de Aplicação do CSS  

Quando há múltiplas regras aplicadas a um mesmo elemento, o CSS segue a seguinte ordem de prioridade:  

1. **Estilos do navegador** (padrão do HTML).  
2. **CSS Externo** (arquivo `.css`).  
3. **CSS Interno** (`<style>` no HTML).  
4. **CSS Inline** (atributo `style` dentro da tag HTML).  
5. **Regras com `!important`** (forçam prioridade absoluta).  

---

## 📝 Comentários em CSS  

Para adicionar comentários no CSS, utilize `/* comentário */`.  

**Exemplo:**  
`/* Isso é um comentário e não será exibido no site */`  

Os comentários são úteis para organizar o código e documentar partes importantes.  

# Classes e IDs em HTML e CSS

## 1. Class (`class`)
- Pode ser usada em **vários elementos**.
- É recomendada para aplicar o mesmo estilo a múltiplos itens.
- No CSS, as classes são referenciadas com um ponto (`.`).

## 2. ID (`id`)
- Deve ser **único** por página.
- Usado para identificar elementos específicos.
- No CSS, os IDs são referenciados com um jogo da velha (`#`).

## Diferenças entre `class` e `id`
| Característica | `class` | `id` |
|--------------|--------|-----|
| Pode ser reutilizado? | Sim, em vários elementos | Não, deve ser único |
| Símbolo no CSS | `.` (ponto) | `#` (jogo da velha) |
| Prioridade no CSS | Menor | Maior |

## Boas práticas
- Use `class` para estilizar múltiplos elementos.
- Use `id` apenas para elementos únicos ou como âncoras no HTML.
- Evite usar `id` no CSS para manter a flexibilidade dos estilos.
