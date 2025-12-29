export interface SlideData {
    type: 'cover' | 'intro' | 'welcome' | 'step' | 'confirmation' | 'login' | 'main' | 'closing';
    className: string;
    content: {
        stepNumber?: number;
        title: string;
        subtitle?: string;
        description?: string;
        image?: string;
        features?: Array<{
            title: string;
            description: string;
            icon?: string;
        }>;
        infoBox?: {
            title: string;
            description: string;
        };
        requirements?: string[];
        grid?: boolean;
        bgColor?: 'red' | 'white' | 'gradient';
        downloads?: Array<{
            label: string;
            file: string;
        }>;
    };
}

export const slides: SlideData[] = [
    {
        type: 'cover',
        className: 'slide-1',
        content: {
            title: 'Ey Oasis',
            subtitle: 'Tu Oasis de Entretenimiento',
            description: 'Guía completa del flujo de registro y uso',
            image: 'index.jpeg',
            bgColor: 'red'
        }
    },
    {
        type: 'intro',
        className: 'slide-2',
        content: {
            title: '¿Qué es Ey Oasis?',
            description: 'Ey Oasis es tu aplicación de entretenimiento todo-en-uno que une gastronomía, gestión de créditos y asistencia personalizada en salas de entretenimiento.\n\nUna experiencia completa diseñada para hacer tu tiempo libre más placentero y conveniente.',
            image: 'initPageLoading.jpeg',
            bgColor: 'white'
        }
    },
    {
        type: 'welcome',
        className: 'slide-3',
        content: {
            title: 'Pantalla de Bienvenida',
            features: [
                {
                    title: 'Iniciar Sesión',
                    description: 'Si ya tienes cuenta, accede con tu usuario y contraseña.'
                },
                {
                    title: 'Crear Cuenta Nueva',
                    description: 'Nuevos usuarios pueden registrarse siguiendo un proceso simple y seguro de 5 pasos.'
                }
            ],
            image: 'welcomePage.jpeg',
            bgColor: 'white'
        }
    },
    {
        type: 'step',
        className: 'slide-4',
        content: {
            stepNumber: 1,
            title: 'Registro: Email',
            description: 'El cliente ingresa su correo electrónico para iniciar el proceso de registro.',
            image: '1step.jpeg',
            grid: true,
            infoBox: {
                title: '¿Qué decirle al cliente?',
                description: '"Por favor ingresa tu correo electrónico. Te enviaremos un código de verificación para confirmar tu identidad."'
            }
        }
    },

    {
        type: 'step',
        className: 'slide-4',
        content: {
            stepNumber: 2,
            title: 'Verificación de Email',
            description: 'Se envía un código de 6 dígitos al correo electrónico proporcionado.',
            image: '2stepCode.jpeg',
            grid: true,
            infoBox: {
                title: '¿Qué decirle al cliente?',
                description: '"Revisa tu correo, te hemos enviado un código de 6 dígitos. Ingrésalo aquí para verificar tu email."'
            }
        }
    },
    {
        type: 'step',
        className: 'slide-4',
        content: {
            stepNumber: 2,
            title: 'Confirmación de Email',
            description: 'La app muestra alertas para confirmar la verificación del correo.',
            image: '2stepCodeSuccess.jpeg',
            grid: true,
            infoBox: {
                title: 'Mensaje al cliente',
                description: '"Tu correo ha sido verificado exitosamente. Ahora continuaremos con el siguiente paso."'
            }
        }
    },
    {
        type: 'step',
        className: 'slide-5',
        content: {
            stepNumber: 3,
            title: 'Permisos de Cámara',
            description: 'La app solicita permiso para acceder a la cámara del dispositivo.',
            image: 'permision3Step.jpeg',
            grid: true,
            infoBox: {
                title: '¿Qué decirle al cliente?',
                description: '"Necesitamos acceso a tu cámara para escanear tu DNI. Toca \'Permitir\' para continuar."'
            }
        }
    },
    {
        type: 'step',
        className: 'slide-5',
        content: {
            stepNumber: 3,
            title: 'Instrucciones DNI',
            description: 'Se muestran instrucciones para escanear el documento.',
            image: '3stepDni.jpeg',
            grid: true,
            infoBox: {
                title: 'Guía al cliente',
                description: 'Coloca tu DNI en un lugar con buena iluminación. Asegúrate de que esté completo dentro del marco.'
            }
        }
    },
    {
        type: 'step',
        className: 'slide-5',
        content: {
            stepNumber: 3,
            title: 'Preparación del Escaneo',
            description: 'Se preparará el escaneo del DNI.',
            image: 'scanDni.jpeg',
            grid: true,
            infoBox: {
                title: 'Mensaje al cliente',
                description: 'Podrás escanearlo usando la cámara de tu dispositivo.'
            }
        }
    },
    {
        type: 'step',
        className: 'slide-5',
        content: {
            stepNumber: 3,
            title: 'DNI Verificado',
            description: 'El sistema procesa y verifica la información del documento.',
            image: 'alertDniScan.jpeg',
            grid: true,
            infoBox: {
                title: 'Confirmación',
                description: '"Tu DNI ha sido capturado exitosamente. Estamos verificando tu información..."'
            }
        }
    },
    {
        type: 'step',
        className: 'slide-5',
        content: {
            title: 'Crea tu Contraseña',
            stepNumber:4,
            description: 'Asegúrate de elegir una contraseña segura. Aquí te mostramos cómo hacerlo paso a paso.',
            image: '4step.jpeg',
            grid: true,
            infoBox: {
                title: 'Consejo',
                description: 'Usa una frase fácil de recordar pero difícil de adivinar. Combina letras, números y símbolos.'
            },
        }
    },
    {
        type: 'step',
        className: 'slide-5',
        content: {
            stepNumber: 4,
            title: '¡Registro Exitoso!',
            description: 'La cuenta ha sido creada correctamente.',
            image: '5step.jpeg',
            grid: true,
            infoBox: {
                title: '¡Felicidades!',
                description: '"¡Bienvenido a Ey Oasis! Tu cuenta ha sido creada exitosamente. Ya puedes iniciar sesión."'
            }
        }
    },
    {
        type: 'login',
        className: 'slide-7',
        content: {
            title: 'Inicio de Sesión',
            description: 'Usuarios registrados ingresan con su usuario/documento y contraseña.',
            image: 'login.jpeg',
            grid: true,
            infoBox: {
                title: 'Para usuarios que ya tienen cuenta',
                description: '"Ingresa tu número de usuario y contraseña para acceder a tu cuenta de Ey Oasis."'
            }
        }
    },
    {
        type: 'login',
        className: 'slide-7',
        content: {
            title: 'Acceso Concedido',
            description: 'El sistema confirma el inicio de sesión exitoso.',
            image: 'loginSuccess.jpeg',
            grid: true,
            infoBox: {
                title: 'Confirmación',
                description: '"¡Bienvenido de nuevo! Has iniciado sesión correctamente. Redirigiendo a la pantalla principal..."'
            }
        }
    },
    {
        type: 'main',
        className: 'slide-8',
        content: {
            title: 'Interfaz Principal',
            features: [
                {
                    icon: '🎯',
                    title: 'Asistencia en Sala',
                    description: 'Solicita ayuda o servicios directamente desde tu dispositivo mientras disfrutas de la sala.'
                },
                {
                    icon: '💳',
                    title: 'Carga de Créditos',
                    description: 'Recarga saldo de manera fácil y segura para usar en todas las áreas del establecimiento.'
                },
                {
                    icon: '🍽️',
                    title: 'Gastronomía',
                    description: 'Explora el menú completo y ordena desde la app.'
                }
            ],
            image: 'index.jpeg',
            bgColor: 'white'
        }
    },
    {
        type: 'step',
        className: 'slide-flow',
        content: {
            stepNumber: 1,
            title: 'Conexión Requerida',
            description: 'Para acceder a los servicios, primero debes vincularte a una terminal.',
            image: 'maquinaRequerida.jpeg',
            grid: true,
            infoBox: {
                title: 'Escaneo inicial',
                description: 'Toca el botón rojo central para abrir la cámara y escanear el código QR de la máquina.'
            }
        }
    },
    {
        type: 'step',
        className: 'slide-flow',
        content: {
            stepNumber: 2,
            title: 'Permisos de Cámara',
            description: 'La aplicación solicitará acceso a tu cámara para poder leer los códigos QR.',
            image: 'PermisosCamaraScanMaquina.jpeg',
            grid: true,
            infoBox: {
                title: 'Configuración',
                description: 'Selecciona "Mientras la app está en uso" para garantizar un funcionamiento fluido.'
            }
        }
    },
    {
        type: 'step',
        className: 'slide-flow',
        content: {
            stepNumber: 3,
            title: 'Escaneo del QR',
            description: 'Apunta con el visor hacia el código QR que se encuentra en la pantalla de la máquina.',
            image: 'ScanQr.jpeg',
            grid: true,
            infoBox: {
                title: 'Ayuda visual',
                description: 'Asegúrate de que el código quede dentro del marco rojo para que la lectura sea instantánea.'
            }
        }
    },
    {
        type: 'step',
        className: 'slide-flow',
        content: {
            stepNumber: 4,
            title: 'Máquina Conectada',
            description: 'Una vez reconocido el QR, verás el mensaje de confirmación y el ID de la máquina activa.',
            image: 'QrScan.jpeg',
            grid: true,
            infoBox: {
                title: 'Estado de conexión',
                description: 'El indicador celeste "Conexión activa" confirma que ya puedes realizar pedidos o pedir asistencia.'
            }
        }
    },
    {
        type: 'step',
        className: 'slide-flow',
        content: {
            stepNumber: 5,
            title: 'Solicitud de Asistencia',
            description: 'Al solicitar ayuda, el sistema procesará tu requerimiento de forma inmediata.',
            image: 'ProcesoSolicitud.jpeg',
            grid: true,
            infoBox: {
                title: 'Procesando',
                description: 'Espera un momento mientras notificamos al personal de sala sobre tu ubicación.'
            }
        }
    },
    {
        type: 'step',
        className: 'slide-flow',
        content: {
            stepNumber: 6,
            title: 'Seguimiento en Tiempo Real',
            description: 'Podrás ver el estado de tu solicitud directamente en la pantalla principal.',
            image: 'SolicitudEnProceso.jpeg',
            grid: true,
            infoBox: {
                title: 'En Proceso',
                description: 'El estado cambiará a "En Proceso" cuando un miembro del personal esté camino a tu posición.'
            }
        }
    },
    {
        type: 'step',
        className: 'slide-flow',
        content: {
            stepNumber: 7,
            title: 'Solicitud Completada',
            description: 'Una vez que hayas sido atendido, recibirás la confirmación de cierre de la solicitud.',
            image: 'SolicitudFinalizada.jpeg',
            grid: true,
            infoBox: {
                title: 'Finalizado',
                description: 'La tarjeta de asistencia se cerrará automáticamente en unos segundos.'
            }
        }
    },
    {
        type: 'closing',
        className: 'slide-10',
        content: {
            title: 'Ey Oasis\nRedefiniendo el Entretenimiento',
            subtitle: 'Una experiencia única a tu alcance',
            description: '¡Gracias!',
            bgColor: 'red'
        }
    }
];

