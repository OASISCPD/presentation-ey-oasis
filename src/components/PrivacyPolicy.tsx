import React from 'react'
import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-wrapper">
      <div className="privacy-card">
        <div className="privacy-header">
          <Link to="/" className="back-link">← Volver</Link>
          <h1 className="privacy-title">Política de Privacidad - EY Oasis</h1>
        </div>

        <div className="privacy-body" role="article">
          <p><strong>Última actualización:</strong> 9 de febrero de 2026</p>

          <h2>1. Información que recopilamos</h2>
          <p>La aplicación EY Oasis recopila la siguiente información:</p>
          <ul>
            <li><strong>Información de cuenta:</strong> email, contraseña encriptada, datos de perfil</li>
            <li><strong>Datos de identificación:</strong> número de documento (DNI) escaneado mediante cámara</li>
            <li><strong>Información de Club VIP:</strong> número de socio, puntos acumulados, categoría</li>
            <li><strong>Códigos QR:</strong> escaneados para conexión con máquinas y servicios</li>
          </ul>

          <h2>2. Uso de la cámara</h2>
          <p>La aplicación solicita permiso de cámara únicamente para:</p>
          <ul>
            <li>Escanear códigos QR para conectar con máquinas y servicios</li>
            <li>Escanear documentos de identidad (DNI) durante el registro</li>
          </ul>
          <p>No almacenamos imágenes de la cámara. Solo procesamos la información del código QR o DNI escaneado.</p>

          <h2>3. Cómo usamos tu información</h2>
          <p>Utilizamos la información recopilada para:</p>
          <ul>
            <li>Crear y gestionar tu cuenta de usuario</li>
            <li>Proporcionar acceso a servicios del Club Oasis VIP</li>
            <li>Procesar pedidos de gastronomía</li>
            <li>Gestionar puntos y beneficios</li>
            <li>Enviar notificaciones relacionadas con la app</li>
          </ul>

          <h2>4. Compartir información</h2>
          <p>No vendemos ni compartimos tu información personal con terceros, excepto:</p>
          <ul>
            <li>Cuando sea necesario para proporcionar los servicios solicitados</li>
            <li>Cuando sea requerido por ley</li>
          </ul>

          <h2>5. Seguridad</h2>
          <p>Implementamos medidas de seguridad para proteger tu información personal, incluyendo encriptación de contraseñas y comunicación segura con nuestros servidores.</p>

          <h2>6. Tus derechos</h2>
          <p>Tienes derecho a:</p>
          <ul>
            <li>Acceder a tu información personal</li>
            <li>Solicitar corrección de datos incorrectos</li>
            <li>Solicitar eliminación de tu cuenta</li>
          </ul>

          <h2>7. Contacto</h2>
          <p>Para consultas sobre esta política de privacidad:</p>
          <ul>
            <li><strong>Email:</strong> info@bingopilar.com.ar</li>
            <li><strong>Web:</strong> https://bingopilar.com.ar</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
