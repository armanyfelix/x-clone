import { AuthButtonServer } from '@/app/components/auth-button-server'

export default function Login () {
  return (
    <section className="grid place-content-center text-center min-h-screen">
      <h1 className="text-xl font-bold mb-4">
        Inicia sesión en <span className="line-through">twitter</span>
        <span> X-clone</span>
      </h1>
      <AuthButtonServer />
    </section>
  )
}
