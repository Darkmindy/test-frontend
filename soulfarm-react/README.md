# Soulfarm React - Replica della Homepage

Questo progetto React replica fedelmente la homepage del sito web Soulfarm (https://soulfarm.it/). Utilizza Vite, TypeScript e CSS Modules per un'esperienza di sviluppo efficiente e un codice ben strutturato.

## Indice dei Contenuti

- [Soulfarm React - Replica della Homepage](#soulfarm-react---replica-della-homepage)
- [Indice dei Contenuti](#indice-dei-contenuti)
- [Installazione](#installazione)
- [Tecnologie Utilizzate (Frontend)](#tecnologie-utilizzate-frontend)
- [Struttura del Progetto](#struttura-del-progetto)
- [Componenti Principali](#componenti-principali)
- [CSS Modules](#css-modules)
- [Responsive Design](#responsive-design)
- [Crediti](#crediti)

## Installazione

1.  Clona la repository da GitHub:

    ```bash
    git clone https://github.com/Darkmindy/test-frontend.git
    cd soulfarm-react
    ```

2.  Installa le dipendenze utilizzando pnpm:

    ```bash
    pnpm install
    ```

3.  Avvia il server di sviluppo:

    ```bash
    pnpm run dev
    ```

4.  Apri il browser all'indirizzo `http://localhost:5173` (o la porta indicata da Vite).

## Tecnologie Utilizzate (Frontend)

-   **React:** Libreria JavaScript per la creazione di interfacce utente.
-   **TypeScript:** Linguaggio di programmazione che aggiunge tipizzazione statica a JavaScript.
-   **Vite:** Strumento di build veloce per applicazioni web moderne.
-   **CSS Modules:** Per la gestione degli stili CSS in modo modulare e isolato.
-   **pnpm:** Gestore di pacchetti JavaScript veloce ed efficiente.

## Struttura del Progetto

| Cartella/File | Descrizione/Scopo |
|---|---|
| `src/assets/images/` | Immagini del progetto |
| `src/assets/icons/` | Icone del progetto |
| `src/components/ProductCard.tsx` | Componente per visualizzare una scheda prodotto |
| `src/sections/Header.tsx` | Intestazione del sito |
| `src/sections/Hero.tsx` | Sezione introduttiva |
| `src/sections/Products.tsx` | Sezione dei prodotti |
| `src/sections/About.tsx` | Sezione "Chi Siamo" |
| `src/sections/Footer.tsx` | Piè di pagina |
| `src/App.tsx` | Componente principale dell'applicazione |
| `src/main.tsx` | Punto di ingresso dell'applicazione |
| `src/Products.module.css` | Stili per il componente Products |
| `public/` | File statici |
| `package.json` | Informazioni sul progetto e dipendenze |
| `pnpm-lock.yaml` | Lock file per pnpm |
| `vite.config.ts` | Configurazione di Vite |

## Componenti Principali

-   **Header:** Intestazione del sito con logo e menu di navigazione.
-   **Hero:** Sezione introduttiva con immagine di sfondo e testo.
-   **Products:** Sezione che mostra i prodotti offerti.
-   **About:** Sezione "Chi Siamo" con informazioni sull'azienda.
-   **Footer:** Piè di pagina con informazioni di contatto e link utili.
-   **ProductCard:** Componente riutilizzabile per visualizzare una scheda prodotto.

## CSS Modules

Gli stili CSS sono gestiti utilizzando CSS Modules per garantire l'isolamento degli stili dei componenti e prevenire conflitti. I file CSS con estensione `.module.css` vengono importati come oggetti JavaScript, consentendo di applicare gli stili in modo dinamico.

## Responsive Design

Il progetto è progettato per essere responsivo e adattarsi a diverse dimensioni dello schermo. I media queries sono utilizzati per gestire i punti di interruzione e modificare il layout in base al dispositivo.

## Crediti

Questo progetto è stato creato da \[Stefania Deliso] come replica della homepage di Soulfarm.