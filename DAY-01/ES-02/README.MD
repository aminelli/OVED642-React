
# Creazione progetto Typescript

## 1. Inizializzazione del progetto

```bash
npm init -y
```


## 2. Installazione di Typescript e ts-node

```bash
npm install typescript ts-node nodemon --save-dev
```

## 3. Creazione del file di configurazione di Typescript

```bash
npx tsc --init
```



## 2. Esecuzione del codice Typescript

- **Eseguire il codice una volta**:
```bash
npm start
```
- **Modalità sviluppo con ricarica automatica** (il codice si riavvia quando modifichi i file):
```bash
npm run dev
```
3. **Compilare il codice TypeScript in JavaScript**:
```bash
npm run build
```