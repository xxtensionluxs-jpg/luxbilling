export default function Home() {
  return (
    <main style={{
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'system-ui',
      padding: '24px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>
        LUXBILLING
      </h1>
      <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '32px' }}>
        Premium invoicing for modern businesses in Kenya.
      </p>
      <a href="https://wa.me/254719277409" style={{
        backgroundColor: '#25D366',
        color: '#000',
        padding: '16px 32px',
        borderRadius: '12px',
        fontWeight: 600,
        textDecoration: 'none',
        fontSize: '1.1rem'
      }}>
        Chat on WhatsApp
      </a>
    </main>
  )
}
