export default function Layout({ children }) {
  return (
    <div style={{ maxWidth: '640px', margin: '0 auto', padding: '2rem' }}>
      <header><h1>ElPicza Blog</h1></header>
      <main>{children}</main>
    </div>
  );
}