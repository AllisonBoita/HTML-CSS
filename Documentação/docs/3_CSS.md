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

# Ordem de Prioridade entre `id` e `class` no CSS

## 1. Prioridade dos Seletores no CSS
O CSS segue uma hierarquia de especificidade ao aplicar estilos. A ordem de prioridade, do mais forte para o mais fraco, é:

1. **Estilos inline** (`style="color: red;"`) → **Especificidade: 1000**
2. **IDs** (`#id`) → **Especificidade: 100**
3. **Classes**, atributos e pseudo-classes (`.classe`, `[atributo]`, `:hover`) → **Especificidade: 10**
4. **Elementos e pseudo-elementos** (`h1`, `p`, `::before`, `::after`) → **Especificidade: 1**

## 2. Exemplo de Especificidade
Se tivermos os seguintes estilos:

```css
p {
  color: blue; /* Especificidade: 1 */
}

.texto {
  color: green; /* Especificidade: 10 */
}

#titulo {
  color: red; /* Especificidade: 100 */
}
```

# Cores em HEX no CSS  

## 1. O que é o Código HEX?  
O código HEX (hexadecimal) é uma forma de representar cores no CSS utilizando um formato de **seis dígitos**, combinando valores de vermelho (R), verde (G) e azul (B).  

Cada componente tem um valor entre **00** e **FF** (de 0 a 255 em decimal).  

## 2. Estrutura do Código HEX  
O formato básico é:  

`#RRGGBB`  

- `RR`: Intensidade do vermelho (00 a FF)  
- `GG`: Intensidade do verde (00 a FF)  
- `BB`: Intensidade do azul (00 a FF)  

### Exemplos:  
- **Branco** → `#FFFFFF` (R: 255, G: 255, B: 255)  
- **Preto** → `#000000` (R: 0, G: 0, B: 0)  
- **Vermelho** → `#FF0000` (R: 255, G: 0, B: 0)  
- **Verde** → `#00FF00` (R: 0, G: 255, B: 0)  
- **Azul** → `#0000FF` (R: 0, G: 0, B: 255)  

## 3. Formato HEX Simples  
Se os valores forem iguais para os dois dígitos de cada cor, podemos usar a versão curta:  

`#RGB` → reduzido de `#RRGGBB`  

### Exemplos:  
- `#FFF` → `#FFFFFF` (Branco)  
- `#000` → `#000000` (Preto)  
- `#F00` → `#FF0000` (Vermelho)  

## 4. HEX com Transparência (RGBA)  
Também podemos adicionar um quarto componente para definir a **opacidade**, no formato `#RRGGBBAA`, onde `AA` representa o nível de transparência.  

- `00` = totalmente transparente  
- `FF` = totalmente opaco  

### Exemplos:  
- `#FF000080` → Vermelho com 50% de opacidade  
- `#00000099` → Preto com 60% de opacidade  

## 5. Conversão entre HEX e RGB  
O valor HEX pode ser convertido para RGB da seguinte forma:  

Cada par de caracteres em hexadecimal pode ser convertido para decimal:  

- `#1A2B3C` →  
  - `1A` (hex) = 26 (decimal)  
  - `2B` (hex) = 43 (decimal)  
  - `3C` (hex) = 60 (decimal)  
  - **RGB(26, 43, 60)**  

## 6. Ferramentas Úteis  
- **Color Picker do Google**: Pesquise "color picker" no Google para selecionar cores e obter seus códigos HEX e RGB.  
- **Sites como Coolors e Adobe Color** ajudam a criar paletas de cores.  

## 7. Boas Práticas  
- Use **cores semânticas** (`--primary-color`, `--secondary-color`) para facilitar a manutenção do código.  
- Prefira **HEX para cores sólidas** e **RGBA para cores com transparência**.  
- Evite usar apenas cores próximas ao branco ou preto para garantir melhor acessibilidade.  

# RGB e RGBA no CSS  

## 1. O que é RGB?  
RGB (Red, Green, Blue) é um modelo de cores aditivas que combina diferentes intensidades de **vermelho (R)**, **verde (G)** e **azul (B)** para formar outras cores.  

Cada valor pode variar de **0 a 255**, onde:  
- `0` significa ausência da cor.  
- `255` significa intensidade máxima da cor.  

### Exemplos:  
- **Preto** → `rgb(0, 0, 0)` (sem luz)  
- **Branco** → `rgb(255, 255, 255)` (máxima luz)  
- **Vermelho** → `rgb(255, 0, 0)`  
- **Verde** → `rgb(0, 255, 0)`  
- **Azul** → `rgb(0, 0, 255)`  
- **Cinza** → `rgb(128, 128, 128)` (valores iguais resultam em tons de cinza)  

---

## 2. O que é RGBA?  
RGBA é uma extensão do modelo RGB que adiciona um **canal alfa (A)** para definir a transparência.  

O canal alfa varia de **0 a 1**, onde:  
- `0` → Totalmente transparente.  
- `1` → Totalmente opaco.  

### Exemplos:  
- **Vermelho com 50% de opacidade** → `rgba(255, 0, 0, 0.5)`  
- **Preto com 30% de opacidade** → `rgba(0, 0, 0, 0.3)`  
- **Branco quase invisível** → `rgba(255, 255, 255, 0.1)`  

---

## 3. Diferença entre HEX, RGB e RGBA  

| Formato | Descrição | Exemplo |
|---------|-----------|---------|
| HEX | Representação hexadecimal (mais curta) | `#FF0000` |
| RGB | Define a cor com valores numéricos | `rgb(255, 0, 0)` |
| RGBA | Igual ao RGB, mas com transparência | `rgba(255, 0, 0, 0.5)` |

---

## 4. Vantagens do RGB e RGBA  
✅ **RGB** é mais intuitivo para misturar cores do que HEX.  
✅ **RGBA** permite transparências sem precisar de imagens ou camadas extras.  
✅ **Pode ser usado em gradientes, sombras e bordas no CSS.**  

---

## 5. Uso Prático no CSS  
### Aplicando RGBA no fundo de um elemento  
```css
background-color: rgba(0, 0, 0, 0.5);
