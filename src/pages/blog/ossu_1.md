---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Systematic Program Design"
titlePreview: "The best way i found to how to code"
description: "When I first started learning to code, everything felt chaotic — so many things to think about, so many ways to do the same thing. But then I stumbled upon a systematic approach to programming that changed the way I view code."
author: "caffeine*"
genre: "OSSU"
image:
  url: "/images/img_blog.jpg"
  alt: "Abstract photo for Systematic Program Design"
tags:
  - name: "computer science"
  - name: "github"
  - name: "git"
pubDate: 24/10/2024
---

### What is it ?

It's simple one of the best courses, i ever take on computer science.
It' simple, logical, make u step like a baby for grown and then be able to walks alone on the steps you have create on your own!

### Why is that ?

L'argomento principale di questo corso, è quello di riuscire a dividere ogni problema piccolo o grande che sia in piccoli <span class="h_color1">steps</span>.

#### Quali sono gli <span class="h_color1">steps</span> ?

Una sezione del corso, riguarda a _How to Design Function_ (HtDF). <br />
Per farlo dobbiamo dividerla in 6 <span class="h_color1">steps</span> fondamentali:


Supponiamo di voler creare una funzione che qualsiasi `n` prende in entrata, restituisce il prodotto moltiplicato per 2.

1. **Signature**:
   dichiariamo il tipo di _input_ in entrata, e il tipo di _output_ in uscita <br />
   `// Number -> Number`
2. **Purpose**:
   Piccola descrizione di cosa fa la nostra funzione, cosa produce e se prende qualcosa in entrata <br />
   `// prodce the product on the given number mulitplyed by 2`
3. **Stub**:
   E' il nostro primo prototipo della funzione, dove decidiamo il nome della funzione e il nome dell'argomento ritorna sempre il caso _peggiore_

   ```js
   // Stub
   function multiply(n) {
     return 0;
   }
   ```

4. **Tests**:
   Prima di iniziare a mettere le mani in pasta, creiamo dei test, per capire cosa veramente vogliamo dalla funzione, cosa ci aspettiamo se passiamo un _n_ argomento
   e cosa deve ritornare.

   ```js
   assert(multiply(0), 0);
   assert(multiply(2), 4);
   assert(multiply(3), 6);
   assert(multiply(4), 8);
   assert(multiply(10), 20);
   ```

   > Qui eseguiamo il nostro codice, per vedere se abbiamo errori di sintassi e se i nostri test funzionano come _vogliamo_

5. **Template**:
   Iniziamo a dirigerci verso la funzione finale, immaginatelo come un placeholder che si può adattare in base alla vostra logica.

   ```js
   function multiply(n){ // Template
       return (n ...)
   }
   ```

6. **Body function**:
   Qui riempiamo i `...` lasciati dal template e inseriamo la nostra logica.
   ```js
   function multiply(n) {
     return n * 2;
   }
   ```

Mettiamo tutto insieme, è questo è il risultato finale :

```js
// Number -> Number                         //Signature
// produce the product on the given number  //Purpose

//function multiply(n) { // Stub
//  return 0;
//}

// Tests
assert(multiply(2), 4);
assert(multiply(3), 6);
assert(multiply(4), 8);
assert(multiply(10), 20);

//function multiply(n){ // Template
//    return (n ...)
//}

function multiply(n) {
  return n * 2;
}
```
