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
    // Slide 1: Portada
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

    // Slide 2: ¿Qué es Ey Oasis?
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

    // Slide 3: Pantalla de Bienvenida
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

    // Slide 4: Paso 1 - Email
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

    // Slide 5: Paso 1 - Verificación Email
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
    // Slide 9: Paso 3 - Solicitud de Permisos
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

    // Slide: Promo (usar imagen de crear contraseña)
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



    // Slide 14: Paso 4
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
    
    // Slide 17: Login
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

    // Slide 18: Login Exitoso
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

    // Slide 19: Pantalla Principal
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

    // Slide 20: Cierre
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

