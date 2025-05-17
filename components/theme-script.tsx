// Este componente agrega un script que se ejecuta inmediatamente para evitar parpadeos
export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Verificar si hay una preferencia guardada
            const theme = localStorage.getItem('theme');
            
            // Aplicar tema según la preferencia
            if (theme === 'dark') {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          })();
        `,
      }}
    />
  )
}
