# 🦇 BAT PASS GENERATOR 

Aplicativo mobile para geração e cópia de senhas seguras, com temática inspirada no universo do Batman. Ideal para quem busca praticidade e segurança no gerenciamento de senhas.

## Gravação do Aplicativo em funcionamento


## 📱 Funcionalidades
- Geração automática de senhas aleatórias
- Cópia rápida da senha para a área de transferência
- Interface simples e temática

## 🧱 Estrutura do Projeto
```
src/
├── assets/
│   └── bat-logo.png
├── components/
│   ├── button/
│   │   ├── index.tsx
│   │   └── styles.ts
│   └── input/
│       ├── index.tsx
│       └── styles.ts
├── screens/
│   └── home/
│       ├── index.tsx
│       └── styles.ts
├── services/
│   ├── copy-passwd.ts
│   └── passwd-generate.ts
└── type/
    └── imagem.d.ts
```

## ⚙️ Stacks Utilizadas
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [StyleSheet](https://reactnative.dev/docs/stylesheet)
- [Expo Clipboard](https://docs.expo.dev/versions/latest/sdk/clipboard/)

## 🚀 Como usar

### 1. Clone o repositório
```
git clone https://github.com/seu-usuario/bat-pass-generator.git
```

### 2. Acesse a pasta do projeto
```
cd bat-pass-generator
```

### 3. Instale as dependências
```
npm install
```

### 4. Execute o app com Expo
```
npx expo start
```

### ✅ Regras de Negócio (Camada de Serviço)
- Gerar Senha: Lógica encapsulada na função generatePassword(length) (arquivo: services/passwd-generate.ts)

- Copiar Senha: Validação + cópia via clipboard na função copyToClipboard(value) (arquivo: services/copy-passwd.ts)

___

#### 🛠 Projeto desenvolvido como exercício prático com foco em componentização, separação de responsabilidades e usabilidade.

