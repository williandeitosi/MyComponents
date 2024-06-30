# Card Products

Este componente é um card de produtos estilizado com TailwindCSS.


<img src="https://github.com/williandeitosi/MyComponents/assets/104787632/059bf93d-4cca-4f77-b434-6a3c5f9222de" alt="Captura de tela 2024-06-30 155048" width="500">


## 🛠️ Uso

1. **Instale as dependências:**

   Certifique-se de ter intalado:

   - **TailwindCSS**

   ```bash
   # Instalar TailwindCSS
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

   ```

2. **Importe e use o componente:**

```tsx
import { CardProduct } from './CardProduct';

function App() {
  return (
    <div>
      <CardProduct />
    </div>
  );
}

export default App;
```
