# Menu Hambúrguer

Este componente é um menu hambúrguer estilizado com TailwindCSS.

<img src="https://github.com/williandeitosi/MyComponents/assets/104787632/f5da0be1-232c-4bcf-90a6-42f9817fe77d" alt="button menu hamburguer" width="80"/>


<img src="https://github.com/williandeitosi/MyComponents/assets/104787632/703dfcbf-3d58-48d5-a317-a7a3edc4ecbb" alt="button menu hamburguer open" width="500"/>




## 🛠️ Uso

1. **Instale as dependências:**

   Certifique-se de ter intalado:

   - **TailwindCSS**
   - **Phosphor**

   ```bash
   # Instalar TailwindCSS
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

   # Instalar Phosphor Icons
   npm install @phosphor-icons/react
   ```

2. **Importe e use o componente:**

```tsx
import { HamburgerMenu } from './HamburgerMenu';

function App() {
  return (
    <div>
      <HamburgerMenu />
    </div>
  );
}

export default App;
```
