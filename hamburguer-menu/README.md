# Menu Hambúrguer

Este componente é um menu hambúrguer estilizado com TailwindCSS.

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
