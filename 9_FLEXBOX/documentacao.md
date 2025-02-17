# 🎯 O que é Flexbox e como aplicar?

O **Flexbox** (Flexible Box Layout) é um modelo de layout do CSS que permite distribuir elementos em um contêiner de forma eficiente, mesmo quando o tamanho deles é dinâmico. Ele é especialmente útil para criar layouts responsivos e alinhamentos flexíveis.

---

## 🔹 Como funciona?

O **Flexbox** é ativado ao definir `display: flex;` no elemento pai, tornando-o um **contêiner flexível**. Os elementos filhos dentro desse contêiner se tornam **itens flexíveis** e passam a ser controlados pelas propriedades do Flexbox.

---

## 🔹 Principais propriedades

### 📌 **No contêiner (pai)**
1. **`display: flex;`** → Ativa o Flexbox.
2. **`flex-direction`** → Define a direção dos itens:
   - `row` (padrão) → Da esquerda para a direita.
   - `column` → De cima para baixo.
3. **`justify-content`** → Alinhamento dos itens no eixo principal:
   - `flex-start` → Início do eixo.
   - `center` → Centralizado.
   - `space-between` → Espaço igual entre os itens.
4. **`align-items`** → Alinhamento no eixo transversal:
   - `flex-start` → No topo.
   - `center` → No meio.
   - `stretch` → Expande os itens.

---

### 📌 **Nos itens (filhos)**
1. **`flex-grow`** → Controla o crescimento do item.
2. **`flex-shrink`** → Define se o item pode reduzir de tamanho.
3. **`align-self`** → Alinhamento individual dentro do contêiner.

---

## 🔹 Exemplo prático

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.item {
  background: lightblue;
  padding: 20px;
  margin: 10px;
  flex-grow: 1;
}

<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
